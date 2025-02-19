import React from 'react';
import { motion } from 'framer-motion';
import './ZigZag.css';

const items = [
  {
    id: 1,
    title: "Cutting-edge Research",
    text: "We invest in innovative research to develop breakthrough treatments that improve lives.",
    image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/321/321106/researchers-in-the-lab.jpg",
  },
  {
    id: 2,
    title: "Global Distribution",
    text: "Our products reach over 100 countries, ensuring access to quality healthcare worldwide.",
    image: "https://www.bendichealthcare.in/storage/Blogs/NjbsnCm3klR7vleX8T6v9H69ZSQf5jakiG4oo3MR.jpg",
  },
  {
    id: 3,
    title: "Sustainable Practices",
    text: "We are committed to environmentally sustainable practices in all our operations.",
    image: "https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22261_1647875610051190.jpg",
  },
];

const ZigZag = () => {
  return (
    <section className="zigzag-section">
      <div className="zigzag-container">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`zigzag-item ${index % 2 === 0 ? "left-image" : "right-image"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="zigzag-content">
              <motion.div
                className="zigzag-image-container"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={item.image} alt={item.title} className="zigzag-image" />
                <div className="image-overlay"></div>
              </motion.div>
              <motion.div
                className="zigzag-text-container"
                whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 className="zigzag-title">{item.title}</h2>
                <p className="zigzag-description">{item.text}</p>
                <a href="#" className="zigzag-cta">Learn More</a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ZigZag;
