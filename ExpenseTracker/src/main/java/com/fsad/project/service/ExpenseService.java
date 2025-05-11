package com.fsad.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.fsad.project.model.Expense;
import com.fsad.project.repository.ExpenseRepo;

@org.springframework.stereotype.Service
public class ExpenseService {
	
	@Autowired
	ExpenseRepo repo1;
	
	public String insertData(Expense expense) {
		repo1.save(expense);
		
		return "Inserted Successfully";
	}
	
	public String updateData(Expense expense) {
		if(repo1.findById(expense.getCategory()) != null)
			repo1.delete(expense);
		repo1.save(expense);
		
		return "Updated Successfully";
	}
	
	public String deleteData(String category) {
		repo1.delete(repo1.findById(category).get());
		return "Deleted Successfully";
	}
	
	public List<Expense> retrieveData(){
		return repo1.findAll();
	}
}
