
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const handleNavigate=()=>{
    navigate("/appointments")
  }
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Your Health, Our Priority
          </h1>
          <p className="hero-subtitle">
            Providing exceptional healthcare services with compassion and expertise
          </p>
          <div className="hero-cta">
            <button className="primary-button" onClick={handleNavigate}>Book Appointment</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          {/* Add your hero image here */}
        </div>
      </div>
    </section>
  );
};

export default Hero;