package com.roadalert.roadalert.entities;

public class LoginResponse {
    private String role;
private long id;
	public LoginResponse(String role, long id) {
	super();
	this.role = role;
	this.id = id;
}
	public LoginResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
}
