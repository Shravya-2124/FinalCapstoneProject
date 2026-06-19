package com.smartpizza.controller;
 
import java.util.List;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
 
import com.smartpizza.dto.UserDTO;
import com.smartpizza.entity.User;
import com.smartpizza.service.UserService;

import jakarta.validation.Valid;
 
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/users")
public class UserController {
 
    @Autowired
    private UserService userService;
 
    @PostMapping
    public User registerUser(@Valid @RequestBody UserDTO userDTO) {
        return userService.registerUser(userDTO);
    }
 
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUserById(id);
    }
 
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
 
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}