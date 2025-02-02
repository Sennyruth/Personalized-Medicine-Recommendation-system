import React, { useState } from 'react';
import { FaStethoscope, FaClipboardList, FaUserMd, FaHospital } from 'react-icons/fa';
import './Diagnosis.css';

const Diagnosis = () => {
  const [formData, setFormData] = useState({
    symptoms: '',
    duration: '',
    severity: 'mild',
    previousConditions: '',
    medications: '',
    age: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div className="health-diagnosis">
      <div className="hero-section">
        <div className="hero-content">
          <h1><FaStethoscope /> Online Health Assessment</h1>
          <p>Get a preliminary assessment of your symptoms and receive guidance on next steps</p>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <FaClipboardList />
          <h3>Symptom Check</h3>
          <p>Describe your symptoms for initial assessment</p>
        </div>
        <div className="feature-card">
          <FaUserMd />
          <h3>Expert Analysis</h3>
          <p>Get insights from our medical database</p>
        </div>
        <div className="feature-card">
          <FaHospital />
          <h3>Care Recommendations</h3>
          <p>Receive guidance on appropriate medical care</p>
        </div>
      </div>

      <div className="assessment-form-section">
        <h2>Health Assessment Form</h2>
        <form onSubmit={handleSubmit} className="assessment-form">
          <div className="form-group">
            <label htmlFor="symptoms">Describe your symptoms:</label>
            <textarea
              id="symptoms"
              name="symptoms"
              value={formData.symptoms}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="duration">Duration of symptoms:</label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="e.g., 2 days"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="severity">Severity:</label>
              <select
                id="severity"
                name="severity"
                value={formData.severity}
                onChange={handleChange}
                required
              >
                <option value="mild">Mild</option>
                <option value="moderate">Moderate</option>
                <option value="severe">Severe</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="previousConditions">Previous medical conditions:</label>
            <textarea
              id="previousConditions"
              name="previousConditions"
              value={formData.previousConditions}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="medications">Current medications:</label>
            <textarea
              id="medications"
              name="medications"
              value={formData.medications}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Get Assessment
          </button>
        </form>
      </div>

      <div className="disclaimer">
        <p>
          <strong>Important:</strong> This online assessment is not a substitute for professional medical advice. 
          If you are experiencing severe symptoms or a medical emergency, please contact emergency services immediately.
        </p>
      </div>
    </div>
  );
};

export default Diagnosis;