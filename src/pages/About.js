import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaTrophy, FaHandshake, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [counters, setCounters] = useState({
    customers: 0,
    projects: 0,
    services: 0
  });

  useEffect(() => {
    const targetCounts = {
      customers: 500,
      projects: 1000,
      services: 15
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev };
        let allComplete = true;

        Object.keys(targetCounts).forEach(key => {
          if (newCounters[key] < targetCounts[key]) {
            const increment = Math.ceil(targetCounts[key] / steps);
            newCounters[key] = Math.min(newCounters[key] + increment, targetCounts[key]);
            allComplete = false;
          }
        });

        if (allComplete) {
          clearInterval(timer);
        }

        return newCounters;
      });
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const values = [
    {
      icon: <FaUsers />,
      title: "Customer Focus",
      description: "We prioritize our customers' needs and satisfaction above everything else."
    },
    {
      icon: <FaTrophy />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery."
    },
    {
      icon: <FaHandshake />,
      title: "Trust & Reliability",
      description: "Building long-term relationships based on trust and reliability."
    },
    {
      icon: <FaHeart />,
      title: "Care & Attention",
      description: "Treating your belongings with the same care as our own."
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            className="about-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About George Packers & Movers</h1>
            <p>Your trusted partner in making relocations effortless and stress-free</p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section company-story">
        <div className="container">
          <div className="grid grid-2">
            <motion.div 
              className="story-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Our Story</h2>
              <p>
                Founded with a vision to revolutionize the moving industry, George Packers & Movers 
                has been serving customers with dedication and professionalism since our inception. 
                We understand that moving can be one of the most stressful experiences in life, 
                which is why we've made it our mission to make it as smooth and hassle-free as possible.
              </p>
              <p>
                Our team of experienced professionals is committed to providing top-notch service, 
                ensuring that your valuable possessions are handled with the utmost care and attention. 
                From careful packing to secure transportation, we take care of every detail so you can 
                focus on the excitement of your new beginning.
              </p>
            </motion.div>
            <motion.div 
              className="story-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="image-placeholder">
                <img src="/about.jpg" alt="Our Team" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our Leadership
          </motion.h2>
          <div className="grid grid-2">
            <motion.div 
              className="team-member card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="member-image">
                <img src="/ceo.jpg" alt="Mr Hasroon Anjum" />
              </div>
              <div className="member-info">
                <h3>Mr Hasroon Anjum</h3>
                <p className="position">CEO & Founder</p>
                <p className="description">
                  The mastermind behind George Packers & Movers, Mr Hasroon Anjum brings years 
                  of experience and a passion for excellence to every project. His vision drives 
                  our commitment to customer satisfaction and service quality.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="team-member card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="member-image">
                <img src="/logo.png" alt="Company Logo" />
              </div>
              <div className="member-info">
                <h3>Our Company</h3>
                <p className="position">The Idea, The Product!</p>
                <p className="description">
                  Our company represents innovation, reliability, and customer-centric service. 
                  We've built our reputation on trust, quality, and the satisfaction of thousands 
                  of happy customers across the region.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="grid grid-3">
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="stat-number">{counters.customers}+</div>
              <div className="stat-label">Happy Customers</div>
            </motion.div>
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="stat-number">{counters.projects}+</div>
              <div className="stat-label">Projects Completed</div>
            </motion.div>
            <motion.div 
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="stat-number">{counters.services}+</div>
              <div className="stat-label">Services Offered</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>
          <div className="grid grid-4">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 