import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaTruck, 
  FaBoxes, 
  FaHome, 
  FaGlobe, 
  FaWarehouse, 
  FaShieldAlt,
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
  FaCheck
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaHome />,
      title: "Residential Moving",
      description: "Complete home relocation services with professional packing and careful handling of all your household items.",
      features: [
        "Professional packing services",
        "Furniture disassembly & assembly",
        "Specialized handling for fragile items",
        "Storage solutions if needed"
      ],
      price: "Starting from $299"
    },
    {
      icon: <FaGlobe />,
      title: "International Moving",
      description: "Comprehensive international relocation services with customs clearance and worldwide shipping.",
      features: [
        "Customs documentation assistance",
        "International shipping coordination",
        "Container loading & unloading",
        "Destination delivery services"
      ],
      price: "Custom Quote"
    },
    {
      icon: <FaWarehouse />,
      title: "Commercial Moving",
      description: "Professional office and commercial space relocation with minimal business disruption.",
      features: [
        "After-hours moving available",
        "IT equipment handling",
        "Furniture & equipment moving",
        "Quick setup at new location"
      ],
      price: "Starting from $599"
    },
    {
      icon: <FaBoxes />,
      title: "Packing Services",
      description: "Expert packing services using high-quality materials to ensure your items are protected during transit.",
      features: [
        "Professional packing materials",
        "Fragile item protection",
        "Labeling & inventory management",
        "Unpacking services available"
      ],
      price: "Starting from $199"
    },
    {
      icon: <FaTruck />,
      title: "Transportation",
      description: "Reliable transportation services with GPS tracking and real-time updates on your shipment.",
      features: [
        "GPS tracking system",
        "Real-time updates",
        "Climate-controlled vehicles",
        "Insurance coverage included"
      ],
      price: "Starting from $149"
    },
    {
      icon: <FaShieldAlt />,
      title: "Storage Solutions",
      description: "Secure storage facilities for short-term or long-term storage needs with climate control options.",
      features: [
        "Climate-controlled storage",
        "24/7 security monitoring",
        "Flexible storage periods",
        "Easy access when needed"
      ],
      price: "Starting from $99/month"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description: "Free consultation to understand your moving needs and provide a detailed quote."
    },
    {
      number: "02",
      title: "Planning",
      description: "Detailed planning and scheduling to ensure a smooth moving experience."
    },
    {
      number: "03",
      title: "Packing",
      description: "Professional packing of your belongings with care and attention to detail."
    },
    {
      number: "04",
      title: "Moving",
      description: "Safe and secure transportation of your items to the new location."
    },
    {
      number: "05",
      title: "Delivery",
      description: "Careful unloading and setup at your new location with unpacking services."
    }
  ];

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>
        <div className="container">
          <motion.div 
            className="services-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Services</h1>
            <p>Comprehensive moving and packing solutions tailored to your needs</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-grid">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What We Offer
          </motion.h2>
          <div className="grid grid-3">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheck className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="service-price">{service.price}</div>
                <Link to="/contact" className="btn">Get Quote</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Process
          </motion.h2>
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="process-step"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
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
            <h2>Ready to Get Started?</h2>
            <p>Contact us today for a free consultation and personalized quote</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn">Get Free Quote</Link>
              <a href="tel:+92-3125614051" className="btn secondary">
                <FaPhone /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 