import { useState } from 'react';
import { FaStethoscope, FaClipboardList, FaUserMd, FaHospital, FaPills } from 'react-icons/fa';
import './Diagnosis.css';

const Diagnosis = () => {
  const [formData, setFormData] = useState({ symptoms: '' });
  const [result, setResult] = useState(null);
  const [medicines, setMedicines] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
   

  const handleChange = (e) => {
    setFormData({ symptoms: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);
    setMedicines([]);

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symptoms: formData.symptoms.split(',') }),
      });

      const data = await response.json();
      if (response.ok) {
        setResult(data.predicted_disease);

        // Fetch recommended medicines for the predicted disease
        fetchMedicines(data.predicted_disease);
      } else {
        setError(data.error || 'Failed to get a response from the server.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch medicines for the predicted disease
  const fetchMedicines = async (disease) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/recommend_medicine', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ disease }),
      });

      const data = await response.json();
      if (response.ok) {
        setMedicines(data.recommended_medicines || []);
      } else {
        setError(data.error || 'Failed to retrieve medicine recommendations.');
      }
    } catch (err) {
      setError('Error fetching medicine recommendations.');
    }
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
        <div className="feature-card"><FaClipboardList /><h3>Symptom Check</h3><p>Describe your symptoms for initial assessment</p></div>
        <div className="feature-card"><FaUserMd /><h3>Expert Analysis</h3><p>Get insights from our medical database</p></div>
        <div className="feature-card"><FaHospital /><h3>Care Recommendations</h3><p>Receive tailored care recommendations based on your symptoms</p></div>
      </div>

      {/* Symptoms Entry Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="symptoms">Describe your symptoms (comma-separated):</label>
          <textarea id="symptoms" name="symptoms" value={formData.symptoms} onChange={handleChange} required />
        </div>
        <button type="submit" disabled={loading}>{loading ? 'Processing...' : 'Submit'}</button>
      </form>

      {/* Display Results */}
      {result && (
        <div className="result">
          <h3>Predicted Disease:</h3>
          <p><strong>{result}</strong></p>

          {/* Display Medicines */}
          {medicines.length > 0 && (
            <div className="medicine-list">
              <h3><FaPills /> Recommended Medicines:</h3>
              <ul>
                {medicines.map((med, index) => (
                  <li key={index}>{med}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Error Message */}
      {error && <div className="error">{error}</div>}

      <strong className="important-statement">
        Please do not rely solely on this online assessment; seek further medical attention if needed.
      </strong>
    </div>
  );
};

export default Diagnosis;
