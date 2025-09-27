import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Lahore",
      rating: 5,
      text: "George Packers & Movers made our international move incredibly smooth. Their attention to detail and professional service exceeded our expectations. Everything arrived safely and on time!",
      image: "/testimonial1.jpg"
    },
    {
      name: "Ahmed Hassan",
      location: "Karachi",
      rating: 5,
      text: "I was worried about moving my antique furniture, but the team handled everything with such care. They even helped with unpacking and setting up at the new location. Highly recommended!",
      image: "/testimonial2.jpg"
    },
    {
      name: "Fatima Ali",
      location: "Islamabad",
      rating: 5,
      text: "The best moving experience I've ever had! The team was punctual, professional, and went above and beyond to ensure our satisfaction. Will definitely use their services again.",
      image: "/testimonial3.jpg"
    },
    {
      name: "Muhammad Khan",
      location: "Rawalpindi",
      rating: 5,
      text: "Moving our office was a breeze with George Packers & Movers. They worked efficiently and ensured minimal disruption to our business operations. Excellent service!",
      image: "/testimonial4.jpg"
    },
    {
      name: "Ayesha Malik",
      location: "Faisalabad",
      rating: 5,
      text: "The packing service was outstanding. They used high-quality materials and took extra care with fragile items. The entire process was stress-free and professional.",
      image: "/testimonial5.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonials">
      {/* Hero Section */}
      <section className="testimonials-hero">
        <div className="container">
          <motion.div 
            className="testimonials-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>What Our Customers Say</h1>
            <p>Real experiences from satisfied customers who trusted us with their moves</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="section testimonials-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Customer Reviews
          </motion.h2>
          
          <div className="testimonials-carousel">
            <button 
              className="carousel-btn prev"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            
            <div className="testimonials-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="testimonial-card"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="testimonial-content">
                    <FaQuoteLeft className="quote-icon" />
                    <p className="testimonial-text">{testimonials[currentIndex].text}</p>
                    <div className="testimonial-author">
                      <div className="author-info">
                        <h4>{testimonials[currentIndex].name}</h4>
                        <p className="location">{testimonials[currentIndex].location}</p>
                        <div className="rating">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <FaStar key={i} className="star" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <button 
              className="carousel-btn next"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
          
          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="grid grid-4">
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="stat-number">98%</div>
              <div className="stat-label">Customer Satisfaction</div>
            </motion.div>
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Customers</div>
            </motion.div>
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="stat-number">4.9</div>
              <div className="stat-label">Average Rating</div>
            </motion.div>
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="stat-number">100%</div>
              <div className="stat-label">On-Time Delivery</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Join Our Happy Customers</h2>
            <p>Experience the same level of excellence that our customers rave about</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn">Get Started Today</a>
              <a href="tel:+92-3125614051" className="btn secondary">Call for Quote</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials; 