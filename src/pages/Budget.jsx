import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Budget.css'
// Register necessary chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Budget = () => {
  const [budgets, setBudgets] = useState([]);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  // Handle form submission
  const handleAddBudget = (e) => {
    e.preventDefault();

    if (category && amount) {
      const newBudget = {
        category,
        amount: parseFloat(amount),
      };
      setBudgets([...budgets, newBudget]);
      setCategory('');
      setAmount('');
    } else {
      alert('Please enter both category and amount.');
    }
  };

  // Prepare data for the chart
  const chartData = {
    labels: budgets.map((budget) => budget.category),
    datasets: [
      {
        label: 'Budget Amount',
        data: budgets.map((budget) => budget.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="budget-container">
      <h2>Set Your Budget</h2>

      {/* Budget Form */}
      <form onSubmit={handleAddBudget}>
        <div>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category"
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>
        <button type="submit">Add Budget</button>
      </form>

      {/* Bar Chart */}
      <div className="chart-section">
        {budgets.length > 0 ? (
          <Bar data={chartData} options={{ responsive: true, plugins: { title: { display: true, text: 'Budget Distribution' } } }} />
        ) : (
          <p>No budgets added yet. Start by adding one!</p>
        )}
      </div>
    </div>
  );
};

export default Budget;
