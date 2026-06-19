package com.smartpizza.repository;
 
import java.util.Optional;
 
import org.springframework.data.jpa.repository.JpaRepository;
 
import com.smartpizza.entity.Cart;
 
public interface CartRepo extends JpaRepository<Cart, Long> {
 
    Optional<Cart> findByUserUserId(Long userId);
 
}