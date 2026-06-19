package com.smartpizza.serviceImpl;
 
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartpizza.dto.PizzaDTO;
import com.smartpizza.entity.Pizza;
import com.smartpizza.exception.ResourceNotFoundException;
import com.smartpizza.repository.PizzaRepo;
import com.smartpizza.service.PizzaService;
 
@Service
public class PizzaServiceImpl implements PizzaService {
   
    @Autowired
    private PizzaRepo prepo;
    private static final Logger logger =
	        LoggerFactory.getLogger(PizzaServiceImpl.class);
 
    @Override
    public Pizza addPizza(PizzaDTO pizzaDTO) {
    	
    	logger.info("Adding pizza {}",pizzaDTO.getPizzaName());
 
        Pizza pizza = new Pizza();
 
        pizza.setPizzaName(pizzaDTO.getPizzaName());
        pizza.setDescription(pizzaDTO.getDescription());
        pizza.setPrice(pizzaDTO.getPrice());
        pizza.setCategory(pizzaDTO.getCategory());
        pizza.setAvailable(pizzaDTO.getAvailable());
        logger.info("Pizza added successfully");
        return prepo.save(pizza);
       
    }
 
    @Override
    public Pizza getPizzaById(Long id) {
        return prepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Pizza not found"));
    }
 
    @Override
    public List<Pizza> getAllPizzas() {
        return prepo.findAll();
    }
 
    @Override
    public Pizza updatePizza(Long id, PizzaDTO pizzaDTO) {
 
        Pizza pizza = prepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("User not found"));
 
        if (pizza != null) {
            pizza.setPizzaName(pizzaDTO.getPizzaName());
            pizza.setDescription(pizzaDTO.getDescription());
            pizza.setPrice(pizzaDTO.getPrice());
            pizza.setCategory(pizzaDTO.getCategory());
            pizza.setAvailable(pizzaDTO.getAvailable());
 
            return prepo.save(pizza);
        }
 
        return null;
    }
 
    @Override
    public void deletePizza(Long id) {
        prepo.deleteById(id);
    }
}