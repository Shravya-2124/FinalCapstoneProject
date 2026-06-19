package com.smartpizza.controller;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
 
import com.smartpizza.entity.Order;
import com.smartpizza.enums.PaymentStatus;
import com.smartpizza.repository.OrderRepo;
 
@RestController
@RequestMapping("/payments")
@CrossOrigin("*")
public class PaymentController {
 
    @Autowired
    private OrderRepo orderRepo;
 
    @PutMapping("/{orderId}")
    public Order makePayment(@PathVariable Long orderId) {
 
        Order order = orderRepo.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order Not Found"));
 
        order.setPaymentStatus(PaymentStatus.SUCCESS);
 
        return orderRepo.save(order);
    }
}