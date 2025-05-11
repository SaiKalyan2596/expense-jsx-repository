import React, { useState } from "react";

const Statistics = () => {
  const [expenses, setExpenses] = useState([
    { category: "Food", amount: 300 },
    { category: "Rent", amount: 800 },
    { category: "Transport", amount: 100 },
    { category: "Entertainment", amount: 150 },
    { category: "Utilities", amount: 120 },
  ]);

  const [newCategory, setNewCategory] = useState("");
  const [newAmount, setNewAmount] = useState("");

  const totalExpense = expenses.reduce((total, item) => total + item.amount, 0);

  const addExpense = () => {
    if (!newCategory || isNaN(newAmount) || newAmount === "" || parseFloat(newAmount) <= 0) return;
    const amount = parseFloat(newAmount);

    setExpenses((prevExpenses) => {
      const existingIndex = prevExpenses.findIndex(
        (item) => item.category.toLowerCase() === newCategory.toLowerCase()
      );

      if (existingIndex !== -1) {
        const updatedExpenses = [...prevExpenses];
        updatedExpenses[existingIndex].amount += amount;
        return updatedExpenses;
      } else {
        return [...prevExpenses, { category: newCategory, amount }];
      }
    });

    setNewCategory("");
    setNewAmount("");
  };

  return (
    <div className="statistics-container">
      <br /><br /><br /><br /><br /><br /><br />

      <div className="expense-summary">
        <h3 className="summary-total">Total Expense: ${totalExpense.toFixed(2)}</h3>
        <ul className="expense-list">
          {expenses.map((item, index) => (
            <li key={index} className="expense-item">
              <span className="category">{item.category}</span>
              <span className="amount">${item.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="add-expense-section">
        <h4 className="section-title">Add New Expense</h4>
        <div className="input-group">
          <input
            type="text"
            placeholder="Category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="input-field"
            maxLength={30}
          />
          <input
            type="number"
            placeholder="Amount"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            className="input-field"
            min="0"
            step="0.01"
          />
          <button
            onClick={addExpense}
            className="add-button"
            disabled={!newCategory || !newAmount || parseFloat(newAmount) <= 0}
          >
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
};

export default Statistics;