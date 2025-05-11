package com.fsad.project.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Expense {

	@Id
	String category;
	String item;
	int cost;
	

	public String getItem() {
		return item;
	}

	public void setItem(String item) {
		this.item = item;
	}

	public int getCost() {
		return cost;
	}

	public void setCost(int cost) {
		this.cost = cost;
	}

	public String getCategory() {
		return category;
	}

	public void setType(String category) {
		this.category = category;
	}

	@Override
	public String toString() {
		return "Expense [item=" + item + ", cost=" + cost + ", category=" + category + "]";
	}

}

