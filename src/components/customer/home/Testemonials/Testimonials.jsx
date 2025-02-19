import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alice Johnson",
      feedback: "PharmaCarer has transformed my healthcare experience with their innovative products.",
      image: "https://www.whiteroomstudio.com.sg/wordpress/wp-content/uploads/2021/10/professional-headshot-photography-linkedin-singapore-5.jpeg",
    },
    {
      id: 2,
      name: "Michael Lee",
      feedback: "Excellent service and truly cutting-edge technology in pharmaceuticals.",
      image: "https://www.whiteroomstudio.com.sg/wordpress/wp-content/uploads/2021/10/Professional-Corporate-Photoshoot-in-Singapore-White-Room-Studio-11.jpg",
    },
    {
      id: 3,
      name: "Sara Kim",
      feedback: "A company that cares about its customers and the environment. Highly recommended!",
      image: "https://cdn.betterpic.io/cdn-cgi/image/w=2048,q=85/assets/blog/media/model-examples-1/betterpic-generated-headshot-406.jpg",
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="testimonial-avatar">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <p className="feedback">"{testimonial.feedback}"</p>
              <h3 className="testimonial-name">{testimonial.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
