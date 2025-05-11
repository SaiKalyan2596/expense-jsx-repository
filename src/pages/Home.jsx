import React from "react";
//import "./Home.css"
const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="overlay"></div>
      <div className="content">
        <div className="logo-section">
          <img src="/logo.png" alt="Expense Tracker Logo" className="logo" />
        </div>
        <div className="intro-section">
          <h1>Welcome to Expense Tracker</h1>
          <p>
            Manage your expenses efficiently with our intuitive and powerful
            expense tracking system. Stay on top of your spending, set budgets,
            and analyze your financial habits.
          </p>
          <p>Start tracking your expenses today and take control of your finances!</p>
        </div>
      </div>
      <footer className="footer">
        &copy; 2025 Expense Tracker
      </footer>
    </div>
  );
};

export default HomePage;
