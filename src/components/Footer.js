import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "About Us",
      content: "Your trusted partner in moving, making your relocation effortless and stress-free.",
      type: "about"
    },
    {
      title: "Contact Info",
      type: "contact",
      items: [
        { icon: <FaPhone />, text: "+92-3125614051" },
        { icon: <FaEnvelope />, text: "info.gpm@gmail.com" }
      ]
    },
    {
      title: "Quick Links",
      type: "links",
      items: [
        { path: "/about", label: "About Us" },
        { path: "/services", label: "Services" },
        { path: "/testimonials", label: "Testimonials" },
        { path: "/contact", label: "Contact Us" }
      ]
    },
    {
      title: "Business Hours",
      type: "hours",
      items: [
        "Monday - Friday: 9am - 6pm",
        "Saturday: 10am - 4pm",
        "Sunday: Closed"
      ]
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: "#", label: "Facebook" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{section.title}</h3>

              {section.type === "about" && (
                <>
                  <div>
                    <span>George Packers & Movers</span>
                  </div>
                  <p>{section.content}</p>
                </>
              )}

              {section.type === "contact" && (
                <div className="contact-info">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="contact-item">
                      <span className="contact-icon">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              )}

              {section.type === "links" && (
                <ul className="footer-links">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <Link to={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              )}

              {section.type === "hours" && (
                <ul className="business-hours">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="social-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Follow Us</h3>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p>&copy; {currentYear} George Packers & Movers. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer; 