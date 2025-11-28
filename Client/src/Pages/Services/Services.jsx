
import { FaHeartbeat, FaBrain, FaTooth, FaBone, FaAmbulance, FaStethoscope, FaEye, FaBabyCarriage, FaLungs } from 'react-icons/fa';
import heroImage from '../../assets/services-hero.jpg';
import ctaImage from '../../assets/cta-bg.jpg';
import {useNavigate} from "react-router-dom";
import './Services.css';

const Services = () => {
  const navigate = useNavigate()
  const handleNavigate = () =>{
    navigate('/appointments')
    
  }
  const services = [
    {
      id: 1,
      icon: <FaHeartbeat />,
      title: 'Cardiology',
      description: 'Comprehensive heart care services including diagnostics, treatment, and rehabilitation for all types of cardiac conditions.',
      features: ['ECG & Echo Tests', 'Cardiac Surgery', 'Heart Disease Treatment', 'Pacemaker Services']
    },
    {
      id: 2,
      icon: <FaBrain />,
      title: 'Neurology',
      description: 'Expert care for disorders of the nervous system, brain, and spine with advanced diagnostic and treatment options.',
      features: ['Brain Mapping', 'Spine Surgery', 'Stroke Treatment', 'Neurological Rehabilitation']
    },
    {
      id: 3,
      icon: <FaTooth />,
      title: 'Dental Care',
      description: 'Complete dental services from routine check-ups to advanced dental procedures and oral surgery.',
      features: ['Dental Implants', 'Root Canal', 'Cosmetic Dentistry', 'Orthodontics']
    },
    {
      id: 4,
      icon: <FaBone />,
      title: 'Orthopedics',
      description: 'Specialized care for bones, joints, ligaments, tendons, muscles, and nerves.',
      features: ['Joint Replacement', 'Sports Medicine', 'Fracture Care', 'Spine Treatment']
    },
    {
      id: 5,
      icon: <FaAmbulance />,
      title: 'Emergency Care',
      description: '24/7 emergency medical services with rapid response teams and fully equipped facilities.',
      features: ['24/7 Service', 'Trauma Care', 'Critical Care', 'Ambulance Service']
    },
    {
      id: 6,
      icon: <FaStethoscope />,
      title: 'Primary Care',
      description: 'Comprehensive primary healthcare services for patients of all ages.',
      features: ['Regular Check-ups', 'Vaccinations', 'Health Screening', 'Chronic Disease Management']
    },
    {
      id: 7,
      icon: <FaEye />,
      title: 'Ophthalmology',
      description: 'Complete eye care services including routine exams and advanced surgical procedures.',
      features: ['Eye Examinations', 'Cataract Surgery', 'LASIK', 'Glaucoma Treatment']
    },
    {
      id: 8,
      icon: <FaBabyCarriage />,
      title: 'Pediatrics',
      description: 'Specialized medical care for infants, children, and adolescents.',
      features: ['Child Health', 'Immunizations', 'Growth Monitoring', 'Pediatric Emergency']
    },
    {
      id: 9,
      icon: <FaLungs />,
      title: 'Pulmonology',
      description: 'Expert care for respiratory conditions and lung diseases with advanced treatment options.',
      features: ['Respiratory Testing', 'Asthma Treatment', 'Sleep Studies', 'Bronchoscopy']
    }
  ];

  return (
    <div className="services-page">
      <div className="services-hero" style={{ backgroundImage: `linear-gradient(rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.9)), url(${heroImage})` }}>
        <div className="services-hero-content">
          <h1>Our Medical Services</h1>
          <p>Comprehensive Healthcare Solutions for You and Your Family</p>
        </div>
      </div>

      <div className="services-intro">
        <div className="services-intro-content">
          <h2>Why Choose Our Services?</h2>
          <p>
            We provide world-class healthcare services with state-of-the-art
            facilities and experienced medical professionals. Our commitment to
            excellence ensures that you receive the best possible care for all
            your medical needs.
          </p>
        </div>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="service-btn">Learn More</button>
          </div>
        ))}
      </div>

      <div className="services-cta" style={{ backgroundImage: `linear-gradient(rgba(49, 130, 206, 0.9), rgba(49, 130, 206, 0.9)), url(${ctaImage})` }}>
        <div className="cta-content">
          <h2>Need Medical Assistance?</h2>
          <p>Our team of medical professionals is here to help you 24/7</p>
          <div className="cta-buttons">
            <button className="cta-btn primary" onClick={handleNavigate}>Book Appointment</button>
            <button className="cta-btn secondary">Emergency Call</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;