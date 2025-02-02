import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate('/appointments');
    window.scrollTo(0, 0);
  };

  return (
    <header className="hospital-header">
      <div className="header-container">
        <div className="logo-section">
          <h1>MediCare</h1>
          <p className="tagline">Caring for Life</p>
        </div>
        
        <nav className="nav-menu">
          <ul>
            <li><NavLink to="/" activeClassName="active-link">Home</NavLink></li>
            <li><NavLink to="/services" activeClassName="active-link">Services</NavLink></li>
            <li><NavLink to="/health-diagnosis" activeClassName="active-link">Health Diagnosis</NavLink></li>
            <li><NavLink to="/doctors" activeClassName="active-link">Doctors</NavLink></li>
            <li><NavLink to="/appointments" activeClassName="active-link" onClick={() => window.scrollTo(0, 0)}>Appointments</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
          </ul>
        </nav>

        <div className="contact-info">
          <div className="emergency-contact">
            <span className="emergency-label">Emergency:</span>
            <span className="emergency-number">911</span>
          </div>
          <button className="appointment-btn" onClick={handleBookAppointment}>Book Appointment</button>
        </div>
      </div>
    </header>
  );
};

export default Header;