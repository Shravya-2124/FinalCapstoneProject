package com.smartpizza.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smartpizza.entity.CartItem;

public interface CartItemRepo extends JpaRepository<CartItem, Long>{

}
