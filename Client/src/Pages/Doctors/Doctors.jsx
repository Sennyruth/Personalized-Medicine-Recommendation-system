import  { useState } from 'react';
import { FaStethoscope, FaCalendarAlt, FaClock, FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Doc1Img from "../../assets/Doc1.jpg"
import Doc2Img from "../../assets/Doc2.jpg"
import './Doctors.css';

const Doctors = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const specialties = [
    { id: 'all', name: 'All Specialties' },
    { id: 'cardiology', name: 'Cardiology' },
    { id: 'neurology', name: 'Neurology' },
    { id: 'pediatrics', name: 'Pediatrics' },
    { id: 'orthopedics', name: 'Orthopedics' },
    { id: 'dental', name: 'Dental Care' }
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'cardiology',
      specialtyTitle: 'Cardiologist',
      image: Doc1Img,
      experience: '15+ Years Experience',
      education: 'MD - Cardiology, FCPS - Cardiac Surgery',
      description: 'Specialized in complex cardiac procedures and preventive cardiology.',
      availability: ['Mon-Fri: 9:00 AM - 5:00 PM', 'Sat: 9:00 AM - 1:00 PM'],
      contact: {
        phone: '+254 700 000 001',
        email: 'sarah.johnson@healthcare.com'
      }
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'neurology',
      specialtyTitle: 'Neurologist',
      image: Doc2Img,
      experience: '12+ Years Experience',
      education: 'MD - Neurology, Fellowship in Neurosurgery',
      description: 'Expert in treating complex neurological disorders and brain surgery.',
      availability: ['Mon-Fri: 8:00 AM - 4:00 PM', 'Sat: 8:00 AM - 12:00 PM'],
      contact: {
        phone: '+254 700 000 002',
        email: 'michael.chen@healthcare.com'
      }
    },
    {
      id: 3,
      name: 'Dr. Emily Williams',
      specialty: 'pediatrics',
      specialtyTitle: 'Pediatrician',
      image: Doc2Img,
      experience: '10+ Years Experience',
      education: 'MD - Pediatrics, Fellowship in Neonatology',
      description: 'Dedicated to providing comprehensive care for children of all ages.',
      availability: ['Mon-Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      contact: {
        phone: '+254 700 000 003',
        email: 'emily.williams@healthcare.com'
      }
    },
    {
      id: 4,
      name: 'Dr. James Anderson',
      specialty: 'orthopedics',
      specialtyTitle: 'Orthopedic Surgeon',
      image: Doc2Img,
      experience: '18+ Years Experience',
      education: 'MD - Orthopedics, Fellowship in Sports Medicine',
      description: 'Specializes in joint replacement and sports injury treatment.',
      availability: ['Mon-Fri: 8:30 AM - 4:30 PM', 'Sat: 9:00 AM - 1:00 PM'],
      contact: {
        phone: '+254 700 000 004',
        email: 'james.anderson@healthcare.com'
      }
    },
    {
      id: 5,
      name: 'Dr. Lisa Martinez',
      specialty: 'dental',
      specialtyTitle: 'Dental Surgeon',
      image: Doc1Img,
      experience: '8+ Years Experience',
      education: 'DDS - Dental Surgery, Advanced Cosmetic Dentistry',
      description: 'Expert in cosmetic dentistry and oral surgery procedures.',
      availability: ['Mon-Fri: 9:00 AM - 5:00 PM', 'Sat: 9:00 AM - 1:00 PM'],
      contact: {
        phone: '+254 700 000 005',
        email: 'lisa.martinez@healthcare.com'
      }
    },
    {
      id: 6,
      name: 'Dr. David Kim',
      specialty: 'cardiology',
      specialtyTitle: 'Interventional Cardiologist',
      image: Doc1Img,
      experience: '14+ Years Experience',
      education: 'MD - Cardiology, Fellowship in Interventional Cardiology',
      description: 'Specialized in cardiac catheterization and heart disease treatment.',
      availability: ['Mon-Fri: 8:00 AM - 4:00 PM', 'Sat: 9:00 AM - 12:00 PM'],
      contact: {
        phone: '+254 700 000 006',
        email: 'david.kim@healthcare.com'
      }
    }
  ];

  const filteredDoctors = selectedSpecialty === 'all' 
    ? doctors 
    : doctors.filter(doctor => doctor.specialty === selectedSpecialty);

  const viewAppointments = (doctorId) => {
    console.log(`Viewing appointments for Doctor ID: ${doctorId}`);
    // You could navigate to a new route or display appointments
  };

  return (
    <div className="doctors-page">
      <div className="doctors-hero">
        <div className="doctors-hero-content">
          <h1>Our Medical Experts</h1>
          <p>Meet our team of experienced and dedicated healthcare professionals</p>
        </div>
      </div>

      <div className="doctors-intro">
        <div className="doctors-intro-content">
          <h2>Find Your Specialist</h2>
          <p>
            Our team of highly qualified doctors are here to provide you with the
            best medical care. Choose from our specialists below.
          </p>
        </div>
      </div>

      <div className="specialty-filter">
        {specialties.map(specialty => (
          <button
            key={specialty.id}
            className={`filter-btn ${selectedSpecialty === specialty.id ? 'active' : ''}`}
            onClick={() => setSelectedSpecialty(specialty.id)}
          >
            {specialty.name}
          </button>
        ))}
      </div>

      <div className="doctors-grid">
        {filteredDoctors.map(doctor => (
          <div key={doctor.id} className="doctor-card">
            <div className="doctor-image">
              <img src={doctor.image} alt={doctor.name} />
              <div className="doctor-specialty">
                <FaStethoscope />
                <span>{doctor.specialtyTitle}</span>
              </div>
            </div>
            <div className="doctor-info">
              <h3>{doctor.name}</h3>
              <p className="experience">{doctor.experience}</p>
              <p className="education">{doctor.education}</p>
              <p className="description">{doctor.description}</p>
              
              <div className="availability">
                <h4><FaClock /> Availability</h4>
                <ul>
                  {doctor.availability.map((time, index) => (
                    <li key={index}>{time}</li>
                  ))}
                </ul>
              </div>

              <div className="doctor-contact">
                <a href={`tel:${doctor.contact.phone}`} className="contact-link">
                  <FaPhone /> Call
                </a>
                <a href={`mailto:${doctor.contact.email}`} className="contact-link">
                  <FaEnvelope /> Email
                </a>
                <button className="book-btn">
                  <FaCalendarAlt /> Book Appointment
                </button>
                
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="join-team">
        <div className="join-team-content">
          <h2>Join Our Team</h2>
          <p>
            We are always looking for talented and passionate medical professionals
            to join our team. If you are interested in working with us, please
            get in touch.
          </p>
          <button className="join-btn">View Career Opportunities</button>
        </div>
      </div>
    </div>
  );
};

export default Doctors;