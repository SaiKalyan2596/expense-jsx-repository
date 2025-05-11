import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Navbar from './components/Navbar';
import './index.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Statistics from './pages/Statistics';
import Trips from './pages/Trips';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Signup from './pages/signup';  // Capitalized for convention

const App = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; // Or from context

  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
