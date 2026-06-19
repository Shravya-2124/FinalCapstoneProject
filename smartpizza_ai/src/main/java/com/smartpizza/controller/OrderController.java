package com.smartpizza.controller;
 
import java.util.List;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.itextpdf.text.Document;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;
import com.smartpizza.dto.InvoiceDTO;
import com.smartpizza.entity.Order;
import com.smartpizza.enums.OrderStatus;
import com.smartpizza.service.OrderService;

import jakarta.servlet.http.HttpServletResponse;
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/orders")
public class OrderController {
 
    @Autowired
    private OrderService orderService;
 
    @PostMapping("/{userId}")
    public Order placeOrder(@PathVariable Long userId) {
        return orderService.placeOrder(userId);
    }
 
    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }
 
    @GetMapping("/{id}")
    public Order getOrder(@PathVariable Long id) {
        return orderService.getOrderById(id);
    }
    
    @GetMapping("/user/{userId}")
    public List<Order> getOrdersByUser(@PathVariable Long userId){
    	return orderService.getOrdersByUser(userId);
    }
    @GetMapping("/invoice/{orderId}")
    public InvoiceDTO getInvoice(@PathVariable Long orderId) {
        return orderService.generateInvoice(orderId);
    }
    @GetMapping("/invoice/pdf/{orderId}")
    public void downloadInvoice(
            @PathVariable Long orderId,
            HttpServletResponse response) throws Exception {
     
        InvoiceDTO invoice = orderService.generateInvoice(orderId);
     
        response.setContentType("application/pdf");
        response.setHeader(
                "Content-Disposition",
                "attachment; filename=invoice.pdf");
     
        Document document = new Document();
     
        PdfWriter.getInstance(
                document,
                response.getOutputStream());
     
        document.open();
     
        document.add(new Paragraph("SMART PIZZA AI"));
        document.add(new Paragraph("------------------------"));
     
        document.add(new Paragraph("Order ID : " + invoice.getOrderId()));
        document.add(new Paragraph("Customer : " + invoice.getCustomerName()));
        document.add(new Paragraph("Amount : ₹" + invoice.getAmount()));
        document.add(new Paragraph("Payment : " + invoice.getPaymentStatus()));
        document.add(new Paragraph("Status : " + invoice.getOrderStatus()));
     
        document.close();
    }
    
    @PutMapping("/{orderId}/status")
    public Order updateOrderStatus(
            @PathVariable Long orderId,
            @RequestParam OrderStatus status) {
     
        return orderService.updateOrderStatus(orderId, status);
    }
}