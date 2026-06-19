package com.smartpizza.service;

import com.smartpizza.dto.CartItemDTO;
import com.smartpizza.entity.Cart;

public interface CartService {
	Cart getCartByUser(Long userId);
	
	Cart addToCart(CartItemDTO cartItemDTO);

}
