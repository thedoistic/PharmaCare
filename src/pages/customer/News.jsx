import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./News.css";

const News = () => {
  return (
    <div className="news-page">
      <section className="news-hero">
        <div className="news-hero-overlay">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Latest News & Articles
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Stay updated with our latest healthcare insights, innovations, and news.
          </motion.p>
        </div>
      </section>

      <section className="latest-news">
        <div className="container">
          <h2>Latest News</h2>
          <div className="news-grid">
            <motion.div
              className="news-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src="https://img.etimg.com/thumb/msid-118169809,width-300,height-225,imgsize-719360,resizemode-75/biolumpivaxin-worlds-first-diva-marker-vaccine.jpg" alt="News 1" />
              <div className="news-card-content">
                <h3>New Advances in Healthcare Technology</h3>
                <span className="news-date">January 12, 2025</span>
                <p>
                  Discover how cutting-edge technology is transforming patient care and medical research...
                </p>
              </div>
            </motion.div>
            <motion.div
              className="news-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              <img src="https://pharmatimes.com/wp-content/uploads/2023/11/ThinkstockPhotos-E014848.jpg" alt="News 2" />
              <div className="news-card-content">
                <h3>Pharmaceutical Innovations Unveiled</h3>
                <span className="news-date">February 10, 2025</span>
                <p>
                  Pharmaceutical breakthroughs are changing the landscape of treatment and wellness...
                </p>
              </div>
            </motion.div>
            <motion.div
              className="news-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            >
              <img src="https://pharmatimes.com/wp-content/uploads/2023/08/haemophilia.jpg" alt="News 3" />
              <div className="news-card-content">
                <h3>Expert Insights: The Future of Medicine</h3>
                <span className="news-date">February 08, 2025</span>
                <p>
                  Leading experts share their predictions on how medicine and healthcare will evolve...
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="featured-article">
        <div className="container">
          <div className="article-content">
            <div className="article-image">
              <img src="https://pharmatimes.com/wp-content/uploads/2024/01/shutterstock_2169745825-scaled.jpg" alt="Featured Article" />
            </div>
            <div className="article-text">
              <h2>In-Depth: Transforming Healthcare with AI</h2>
              <p className="article-date">Sep 15, 2025</p>
              <p>
                Artificial Intelligence is not just a buzzword—it’s revolutionizing the way healthcare is delivered. In this in-depth article, we explore the current trends, future possibilities, and ethical considerations surrounding the integration of AI in medicine.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
