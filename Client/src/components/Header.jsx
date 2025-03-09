
import { Link, useNavigate } from 'react-router-dom';
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
            <li><Link to="/" activeClassName="active-link">Home</Link></li>
            <li><Link to="/services" activeClassName="active-link">Services</Link></li>
            <li><Link to="/health-diagnosis" activeClassName="active-link">Health Diagnosis</Link></li>
            <li><Link to="/chatbot" activeClassName="active-link">Chatbot</Link></li>
            <li><Link to="/doctors" activeClassName="active-link">Doctors</Link></li>
            <li><Link to="/appointments" activeClassName="active-link">Appointments</Link></li>
            {/* <li><Link to="/contact" activeClassName="active-link">Contact</Link></li> */}
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