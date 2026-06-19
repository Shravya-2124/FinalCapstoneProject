package com.smartpizza.serviceImpl;
 
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
import com.smartpizza.dto.CartItemDTO;
import com.smartpizza.entity.CartItem;
import com.smartpizza.repository.CartItemRepo;
import com.smartpizza.service.CartItemService;
 
@Service
public class CartItemServiceImpl implements CartItemService {
 
    @Autowired
    private CartItemRepo cartItemRepo;
    private static final Logger logger =
	        LoggerFactory.getLogger(PizzaServiceImpl.class);
    @Override
    public CartItem addCartItem(CartItemDTO cartItemDTO) {
        logger.info("Added to cart");
        CartItem cartItem = new CartItem();
 
        cartItem.setQuantity(cartItemDTO.getQuantity());
        cartItem.setSubTotal(cartItemDTO.getSubTotal());
 
        return cartItemRepo.save(cartItem);
    }
 
    @Override
    public CartItem getCartItemById(Long id) {
 
        return cartItemRepo.findById(id).orElse(null);
    }
 
    @Override
    public List<CartItem> getAllCartItems() {
 
        return cartItemRepo.findAll();
    }
 
    @Override
    public void deleteCartItem(Long id) {
 
        cartItemRepo.deleteById(id);
    }
}