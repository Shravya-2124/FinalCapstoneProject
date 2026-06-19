package com.smartpizza.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smartpizza.entity.Order;

public interface OrderRepo extends JpaRepository<Order, Long>{
	List<Order> findByUser_UserId(Long userId);

}
