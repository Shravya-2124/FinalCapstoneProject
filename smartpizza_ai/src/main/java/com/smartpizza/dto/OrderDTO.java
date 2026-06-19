package com.smartpizza.dto;
 
public class OrderDTO {
 
    private Long userId;
    private Double totalAmount;
 
    public OrderDTO() {}
 
    public Long getUserId() {
        return userId;
    }
 
    public void setUserId(Long userId) {
        this.userId = userId;
    }
 
    public Double getTotalAmount() {
        return totalAmount;
    }
 
    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }
}