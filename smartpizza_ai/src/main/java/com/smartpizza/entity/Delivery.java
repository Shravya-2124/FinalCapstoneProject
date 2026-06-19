package com.smartpizza.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;


@Entity
@Table(name = "delivery")
@Data
public class Delivery {
    
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long deliveryId;
	
	@OneToOne
	@JoinColumn(name="order_id")
	private Order order;
	
	private String deliveryAgent;
	
	private String currentLocation;
	
	private Integer estimatedTime;
	
	private String deliveryStatus;
}
