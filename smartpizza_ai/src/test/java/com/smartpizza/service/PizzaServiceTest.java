package com.smartpizza.service;
 
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
 
import java.util.*;
 
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
 
import com.smartpizza.entity.Pizza;
import com.smartpizza.exception.ResourceNotFoundException;
import com.smartpizza.repository.PizzaRepo;
import com.smartpizza.serviceImpl.PizzaServiceImpl;
 
@ExtendWith(MockitoExtension.class)
class PizzaServiceTest {
 
    @Mock
    private PizzaRepo pizzaRepo;
 
    @InjectMocks
    private PizzaServiceImpl pizzaService;
 
    private Pizza pizza;
 
    @BeforeEach
    void setup() {
 
        pizza = new Pizza();
        pizza.setPizzaId(1L);
        pizza.setPizzaName("Veg Pizza");
        pizza.setPrice(250.0);
    }
 
    @Test
    void testGetPizzaById() {
 
        when(pizzaRepo.findById(1L))
                .thenReturn(Optional.of(pizza));
 
        Pizza result = pizzaService.getPizzaById(1L);
 
        assertNotNull(result);
        assertEquals("Veg Pizza", result.getPizzaName());
    }
 
    @Test
    void testPizzaNotFound() {
 
        when(pizzaRepo.findById(1L))
                .thenReturn(Optional.empty());
 
        assertThrows(ResourceNotFoundException.class,
                () -> pizzaService.getPizzaById(1L));
    }
 
    @Test
    void testGetAllPizzas() {
 
        when(pizzaRepo.findAll())
                .thenReturn(List.of(pizza));
 
        assertEquals(1,
                pizzaService.getAllPizzas().size());
    }
}