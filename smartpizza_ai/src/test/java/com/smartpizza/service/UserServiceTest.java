package com.smartpizza.service;
 
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
 
import java.util.Optional;
 
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
 
import com.smartpizza.entity.User;
import com.smartpizza.repository.UserRepo;
import com.smartpizza.serviceImpl.UserServiceImpl;
 
public class UserServiceTest {
 
    @Mock
    private UserRepo userRepo;
 
    @InjectMocks
    private UserServiceImpl userService;
 
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
 
    @Test
    void testGetUserById() {
 
        User user = new User();
        user.setUserId(1L);
        user.setName("Adarsh");
 
        when(userRepo.findById(1L))
                .thenReturn(Optional.of(user));
 
        User result = userService.getUserById(1L);
 
        assertEquals("Adarsh", result.getName());
    }
 
    @Test
    void testRegisterUser() {
 
        User user = new User();
        user.setName("John");
 
        when(userRepo.save(user))
                .thenReturn(user);
 
        User savedUser = userRepo.save(user);
 
        assertEquals("John", savedUser.getName());
    }
}