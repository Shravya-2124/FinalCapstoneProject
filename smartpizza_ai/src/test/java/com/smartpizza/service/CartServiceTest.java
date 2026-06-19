package com.smartpizza.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
 
import java.util.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.smartpizza.entity.Cart;
import com.smartpizza.repository.CartItemRepo;
import com.smartpizza.repository.CartRepo;
import com.smartpizza.repository.PizzaRepo;
import com.smartpizza.repository.UserRepo;
import com.smartpizza.serviceImpl.CartServiceImpl;

@ExtendWith(MockitoExtension.class)
class CartServiceTest {
 
    @Mock
    private CartRepo cartRepo;
 
    @Mock
    private UserRepo userRepo;
 
    @Mock
    private PizzaRepo pizzaRepo;
 
    @Mock
    private CartItemRepo cartItemRepo;
 
    @InjectMocks
    private CartServiceImpl cartService;
 
    @Test
    void testGetCartByUser() {
 
        Cart cart = new Cart();
 
        when(cartRepo.findByUserUserId(1L))
                .thenReturn(Optional.of(cart));
 
        assertNotNull(cartService.getCartByUser(1L));
    }
}
 