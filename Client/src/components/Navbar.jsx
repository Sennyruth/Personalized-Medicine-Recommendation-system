
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          HealthCare
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/doctors" className="nav-links">Doctors</Link>
          </li>
          <li className="nav-item">
            <Link to="/appointments" className="nav-links">Appointments</Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/contact" className="nav-links">Contact</Link>
          </li> */}
          <li className="nav-item">
            <Link to="/diagnosis" className="nav-links">Health Diagnosis</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
