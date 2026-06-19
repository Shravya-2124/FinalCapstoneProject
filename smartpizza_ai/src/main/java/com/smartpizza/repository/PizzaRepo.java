package com.smartpizza.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smartpizza.entity.Pizza;

public interface PizzaRepo extends JpaRepository<Pizza, Long>{
	
	

}
