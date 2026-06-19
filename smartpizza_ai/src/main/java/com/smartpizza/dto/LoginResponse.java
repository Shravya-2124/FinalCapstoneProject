package com.smartpizza.dto;
 
public class LoginResponse {
 
    private String token;
    private Long userId;
    private String Role;
    
	public LoginResponse() {
    }
 
    public LoginResponse(String token, Long userId, String role) {
		super();
		this.token = token;
		this.userId = userId;
		Role = role;
	}

	public String getRole() {
		return Role;
	}

	public void setRole(String role) {
		Role = role;
	}
    public String getToken() {
        return token;
    }
 
    public void setToken(String token) {
        this.token = token;
    }
 
    public Long getUserId() {
        return userId;
    }
 
    public void setUserId(Long userId) {
        this.userId = userId;
    }
}