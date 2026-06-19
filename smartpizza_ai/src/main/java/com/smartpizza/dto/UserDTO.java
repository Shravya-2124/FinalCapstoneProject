package com.smartpizza.dto;

import com.smartpizza.enums.Role;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UserDTO {
	
	@NotBlank(message="Name is required")
	private String name;
	
	@Email(message="Invalid email format")
	@NotBlank(message="Email is required")
	private String email;
	
	@NotBlank(message="Password is required")
	@Size(min=5,message="Password must be atleast 5 characters")
	private String password;
	
	@NotBlank(message="Phone is required")
    private String phone;
	
	@NotBlank(message="Address is required")
    private String address;
	
    private Role role;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
    
    
    


}
