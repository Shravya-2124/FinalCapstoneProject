package com.smartpizza.controller;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
 
import com.smartpizza.config.JwtUtil;
import com.smartpizza.dto.LoginRequest;
import com.smartpizza.dto.LoginResponse;
import com.smartpizza.entity.User;
import com.smartpizza.repository.UserRepo;

import jakarta.validation.Valid;
 
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/auth")
public class AuthController {
 
    @Autowired
    private UserRepo userRepo;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
 
    @Autowired
    private JwtUtil jwtUtil;
    @PostMapping("/login")
    public LoginResponse login(@Valid @RequestBody LoginRequest request) {
     
        User user =
                userRepo.findByEmail(request.getEmail())
                        .orElse(null);
     
        if (user == null) {
            throw new RuntimeException("User Not Found");
        }
     
        if (!user.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Invalid Password");
        }
     
        String token = jwtUtil.generateToken(user.getEmail());
     
        return new LoginResponse(
                token,
                user.getUserId(),
                user.getRole().name()
        );
    }
}
     
 
//    @PostMapping("/login")
//    public String login(@Valid @RequestBody LoginRequest request) {
// 
//        User user =
//                userRepo.findByEmail(request.getEmail())
//                        .orElse(null);
// 
//        if (user == null) {
//            return "User Not Found";
//        }
// 
//        if (!user.getPassword()
//                .equals(request.getPassword())) {
//            return "Invalid Password";
//        }
////         if(!passwordEncoder.matches(request.getPassword(),user.getPassword())) {
////        	 return "Invalid Password";
////         }
//        return jwtUtil.generateToken(
//                user.getEmail());
//    }
//}