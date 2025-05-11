package com.fsad.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsad.project.model.Expense;
import com.fsad.project.service.ExpenseService;

@RestController
public class ExpenseController {

	@Autowired
	ExpenseService s;

	@PostMapping("/addexpense")
	public String insertExpense(@RequestBody Expense expense) {
		return s.insertData(expense);
	}
	
	// http://localhost:8081/product
	@PutMapping("/updateexpense")
	public String updateExpense(@RequestBody Expense expense) {
		return s.updateData(expense);
	}

	// http://localhost:8081/product/2
	@DeleteMapping("/expense/{category}")
	public String updateProduct(@PathVariable("category") String category) {
		return s.deleteData(category);
	}

	// http://localhost:8081/product
	@GetMapping("/allexpense")
	public List<Expense> retrieveProduct() {
		return s.retrieveData();
	}

}
