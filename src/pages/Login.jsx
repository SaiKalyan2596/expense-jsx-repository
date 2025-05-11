import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './Sign.css';

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate(); // for redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!credentials.username || !credentials.password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:2004/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      });

      console.log("Response Status:", response.status);

      if (response.ok) {
        // ✅ Store login state in localStorage
        localStorage.setItem("isLoggedIn", "true");

        console.log("Login successful! Redirecting...");
        alert("Login successful!");
        navigate("/dashboard"); // Redirect after successful login
      } else {
        const errorText = await response.text();
        alert("Login failed: " + errorText);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-image-section">
        <div className="welcome-overlay">
          <h2>Welcome to ExpenseTV</h2>
          <p>Your Personal Financial Companion</p>
          <div className="welcome-features">
            <div className="feature"><span>📊</span><p>Track Expenses</p></div>
            <div className="feature"><span>💰</span><p>Manage Budget</p></div>
            <div className="feature"><span>📈</span><p>View Analytics</p></div>
          </div>
        </div>
      </div>

      <div className="auth-form-section">
        <h2 className="brand">🟪 ExpenseTV</h2>
        <h1>Welcome back</h1>
        <p>Please enter your details</p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />

          <div className="auth-options">
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="auth-btn">Sign in</button>
        </form>
        <p className="switch-link">
          Don't have an account? <NavLink to="/signup">Sign up</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
  