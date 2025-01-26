import React from 'react';
import { Link } from 'react-router-dom';
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/health-diagnosis">Health Diagnosis</Link></li>
            <li><Link to="/doctors">Doctors</Link></li>
            <li><Link to="/appointments">Appointments</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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