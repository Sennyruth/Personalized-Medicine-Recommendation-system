import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="hospital-header">
      <div className="header-container">
        <div className="logo-section">
          <h1>MediCare</h1>
          <p className="tagline">Caring for Life</p>
        </div>
        
        <nav className="nav-menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/doctors">Doctors</a></li>
            <li><a href="/appointments">Appointments</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <div className="contact-info">
          <div className="emergency-contact">
            <span className="emergency-label">Emergency:</span>
            <span className="emergency-number">911</span>
          </div>
          <button className="appointment-btn">Book Appointment</button>
        </div>
      </div>
    </header>
  );
};

export default Header;