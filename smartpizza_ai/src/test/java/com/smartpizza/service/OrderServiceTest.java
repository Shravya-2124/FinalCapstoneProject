package com.smartpizza.service;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
 
import java.util.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import com.smartpizza.entity.Order;
import com.smartpizza.repository.CartRepo;
import com.smartpizza.repository.OrderRepo;
import com.smartpizza.repository.UserRepo;
import com.smartpizza.serviceImpl.OrderServiceImpl;

@ExtendWith(MockitoExtension.class)
class OrderServiceTest {
 
    @Mock
    private OrderRepo orderRepo;
 
    @Mock
    private UserRepo userRepo;
 
    @Mock
    private CartRepo cartRepo;
 
    @InjectMocks
    private OrderServiceImpl orderService;
 
    @Test
    void testGetAllOrders() {
 
        when(orderRepo.findAll())
                .thenReturn(new ArrayList<>());
 
        assertNotNull(orderService.getAllOrders());
    }
 
    @Test
    void testGetOrderById() {
 
        Order order = new Order();
 
        when(orderRepo.findById(1L))
                .thenReturn(Optional.of(order));
 
        assertNotNull(orderService.getOrderById(1L));
    }
}