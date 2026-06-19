package com.smartpizza.serviceImpl;
 
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
import com.smartpizza.dto.CartItemDTO;
import com.smartpizza.entity.Cart;
import com.smartpizza.entity.CartItem;
import com.smartpizza.entity.Pizza;
import com.smartpizza.entity.User;
import com.smartpizza.exception.ResourceNotFoundException;
import com.smartpizza.repository.CartItemRepo;
import com.smartpizza.repository.CartRepo;
import com.smartpizza.repository.PizzaRepo;
import com.smartpizza.repository.UserRepo;
import com.smartpizza.service.CartService;
 
@Service
public class CartServiceImpl implements CartService {
 
    @Autowired
    private CartRepo cartRepo;
 
    @Autowired
    private UserRepo userRepo;
 
    @Autowired
    private PizzaRepo pizzaRepo;
 
    @Autowired
    private CartItemRepo cartItemRepo;
 
    @Override
    public Cart getCartByUser(Long userId) {
 
        return cartRepo.findByUserUserId(userId)
                .orElse(null);
    }
    private static final Logger logger =
	        LoggerFactory.getLogger(PizzaServiceImpl.class);
 
    @Override
    public Cart addToCart(CartItemDTO dto) {
    	logger.info("Adding pizza{} to cart of user {}",dto.getPizzaId(),dto.getUserId());
 
        User user = userRepo.findById(dto.getUserId())
                .orElseThrow(()-> new ResourceNotFoundException("User not found"));
        Pizza pizza = pizzaRepo.findById(dto.getPizzaId())
                .orElseThrow(()-> new ResourceNotFoundException("Pizza not found"));
 
        Cart cart = cartRepo.findByUserUserId(user.getUserId())
                .orElseGet(() -> {
 
                    Cart newCart = new Cart();
                    newCart.setUser(user);
                    newCart.setTotalAmount(0.0);
      logger.info("Cart updated successfully");
                    return cartRepo.save(newCart);
                });
 
        CartItem item = new CartItem();
 
        item.setCart(cart);
        item.setPizza(pizza);
        item.setQuantity(dto.getQuantity());
 
        double subtotal = pizza.getPrice() * dto.getQuantity();
 
        item.setSubTotal(subtotal);
 
        cartItemRepo.save(item);
 
        cart.setTotalAmount(
                cart.getTotalAmount() + subtotal);
 
        return cartRepo.save(cart);
    }
}