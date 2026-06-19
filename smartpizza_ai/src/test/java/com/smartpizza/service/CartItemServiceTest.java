package com.smartpizza.service;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
 
import java.util.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import com.smartpizza.repository.CartItemRepo;

import com.smartpizza.serviceImpl.CartItemServiceImpl;


@ExtendWith(MockitoExtension.class)
class CartItemServiceTest {
 
    @Mock
    private CartItemRepo cartItemRepo;
 
    @InjectMocks
    private CartItemServiceImpl cartItemService;
 
    @Test
    void testGetAllCartItems() {
 
        when(cartItemRepo.findAll())
                .thenReturn(new ArrayList<>());
 
        assertNotNull(cartItemService.getAllCartItems());
    }
 
    @Test
    void testDeleteCartItem() {
 
        doNothing().when(cartItemRepo)
                .deleteById(1L);
 
        cartItemService.deleteCartItem(1L);
 
        verify(cartItemRepo).deleteById(1L);
    }
}