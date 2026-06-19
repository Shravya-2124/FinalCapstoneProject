package com.smartpizza.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smartpizza.entity.User;

public interface UserRepo extends JpaRepository<User,Long>{
	
	Optional<User> findByEmail(String email);

}
