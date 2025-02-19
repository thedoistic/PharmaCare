import React from 'react';
import { motion } from 'framer-motion';
import './Intro.css';

const Intro = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to PharmaCare
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Where Innovation Meets Care
        </motion.p>
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a className="hero-cta" href="/products">Explore Our Products</a>
          <a className="hero-cta secondary" href="/customer/About">Learn More</a>
        </motion.div>
        <motion.div
          className="scroll-down"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span></span>
        </motion.div>
      </div>

      <svg className="hero-divider" viewBox="0 0 1440 320">
        <path 
          fill="#ffffff" 
          fillOpacity="1" 
          d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,192C672,181,768,139,864,122.7C960,107,1056,117,1152,144C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Intro;
