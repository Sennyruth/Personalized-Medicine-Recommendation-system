import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are committed to providing exceptional healthcare services with
            compassion and care. Our team of dedicated professionals ensures the
            highest quality of patient care.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/doctors">Our Doctors</Link></li>
            <li><Link to="/appointments">Book Appointment</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul className="footer-links">
            <li><Link to="/services/emergency">Emergency Care</Link></li>
            <li><Link to="/services/cardiology">Cardiology</Link></li>
            <li><Link to="/services/neurology">Neurology</Link></li>
            <li><Link to="/services/dental">Dental Care</Link></li>
            <li><Link to="/services/orthopedics">Orthopedics</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Working Hours</h3>
          <ul className="working-hours">
            <li>
              <span>Monday - Friday:</span>
              <span>8:00 AM - 8:00 PM</span>
            </li>
            <li>
              <span>Saturday:</span>
              <span>9:00 AM - 6:00 PM</span>
            </li>
            <li>
              <span>Sunday:</span>
              <span>10:00 AM - 4:00 PM</span>
            </li>
            <li>
              <span>Emergency:</span>
              <span>24/7</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="contact-banner">
        <div className="contact-banner-content">
          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <FaMapMarkerAlt className="contact-banner-icon" />
            </div>
            <div className="contact-text">
              <h4>Location</h4>
              <p>123 Healthcare Ave, Medical District<br />Nairobi, Kenya</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <FaPhone className="contact-banner-icon" />
            </div>
            <div className="contact-text">
              <h4>Phone Number</h4>
              <p><a href="tel:+254700000000">+254 700 000 000</a></p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <FaEnvelope className="contact-banner-icon" />
            </div>
            <div className="contact-text">
              <h4>Email Address</h4>
              <p><a href="mailto:info@healthcare.com">info@healthcare.com</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Healthcare Services. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
