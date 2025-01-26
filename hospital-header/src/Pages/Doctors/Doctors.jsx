import React from 'react';
// import './Doctors.css';

const Doctors = () => {
  return (
    <div className="doctors-container">
      <h1>Our Medical Team</h1>
      <div className="doctors-grid">
        <div className="doctor-card">
          <div className="doctor-image"></div>
          <h3>Dr. John Doe</h3>
          <p>Cardiologist</p>
        </div>
        {/* Add more doctor cards */}
      </div>
    </div>
  );
};

export default Doctors;