package com.smartpizza.config;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
 
import com.smartpizza.entity.User;
import com.smartpizza.repository.UserRepo;
 
@Service
public class CustomerUserDetailsService implements UserDetailsService {
 
    @Autowired
    private UserRepo userRepo;
 
    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {
 
        User user = userRepo.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User Not Found"));
 
        return org.springframework.security.core.userdetails.User
                .builder()
                .username(user.getEmail())
                .password(user.getPassword())
                .roles(user.getRole().name())
                .build();
    }
}