package com.smartpizza.controller;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.smartpizza.dto.CartItemDTO;
import com.smartpizza.entity.Cart;
import com.smartpizza.service.CartService;

import jakarta.validation.Valid;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/cart")
public class CartController {
	
    @Autowired
    private CartService cartService;
 
    @GetMapping("/{userId}")
    public Cart getCart(@PathVariable Long userId) {
        return cartService.getCartByUser(userId);
    }
 
    @PostMapping("/add")
    public Cart addToCart(@Valid @RequestBody CartItemDTO cartItemDTO) {
        return cartService.addToCart(cartItemDTO);
    }
}
