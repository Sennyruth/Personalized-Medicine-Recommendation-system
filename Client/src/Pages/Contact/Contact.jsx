// import React, { useState } from 'react';
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
// import './Contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="contact-page">
//       <div className="contact-hero">
//         <div className="contact-hero-content">
//           <h1>Contact Us</h1>
//           <p>We're here to help and answer any questions you might have</p>
//         </div>
//       </div>

//       <div className="contact-info-section">
//         <div className="contact-info">
//           <div className="info-card">
//             <FaMapMarkerAlt className="info-icon" />
//             <h3>Visit Us</h3>
//             <p>123 Healthcare Ave</p>
//             <p>Medical District</p>
//             <p>Nairobi, Kenya</p>
//           </div>

//           <div className="info-card">
//             <FaPhone className="info-icon" />
//             <h3>Call Us</h3>
//             <p>Main: +254 700 000 000</p>
//             <p>Emergency: +254 700 000 999</p>
//             <p>Appointments: +254 700 000 111</p>
//           </div>

//           <div className="info-card">
//             <FaEnvelope className="info-icon" />
//             <h3>Email Us</h3>
//             <p>info@hospital.com</p>
//             <p>appointments@hospital.com</p>
//             <p>support@hospital.com</p>
//           </div>

//           <div className="info-card">
//             <FaClock className="info-icon" />
//             <h3>Working Hours</h3>
//             <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
//             <p>Saturday: 9:00 AM - 5:00 PM</p>
//             <p>Sunday: Emergency Only</p>
//           </div>
//         </div>
//       </div>

//       <div className="contact-section">
//         <div className="contact-form-container">
//           <div className="form-header">
//             <h2>Send Us a Message</h2>
//             <p>Fill out the form below and we'll get back to you as soon as possible</p>
//           </div>

//           <form onSubmit={handleSubmit} className="contact-form">
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your Name"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Your Email"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Your Phone"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="text"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 placeholder="Subject"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Your Message"
//                 required
//                 rows="5"
//               ></textarea>
//             </div>

//             <button type="submit" className="submit-btn">Send Message</button>
//           </form>
//         </div>
//       </div>

//       <div className="map-section">
//         <iframe
//           title="Hospital Location"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817850077864!2d36.8170146!3d-1.2830694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d62d4fccdd%3A0x71d8f17fcd7c3d8e!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1675452288888!5m2!1sen!2sus"
//           width="100%"
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>

//       <div className="social-section">
//         <h3>Connect With Us</h3>
//         <div className="social-links">
//           <a href="#" className="social-link">
//             <FaFacebookF />
//           </a>
//           <a href="#" className="social-link">
//             <FaTwitter />
//           </a>
//           <a href="#" className="social-link">
//             <FaLinkedinIn />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
