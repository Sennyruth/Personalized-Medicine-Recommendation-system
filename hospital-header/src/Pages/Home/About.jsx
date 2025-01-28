import React from 'react';
import Doc1Img from '../../assets/Doc1.jpg';
import Doc2Img from '../../assets/Doc2.jpg';
import { FaUserMd, FaHospital, FaAmbulance } from 'react-icons/fa';
import './Home.css';

const About = () => {
  const stats = [
    { icon: <FaUserMd />, count: '50+', label: 'Doctors' },
    { icon: <FaHospital />, count: '1000+', label: 'Patients Served' },
    { icon: <FaAmbulance />, count: '24/7', label: 'Emergency Service' },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Us</h2>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <h3>Providing Quality Healthcare Services</h3>
            <p>
              With over 20 years of experience, we are dedicated to providing the highest
              quality medical care to our community. Our team of experienced healthcare
              professionals works tirelessly to ensure the well-being of every patient.
            </p>
            <p>
              We combine state-of-the-art technology with compassionate care to deliver
              the best possible health outcomes for our patients.
            </p>
          </div>

          <div className="about-images">
            <img
              src={Doc1Img}
              alt="Hospital Facility"
              className="about-image"
            />
            <img
              src={Doc2Img}
              alt="Medical Team"
              className="about-image"
            />
          </div>
        </div>

        <div className="about-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.count}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;