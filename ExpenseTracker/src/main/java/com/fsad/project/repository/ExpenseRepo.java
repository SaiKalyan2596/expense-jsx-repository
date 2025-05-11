package com.fsad.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fsad.project.model.Expense;

public interface ExpenseRepo extends JpaRepository<Expense, String>{
	
}
