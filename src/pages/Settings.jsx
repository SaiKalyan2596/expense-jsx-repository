import React, { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD");
  const [expenses, setExpenses] = useState([]);

  // Language options
  const languages = ["English", "Spanish", "French", "German", "Hindi"];
  
  // Currency options
  const currencies = ["USD", "EUR", "INR", "GBP", "JPY"];

  // Export data (simulate saving expenses)
  const handleExport = () => {
    const dataStr = JSON.stringify(expenses, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "expenses_backup.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Import data
  const handleImport = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result);
        setExpenses(importedData);
        alert("Data imported successfully!");
      } catch (error) {
        alert("Invalid file format!");
      }
    };
    reader.readAsText(file);
  };

  // Logout function
  const handleLogout = () => {
    alert("You have been logged out!"); // Replace with actual logout logic
  };

  return (
    <div className={`settings-container ${darkMode ? "dark-mode" : ""}`}>
      <h1 className="settings-title">Settings</h1>

      {/* Language Selection */}
      <div className="settings-section">
        <h2>Language Selection</h2>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          {languages.map((lang) => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>

      {/* Currency Selection */}
      <div className="settings-section">
        <h2>Currency Selection</h2>
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {currencies.map((curr) => (
            <option key={curr} value={curr}>{curr}</option>
          ))}
        </select>
      </div>

      {/* Data Backup & Restore */}
      <div className="settings-section">
        <h2>Data Backup & Restore</h2>
        <button className="backup-button" onClick={handleExport}>Export Data</button>
        <input type="file" onChange={handleImport} className="import-input" />
      </div>

      {/* Dark Mode Toggle */}
      <div className="settings-section">
        <h2>Dark Mode</h2>
        <label>
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          Enable Dark Mode
        </label>
      </div>

      {/* Notifications Toggle */}
      <div className="settings-section">
        <h2>Notifications</h2>
        <label>
          <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} />
          Enable Notifications
        </label>
      </div>

      {/* Logout Button */}
      <div className="settings-section logout-section">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Settings;