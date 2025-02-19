import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            We'd love to hear from you!
          </motion.p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-columns">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+12125551234">+1 (212) 555-1234</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@pharmacarer.com">info@pharmacarer.com</a>
              </p>
              <p>
                <strong>Headquarters:</strong> Pfizer Inc., 235 East 42nd Street, New York, NY 10017, USA
              </p>
              <p>
                <strong>Office Hours:</strong> Mon-Fri, 9:00 AM - 5:00 PM
              </p>
              <div className="social-media">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <motion.form
                className="contact-form"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <h2>Send Us a Message</h2>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Message" rows="5" required></textarea>
                </div>
                <button type="submit">Submit</button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map">
        <div className="container">
          <h2 className="map-heading">You can find us here:</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.959969742679!2d-73.98715518459424!3d40.75272697932725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a1b3b4b2f3%3A0x57a8a29f23b4b1d3!2sPfizer%20Inc.!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Pfizer Headquarters"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
