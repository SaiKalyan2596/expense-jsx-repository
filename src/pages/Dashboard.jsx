import React, { useState, useEffect } from 'react';
//import "./Dashboard.css"

const Dashboard = () => {
  const predefinedCategories = ['Food', 'Entertainment', 'Travel', 'Health', 'Groceries', 'Bills'];
  
  const [data, setData] = useState({
    Food: { cost: 5, items: [] },
    Travel: { cost: 3, items: [] },
    Entertainment: { cost: 3, items: [] },
  });
  
  const [selectedCategory, setSelectedCategory] = useState('Food');
  const [cost, setAmount] = useState(''); // Use an empty string to avoid defaulting to '0'
  const [item, setItem] = useState(''); // Store item name

  // Function to fetch data from the server
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:2004/allexpense');
      if (!response.ok) {
        throw new Error('Failed to fetch expenses');
      }
      const fetchedData = await response.json();

      // Filter out only the predefined categories and ensure any missing ones are initialized
      const filteredData = {};
      predefinedCategories.forEach((category) => {
        filteredData[category] = {
          cost: 0,
          items: [], // Empty array for items initially
        };
      });

      // Populate the data with the fetched expenses
      fetchedData.forEach((expense) => {
        if (filteredData[expense.category]) {
          filteredData[expense.category].cost += expense.cost;
          filteredData[expense.category].items.push(expense.item); // Add item to category
        }
      });

      setData(filteredData); // Update state with filtered categories
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to update expense data on the server
  const updateExpense = async (category, cost, item) => {
    if (cost <= 0 || !item.trim()) return; // Prevent update if cost is 0 or item is empty

    const updatedExpense = {
      category,
      cost: parseInt(cost),
      item,
    };

    try {
      const response = await fetch('http://localhost:2004/addexpense', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedExpense),
      });

      if (!response.ok) {
        throw new Error('Failed to update expense');
      }

      fetchData(); // Fetch the updated data from the server
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  // Function to handle adding the cost and item to the selected category
  const handleAddAmount = () => {
    if (!cost || isNaN(cost) || parseFloat(cost) <= 0 || !item.trim()) {
      alert('Please enter a valid cost and item name');
      return;
    }

    updateExpense(selectedCategory, cost, item);
    setAmount(''); // Clear the input field after the update
    setItem(''); // Clear the item field after the update
  };

    
  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        {/* Left side - Display Section */}
        <div className="display-section">
          {Object.entries(data).map(([category, details]) => (
            <div className="card green-card" key={category}>
              <h2>{category}</h2>
              <div className="icon">
                <img
                  src={
                    category === 'Food'
                      ? 'https://cdn-icons-png.flaticon.com/512/5787/5787100.png'
                      : category === 'Travel'
                      ? 'https://cdn-icons-png.flaticon.com/512/2907/2907122.png'
                      : category === 'Entertainment'
                      ? 'https://cdn-icons-png.flaticon.com/512/3142/3142036.png'
                      : category === 'Health'
                      ? 'https://cdn-icons-png.flaticon.com/512/149/149071.png' // Example Health icon
                      : category === 'Groceries'
                      ? 'https://cdn-icons-png.flaticon.com/512/2331/2331836.png' // Example Groceries icon
                      : 'https://cdn-icons-png.flaticon.com/512/2907/2907772.png' // Example Bills icon
                      
                  }
                  alt={`${category} Icon`}
                />
              </div>
              <p>Cost: ${details.cost}</p> {/* Display only the cost */}
              <p>Items:</p>
              <ul>
                {details.items.map((item, index) => (
                  <li key={index}>{item}</li> // List all items in the category
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right side - Edit Section */}
        <div className="edit-section blue-background">
          <h2>Edit Spending</h2>
          <label>Select Category:</label>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {Object.keys(data).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <label>Enter Amount:</label>
          <input
            type="number"
            value={cost}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter cost"
          />
          <label>Enter Item:</label>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Enter item name"
          />
          <button onClick={handleAddAmount}>Add Amount</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
