import React from 'react';
// import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        <div className="service-card">
          <h3>Emergency Care</h3>
          <p>24/7 emergency medical services</p>
        </div>
        <div className="service-card">
          <h3>Primary Care</h3>
          <p>Comprehensive health services</p>
        </div>
        {/* Add more service cards */}
      </div>
    </div>
  );
};

export default Services;