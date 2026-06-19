package com.smartpizza.service;

import java.util.List;

import com.smartpizza.dto.UserDTO;
import com.smartpizza.entity.User;

public interface UserService {
	
	User registerUser(UserDTO userDTO);
	User getUserById(Long id);
	List<User> getAllUsers();
	void deleteUser(Long id);

}
