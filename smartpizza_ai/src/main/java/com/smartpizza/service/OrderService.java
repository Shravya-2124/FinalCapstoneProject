package com.smartpizza.service;

import java.util.List;

import com.smartpizza.dto.InvoiceDTO;
import com.smartpizza.entity.Order;
import com.smartpizza.enums.OrderStatus;

public interface OrderService {
	
	Order placeOrder(Long userId);
	
	List<Order> getAllOrders();
	
	Order getOrderById(Long orderId);
	
	Order updateOrderStatus(Long orderId,OrderStatus status);
	
	List<Order> getOrdersByUser(Long userId);
	
	InvoiceDTO generateInvoice(Long orderId);

}
