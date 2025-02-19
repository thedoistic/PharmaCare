import React from 'react';
import { motion } from 'framer-motion';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-overlay">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ready to Join Us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Experience the future of healthcare with PharmaCarer.
        </motion.p>
        <motion.a
          href="/customer/ContactUs"
          className="cta-button"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Contact Us Today
        </motion.a>
      </div>
      <hr className="cta-separator" />
    </section>
  );
};

export default CTA;
