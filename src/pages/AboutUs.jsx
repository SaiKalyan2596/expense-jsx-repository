import React from 'react'

const AboutUs = () => {
  return (
    
    <div className="about-container">
      <br /><br /><br /><br /><br />
      <div className="about-header">
        <h1>About ExpenseTV</h1>
        <p className="tagline">Your Personal Financial Companion</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>What is ExpenseTV?</h2>
          <p>ExpenseTV is a powerful expense tracking application designed to help you manage your finances effectively. Our platform provides a user-friendly interface to track, analyze, and manage your expenses in real-time.</p>
        </section>

        <section className="features-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>📊 Expense Tracking</h3>
              <p>Easily record and categorize your daily expenses with our intuitive interface.</p>
            </div>
            <div className="feature-card">
              <h3>💰 Balance Summary</h3>
              <p>Get a clear overview of your financial status with detailed balance summaries.</p>
            </div>
            <div className="feature-card">
              <h3>📱 User-Friendly Interface</h3>
              <p>Enjoy a clean, modern design that makes expense management simple and efficient.</p>
            </div>
            <div className="feature-card">
              <h3>🔒 Secure & x Private</h3>
              <p>Your financial data is protected with industry-standard security measures.</p>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Create an Account</h3>
              <p>Sign up for free and set up your personal expense tracking profile.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Add Your Expenses</h3>
              <p>Start recording your expenses with our simple input form.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Track & Analyze</h3>
              <p>Monitor your spending patterns and get insights into your financial habits.</p>
            </div>
          </div>
        </section>

        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>At ExpenseTV, we believe that everyone deserves to have control over their financial future. Our mission is to provide a simple yet powerful tool that helps users make informed financial decisions and achieve their financial goals.</p>
        </section>
      </div>
    </div>
  )
}

export default AboutUs