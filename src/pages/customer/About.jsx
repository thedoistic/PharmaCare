import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <div className="advanced-about">
      <motion.section
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="about-hero-overlay">
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            About PharmaCarer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            We believe in quality, trust, and care. Discover our journey, our values,
            and our commitment to your health.
          </motion.p>
        </div>
        <div className="hero-decorations">
          <motion.div
            className="circle circle1"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="circle circle2"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          ></motion.div>
          <motion.div
            className="circle circle3"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          ></motion.div>
        </div>
      </motion.section>

      <section className="about-content">
        <div className="container about-section">
          <motion.div
            className="about-image"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src="https://pro-pharma.ua/uploads/team-min3.jpg" alt="Our Team" />
          </motion.div>
          <motion.div
            className="about-text"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2>Our Story</h2>
            <p>
              PharmaCarer was founded on the belief that quality healthcare should be accessible to
              everyone. With decades of combined experience, our team of expert pharmacists and healthcare
              professionals is committed to providing the highest standard of service.
            </p>
            <p>
              We strive to be more than just a pharmacy. We are your trusted partner on your journey to
              better health. From personalized care to fast, reliable delivery, our services are designed
              to meet your unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-cards">
            <motion.div
              className="value-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>Quality</h3>
              <p>We provide only the best and most reliable healthcare products.</p>
            </motion.div>
            <motion.div
              className="value-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>Trust</h3>
              <p>Your health is our top priority, and we work hard to earn your trust every day.</p>
            </motion.div>
            <motion.div
              className="value-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>Care</h3>
              <p>We are dedicated to offering personalized care and expert advice to every customer.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-philosophy">
        <div className="container">
          <h2>Our Philosophy</h2>
          <p className="yasli-text">
            At PharmaCarer, our philosophy is not just a statement—it's a way of life. We embrace the art and science of healthcare with passion and precision. Our commitment to excellence is woven into every interaction and every prescription we fill.
          </p>
          <p className="yasli-text">
            We believe that true care means understanding the unique needs of each individual. Our dedicated team listens, learns, and adapts, ensuring that every client experiences a personalized approach that is both empathetic and innovative.
          </p>
          <p className="yasli-text">
            Through collaboration and continuous improvement, we strive to set new standards in the pharmaceutical industry, transforming challenges into opportunities and obstacles into triumphs.
          </p>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-cards">
            <motion.div
              className="team-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="https://jnj-content-lab2.brightspotcdn.com/dims4/default/73be571/2147483647/strip/true/crop/1439x1079+306+0/resize/2048x1536!/format/webp/quality/90/?url=https%3A%2F%2Fjnj-production-jnj.s3.us-east-1.amazonaws.com%2Fbrightspot%2F8b%2F69%2F4a99b6ad41de84f5b491bd95296a%2Fjoaquinduato2021-white-jpeg-cc.jpg" alt="Team Member 1" />
              <h3>Dr. Jane Doe</h3>
              <p>Chief Pharmacist</p>
            </motion.div>
            <motion.div
              className="team-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img src="https://jnj-content-lab2.brightspotcdn.com/dims4/default/8af5d56/2147483647/strip/true/crop/1440x1080+458+0/resize/2048x1536!/format/webp/quality/90/?url=https%3A%2F%2Fjnj-production-jnj.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fa6%2F41%2F876914394d038d8a5458524c1e29%2Fjennifer-taubert-1540-2-1-copy-cc.jpg" alt="Team Member 2" />
              <h3>John Smith</h3>
              <p>Operations Manager</p>
            </motion.div>
            <motion.div
              className="team-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img src="https://jnj-content-lab2.brightspotcdn.com/dims4/default/246635a/2147483647/strip/true/crop/1180x885+0+71/resize/2048x1536!/format/webp/quality/90/?url=https%3A%2F%2Fjnj-production-jnj.s3.us-east-1.amazonaws.com%2Fbrightspot%2F04%2F79%2F6ddbb5d4494caedde56931533c54%2Flizforminard-square.jpg" alt="Team Member 3" />
              <h3>Mary Johnson</h3>
              <p>Customer Care Lead</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
