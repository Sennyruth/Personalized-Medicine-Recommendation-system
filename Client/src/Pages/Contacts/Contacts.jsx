import React from 'react';
// import './Contact.css';

const Contacts = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Email: info@medicare.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Medical Center Drive</p>
        </div>
        <div className="contact-form">
          {/* Add contact form */}
        </div>
      </div>
    </div>
  );
};

export default Contacts;