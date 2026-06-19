package com.smartpizza.service;

import java.util.List;

import com.smartpizza.dto.PizzaDTO;
import com.smartpizza.entity.Pizza;

public interface PizzaService {
	
	Pizza addPizza(PizzaDTO pizzadto);
	Pizza getPizzaById(Long id);
	List<Pizza> getAllPizzas();
	Pizza updatePizza(Long id,PizzaDTO pizzaDTO);
	void deletePizza(Long id);

}
