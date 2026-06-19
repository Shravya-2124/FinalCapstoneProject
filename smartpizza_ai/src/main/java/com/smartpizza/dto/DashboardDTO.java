package com.smartpizza.dto;
 
public class DashboardDTO {
 
    private long totalUsers;
    private long totalPizzas;
    private long totalOrders;
    private double totalRevenue;
 
    public DashboardDTO() {
    }
 
    public DashboardDTO(long totalUsers,
                        long totalPizzas,
                        long totalOrders,
                        double totalRevenue) {
        this.totalUsers = totalUsers;
        this.totalPizzas = totalPizzas;
        this.totalOrders = totalOrders;
        this.totalRevenue = totalRevenue;
    }
 
    public long getTotalUsers() {
        return totalUsers;
    }
 
    public void setTotalUsers(long totalUsers) {
        this.totalUsers = totalUsers;
    }
 
    public long getTotalPizzas() {
        return totalPizzas;
    }
 
    public void setTotalPizzas(long totalPizzas) {
        this.totalPizzas = totalPizzas;
    }
 
    public long getTotalOrders() {
        return totalOrders;
    }
 
    public void setTotalOrders(long totalOrders) {
        this.totalOrders = totalOrders;
    }
 
    public double getTotalRevenue() {
        return totalRevenue;
    }
 
    public void setTotalRevenue(double totalRevenue) {
        this.totalRevenue = totalRevenue;
    }
}