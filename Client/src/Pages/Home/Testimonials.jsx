
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './Home.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Patient",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "The care I received was exceptional. The medical team was not only professional but also compassionate. They made a difficult time much easier for me and my family.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael James",
      role: "Patient's Family",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: "We are grateful for the outstanding care provided to our mother. The staff went above and beyond to ensure her comfort and recovery.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Ndanu",
      role: "Patient",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      text: "From the moment I walked in, I felt well-cared for. The doctors took time to explain everything clearly, and the follow-up care was excellent.",
      rating: 5
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Patient",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      text: "The hospital's commitment to patient care is remarkable. The staff's expertise and dedication made my recovery process smooth and comfortable.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <FaStar key={index} className="text-yellow-400" />
    ));
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What Our Patients Say</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="author-image"
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                  <div className="rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;