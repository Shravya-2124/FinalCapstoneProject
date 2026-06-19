package com.smartpizza.controller;
 
import java.util.List;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
 
import com.smartpizza.dto.PizzaDTO;
import com.smartpizza.entity.Pizza;
import com.smartpizza.service.PizzaService;

import jakarta.validation.Valid;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/pizzas")
public class PizzaController {
 
    @Autowired
    private PizzaService pizzaService;
 
    @PostMapping
    public Pizza addPizza(@Valid @RequestBody PizzaDTO pizzaDTO) {
        return pizzaService.addPizza(pizzaDTO);
    }
 
    @GetMapping("/{id}")
    public Pizza getPizza(@PathVariable Long id) {
        return pizzaService.getPizzaById(id);
    }
 
    @GetMapping
    public List<Pizza> getAllPizzas() {
        return pizzaService.getAllPizzas();
    }
 
    @PutMapping("/{id}")
    public Pizza updatePizza(@PathVariable Long id,
                            @Valid @RequestBody PizzaDTO pizzaDTO) {
        return pizzaService.updatePizza(id, pizzaDTO);
    }
 
    @DeleteMapping("/{id}")
    public void deletePizza(@PathVariable Long id) {
        pizzaService.deletePizza(id);
    }
}