package com.fsad.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fsad.project.model.User;

public interface UserRepo extends JpaRepository<User, String>{
	
}
