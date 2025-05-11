package com.fsad.project.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class User {
	@Id
	String username;
	String password;
	String name;
	String mailId;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMailId() {
		return mailId;
	}
	public void setMailId(String mailId) {
		this.mailId = mailId;
	}
	@Override
	public String toString() {
		return "User [username=" + username + ", password=" + password + ", name=" + name + ", mailId=" + mailId
				+ ", getUsername()=" + getUsername() + ", getPassword()=" + getPassword() + ", getName()=" + getName()
				+ ", getMailId()=" + getMailId() + "]";
	}
	
}
