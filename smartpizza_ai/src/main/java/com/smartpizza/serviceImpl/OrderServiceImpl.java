package com.smartpizza.serviceImpl;
 
import java.time.LocalDateTime;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartpizza.dto.InvoiceDTO;
import com.smartpizza.entity.Cart;
import com.smartpizza.entity.Order;
import com.smartpizza.entity.User;
import com.smartpizza.enums.OrderStatus;
import com.smartpizza.enums.PaymentStatus;
import com.smartpizza.exception.ResourceNotFoundException;
import com.smartpizza.repository.CartRepo;
import com.smartpizza.repository.OrderRepo;
import com.smartpizza.repository.UserRepo;
import com.smartpizza.service.OrderService;
 
@Service
public class OrderServiceImpl implements OrderService {
 
    @Autowired
    private OrderRepo orderRepo;
 
    @Autowired
    private UserRepo userRepo;
 
    @Autowired
    private CartRepo cartRepo;
    private static final Logger logger =
	        LoggerFactory.getLogger(PizzaServiceImpl.class);
 
    @Override
    public Order placeOrder(Long userId) {
        User user = userRepo.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User not found"));
 
        Cart cart = cartRepo.findByUserUserId(userId)
                .orElseThrow(()-> new ResourceNotFoundException("Cart not found"));
 
        Order order = new Order();
 
        order.setUser(user);
        order.setCart(cart);
        order.setTotalAmount(cart.getTotalAmount());
        order.setOrderDate(LocalDateTime.now());
        order.setOrderStatus(OrderStatus.PLACED);
        order.setPaymentStatus(PaymentStatus.PENDING);
        logger.info("Order placed successfully");
        return orderRepo.save(order);
    }
 
    @Override
    public List<Order> getAllOrders() {
 
        return orderRepo.findAll();
    }
 
    @Override
    public Order getOrderById(Long orderId) {
 
        return orderRepo.findById(orderId)
                .orElse(null);
    }

    @Override
    public Order updateOrderStatus(Long orderId, OrderStatus status) {
     
        Order order = orderRepo.findById(orderId)
                .orElse(null);
     
        if (order == null) {
            return null;
        }
     
        order.setOrderStatus(status);
     
        return orderRepo.save(order);
    }

	@Override
	public List<Order> getOrdersByUser(Long userId) {
		// TODO Auto-generated method stub
		return orderRepo.findByUser_UserId(userId);
	}

	@Override
	public InvoiceDTO generateInvoice(Long orderId) {
	 
	    Order order = orderRepo.findById(orderId)
	            .orElseThrow(() -> new RuntimeException("Order not found"));
	 
	    InvoiceDTO dto = new InvoiceDTO();
	 
	    dto.setOrderId(order.getOrderId());
	    dto.setCustomerName(order.getUser().getName());
	    dto.setAmount(order.getTotalAmount());
	    dto.setPaymentStatus(order.getPaymentStatus().name());
	    dto.setOrderStatus(order.getOrderStatus().name());
	 
	    return dto;
	}
}