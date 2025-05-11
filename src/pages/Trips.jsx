import React, { useState, useEffect } from "react";
//import "./Trips.css"

export default function Trips() {
  const [entries, setEntries] = useState([]);
  const [sno, setSno] = useState("");
  const [name, setName] = useState("");
  const [cost, setcost] = useState("");
  const [place, setPlace] = useState("");

  // Fetch trip data when the component is mounted
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await fetch("http://localhost:2004/tripdata");
        if (response.ok) {
          const data = await response.json();
          setEntries(data); // Update the entries state with fetched data
        } else {
          console.error("Failed to fetch data.");
        }
      } catch (error) {
        console.error("Error fetching trip data:", error);
      }
    };

    fetchEntries();
  }, []); // Empty dependency array means this runs once when the component mounts

  const handleAdd = async () => {
    if (
      sno.trim() &&
      name.trim() &&
      cost.trim() &&
      place.trim() &&
      !isNaN(cost) &&
      parseFloat(cost) > 0
    ) {
      const newEntry = {
        sno: parseInt(sno),
        name,
        cost: parseFloat(cost),
        place,
      };

      try {
        const response = await fetch("http://localhost:2004/trip", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newEntry),
        });

        if (response.ok) {
          setEntries([...entries, newEntry]);
          setSno("");
          setName("");
          setcost("");
          setPlace("");
        } else {
          alert("Failed to add expense. Please try again.");
        }
      } catch (error) {
        console.error("Error while sending data:", error);
        alert("An error occurred. Please try again.");
      }
    } else {
      alert("Please enter valid details.");
    }
  };

  const totalExpense = entries.reduce((sum, entry) => sum + (entry.cost || 0), 0);

  const numPeople = Object.keys(
    entries.reduce((acc, entry) => {
      acc[entry.name] = true;
      return acc;
    }, {})
  ).length;

  const perPersonShare = numPeople > 0 ? totalExpense / numPeople : 0;

  const groupedEntries = entries.reduce((acc, entry) => {
    if (!acc[entry.name]) {
      acc[entry.name] = 0;
    }
    acc[entry.name] += entry.cost || 0;
    return acc;
  }, {});

  return (
    <div className="app-container">
      <br /><br /><br /><br /><br />
      <div className="grid-container">
        <div className="expense-input-section">
          <h2 className="section-title">Add Expense</h2>
          <div className="expense-form">
            <input
              type="text"
              value={sno}
              onChange={(e) => setSno(e.target.value)}
              className="input-field"
              placeholder="Enter S.No"
            />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              placeholder="Enter name"
            />
            <input
              type="text"
              value={cost}
              onChange={(e) => setcost(e.target.value)}
              className="input-field"
              placeholder="Enter cost spent"
            />
            <input
              type="text"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              className="input-field"
              placeholder="Enter place"
            />
            <button onClick={handleAdd} className="add-button">
              Add Expense
            </button>
          </div>

          <ul className="expense-list">
            {entries.map((entry, index) => (
              <li key={index} className="expense-item">
                <span className="expense-sno">{entry.sno}</span>
                <span className="expense-name">{entry.name}</span>
                <span className="expense-cost">
                  ${entry.cost ? entry.cost.toFixed(2) : "N/A"}
                </span>
                <span className="expense-place">{entry.place}</span>
              </li>
            ))}
          </ul>

          <h3 className="total-expense">Total: ${totalExpense.toFixed(2)}</h3>
        </div>

        <div className="expense-summary-section">
          <h2 className="section-title">Split Summary</h2>
          <h3 className="total-expense">Total Expense: ${totalExpense.toFixed(2)}</h3>
          {numPeople > 1 ? (
            <h3 className="per-person-cost">
              Each Person Owes: ${perPersonShare.toFixed(2)}
            </h3>
          ) : (
            <h3 className="per-person-cost">
              Total for {entries[0]?.name}: ${totalExpense.toFixed(2)}
            </h3>
          )}
        </div>

        <div className="balance-summary-section">
          <h2 className="section-title">Balance Summary</h2>
          <ul className="balance-list">
            {Object.entries(groupedEntries).map(([name, totalcost], index) => {
              const balance = totalcost - perPersonShare;
              const balanceClass = balance > 0 ? "positive" : balance < 0 ? "negative" : "even";
              return (
                <li key={index} className={`balance-item ${balanceClass}`}>
                  <span>{name}</span>
                  <span>
                    {balance > 0
                      ? `Gets Back $${Math.abs(balance).toFixed(2)}`
                      : balance < 0
                      ? `Owes $${Math.abs(balance).toFixed(2)}`
                      : "Even"}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <footer className="footer">&copy; 2025 Expense Tracker</footer>
    </div>
  );
}
