package com.fsad.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fsad.project.model.Trip;

public interface TripRepo extends JpaRepository<Trip, Integer>{
	
}
