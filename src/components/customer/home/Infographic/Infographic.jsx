import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaSmile, FaBoxOpen, FaUserMd } from 'react-icons/fa'; 
import './Infographic.css';

const stats = [
  { id: 1, value: 10000, label: "Patients", suffix: "+", icon: FaSmile },
  { id: 2, value: 500, label: "Products Offered", suffix: "+", icon: FaBoxOpen },
  { id: 3, value: 120, label: "Expert Staff", suffix: "+", icon: FaUserMd },
];

const Infographic = () => {
  return (
    <section className="infographic">
      <div className="infographic-bg"></div>

      <div className="infographic-container">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.id}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
            >
              <div className="stat-icon">
                <Icon className="icon" /> 
              </div>
              <h2 className="stat-value">
                <CountUp end={stat.value} duration={2} />
                {stat.suffix}
              </h2>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
      <div className="infographic-divider">
        <svg viewBox="0 0 1440 100">
          <path fill="#fff" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Infographic;
