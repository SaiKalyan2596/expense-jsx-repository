import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate added
import './Sign.css';

function Signup() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    name: "",
    mailId: ""
  });

  const navigate = useNavigate(); // initialize navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.username || !user.password || !user.name || !user.mailId) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:2004/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        alert("User registered successfully!");
        setUser({
          username: "",
          password: "",
          name: "",
          mailId: ""
        });
        navigate("/login"); // redirect to login after success
      } else {
        const errorData = await response.text();
        alert("Error: " + errorData);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to register user.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-image-section">
        <div className="welcome-overlay">
          <h2>Join ExpenseTV</h2>
          <p>Take control of your finances today</p>
          <div className="welcome-features">
            <div className="feature">
              <span>📝</span>
              <p>Create Account</p>
            </div>
            <div className="feature">
              <span>🔐</span>
              <p>Secure Access</p>
            </div>
            <div className="feature">
              <span>📊</span>
              <p>Smarter Spending</p>
            </div>
          </div>
        </div>
      </div>

      <div className="auth-form-section">
        <h2 className="brand">🟪 ExpenseTV</h2>
        <h1>Get Started</h1>
        <p>Fill in the information below</p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />

          <label>Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Choose a username"
            required
          />

          <label>Email address</label>
          <input
            type="email"
            name="mailId"
            value={user.mailId}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Create a password"
            required
          />

          <button type="submit" className="auth-btn">Sign up</button>
        </form>

        <p className="switch-link">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
