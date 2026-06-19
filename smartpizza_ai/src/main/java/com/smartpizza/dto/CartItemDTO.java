package com.smartpizza.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public class CartItemDTO {
    @NotNull(message="UserId is required")
    private Long userId;
    
    @NotNull(message="PizzaId is required")
    private Long pizzaId;
    
    @NotNull(message="Quantity is required")
    @Min(value=1,message="Quantity must be atleast 1")
    private Integer quantity;
    
    private double subTotal;
 
    public double getSubTotal() {
		return subTotal;
	}

	public void setSubTotal(double subTotal) {
		this.subTotal = subTotal;
	}

	public CartItemDTO() {
    }
 
    public Long getUserId() {
        return userId;
    }
 
    public void setUserId(Long userId) {
        this.userId = userId;
    }
 
    public Long getPizzaId() {
        return pizzaId;
    }
 
    public void setPizzaId(Long pizzaId) {
        this.pizzaId = pizzaId;
    }
 
    public Integer getQuantity() {
        return quantity;
    }
 
    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}