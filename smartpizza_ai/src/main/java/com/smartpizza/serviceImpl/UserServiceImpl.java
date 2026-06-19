package com.smartpizza.serviceImpl;
 
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.smartpizza.dto.UserDTO;
import com.smartpizza.entity.User;
import com.smartpizza.exception.ResourceNotFoundException;
import com.smartpizza.repository.UserRepo;
import com.smartpizza.service.UserService;
 
@Service
public class UserServiceImpl implements UserService {
 
    @Autowired
    private UserRepo urepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    private static final Logger logger =
	        LoggerFactory.getLogger(PizzaServiceImpl.class);
    @Override
    public User registerUser(UserDTO userDTO) {
    	logger.info("user Registering {}",userDTO.getName());
        User u = new User();
 
        u.setName(userDTO.getName());
        u.setEmail(userDTO.getEmail());
        u.setPassword(userDTO.getPassword());
//      u.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        u.setPhone(userDTO.getPhone());
        u.setAddress(userDTO.getAddress());
        u.setRole(userDTO.getRole());
        logger.info("User registered successfully");
        return urepo.save(u);
    }
 
    @Override
    public User getUserById(Long id) {
        return urepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("User not found"));
    }
 
    @Override
    public List<User> getAllUsers() {
        return urepo.findAll();
    }
 
    @Override
    public void deleteUser(Long id) {
        urepo.deleteById(id);
    }
}