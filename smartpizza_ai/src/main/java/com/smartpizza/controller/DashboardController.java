package com.smartpizza.controller;
 
import com.smartpizza.dto.DashboardDTO;
import com.smartpizza.entity.Order;
import com.smartpizza.repository.OrderRepo;
import com.smartpizza.repository.PizzaRepo;
import com.smartpizza.repository.UserRepo;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
 
@RestController
@RequestMapping("/dashboard")
@CrossOrigin(origins = "*")
public class DashboardController {
 
    @Autowired
    private UserRepo userRepo;
 
    @Autowired
    private PizzaRepo pizzaRepo;
 
    @Autowired
    private OrderRepo orderRepo;
 
    @GetMapping
    public DashboardDTO getDashboard() {
 
        long totalUsers = userRepo.count();
 
        long totalPizzas = pizzaRepo.count();
 
        long totalOrders = orderRepo.count();
 
        double revenue = orderRepo.findAll()
                .stream()
                .mapToDouble(Order::getTotalAmount)
                .sum();
 
        return new DashboardDTO(
                totalUsers,
                totalPizzas,
                totalOrders,
                revenue
        );
    }
}