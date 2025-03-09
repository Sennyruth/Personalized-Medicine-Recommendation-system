import { useState } from 'react';
import { FaCalendarAlt, FaUserMd, FaClock, FaHospital } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiUrl } from '../../Utils/Config';
import './Appointments.css';

const Appointments = () => {
  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    reason: ''
  });

  const departments = [
    'Cardiology',
    'Neurology',
    'Pediatrics',
    'Orthopedics',
    'Dermatology',
    'General Medicine'
  ];

  const doctors = {
    Cardiology: ['Dr. John Smith', 'Dr. Sarah Johnson'],
    Neurology: ['Dr. Michael Brown', 'Dr. Emily Davis'],
    Pediatrics: ['Dr. David Wilson', 'Dr. Lisa Anderson'],
    Orthopedics: ['Dr. James Taylor', 'Dr. Rachel White'],
    Dermatology: ['Dr. Robert Miller', 'Dr. Emma Thompson'],
    'General Medicine': ['Dr. William Clark', 'Dr. Olivia Martin']
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
      ...(name === 'department' ? { doctor: '' } : {}) 
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
       const response = await fetch(`${apiUrl}/api/appointments/create`, {
      
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        credentials:'include'
      })
      const data = await response.json();
      if (data.success) {
        toast.success('Appointment booked successfully', {
          position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: { backgroundColor: "green", color: "white" }, 
          });
      } else {
        toast.error('Failed to book appointment.', {
          style: { backgroundColor: 'red', color: 'white' }
        });
      }
      console.log('appointment created:', data);
      setFormData({
        department: '',
        doctor: '',
        date: '',
        time: '',
        name: '',
        email: '',
        phone: '',
        reason: ''
      });
    } catch (error) {
      toast.error('Error creating appointment. Please try again later.',
        {
          style: { backgroundColor: 'red', color: 'white' }
        }

      );
      console.error(error);
    }
    
    console.log('Appointment form submitted:', formData);
  };
  return (
    <div className="appointments-page">
      <ToastContainer />
      <div className="appointments-hero">
        <div className="hero-content">
          <h1>Book Your Appointment</h1>
          <p>Schedule a consultation with our experienced medical professionals</p>
        </div>
      </div>

      <div className="appointments-container">
        <div className="appointment-info">
          <div className="info-box">
            <FaHospital className="info-icon" />
            <h3>Choose Department</h3>
            <p>Select from our specialized departments</p>
          </div>
          <div className="info-box">
            <FaUserMd className="info-icon" />
            <h3>Select Doctor</h3>
            <p>Pick your preferred medical specialist</p>
          </div>
          <div className="info-box">
            <FaCalendarAlt className="info-icon" />
            <h3>Pick Date</h3>
            <p>Choose your convenient date</p>
          </div>
          <div className="info-box">
            <FaClock className="info-icon" />
            <h3>Book Time Slot</h3>
            <p>Select your preferred time</p>
          </div>
        </div>

        <div className="appointment-form-container">
          <h2>Schedule Your Visit</h2>
          <form onSubmit={handleSubmit} className="appointment-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="department">Department</label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Department</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="doctor">Doctor</label>
                <select
                  id="doctor"
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  required
                  disabled={!formData.department}
                >
                  <option value="">Select Doctor</option>
                  {formData.department && doctors[formData.department].map(doc => (
                    <option key={doc} value={doc}>{doc}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="time">Preferred Time</label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Time</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="reason">Reason for Visit</label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                placeholder="Please briefly describe your symptoms or reason for visit"
                rows="4"
              />
            </div>

            <button type="submit" className="submit-btn">
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointments;