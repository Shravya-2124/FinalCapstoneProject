package com.smartpizza.service;
 
import java.util.List;
 
import com.smartpizza.dto.CartItemDTO;
import com.smartpizza.entity.CartItem;
 
public interface CartItemService {
 
    CartItem addCartItem(CartItemDTO cartItemDTO);
 
    CartItem getCartItemById(Long id);
 
    List<CartItem> getAllCartItems();
 
    void deleteCartItem(Long id);
}