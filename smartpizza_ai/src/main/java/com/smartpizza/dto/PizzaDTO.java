package com.smartpizza.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public class PizzaDTO {
     @NotBlank(message="Pizza name is required")
    private String pizzaName;
     
     @NotBlank(message="Description is required")
    private String description;
     
    @NotNull(message="Price is required")
    @Positive(message="Price must be greater than 0")
    private Double price;
    
    @NotBlank(message="Category is required")
    private String category;
    
    private Boolean available;
 
    public PizzaDTO() {}
 
    public String getPizzaName() {
        return pizzaName;
    }
 
    public void setPizzaName(String pizzaName) {
        this.pizzaName = pizzaName;
    }
 
    public String getDescription() {
        return description;
    }
 
    public void setDescription(String description) {
        this.description = description;
    }
 
    public Double getPrice() {
        return price;
    }
 
    public void setPrice(Double price) {
        this.price = price;
    }
 
    public String getCategory() {
        return category;
    }
 
    public void setCategory(String category) {
        this.category = category;
    }
 
    public Boolean getAvailable() {
        return available;
    }
 
    public void setAvailable(Boolean available) {
        this.available = available;
    }
}