import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Brands.css";

const Brands = () => {
  const allBrands = [
    { id: 1, name: "Pfizer", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBlnLJW0TPdsDARzMj5Ix__BLACLDHN1mBRg&s", tagline: "Innovating Health", category: "top" },
    { id: 2, name: "Moderna", logo: "https://baselarea.swiss//wp-content/uploads/2021/12/Moderna-logo-1.jpg", tagline: "Science & Innovation", category: "top" },
    { id: 3, name: "AstraZeneca", logo: "https://www.aifd.org.tr/wp-content/uploads/2018/01/AZ_Logo.png", tagline: "Caring for You", category: "popular" },
    { id: 4, name: "Novartis", logo: "https://www.aifd.org.tr/wp-content/uploads/2017/02/novartis-logo.jpg", tagline: "Leading Healthcare", category: "popular" },
    { id: 5, name: "Merck", logo: "https://www.merck.com/wp-content/uploads/sites/124/2022/03/Merck.png", tagline: "Your Trusted Partner", category: "new" },
    { id: 6, name: "Sanofi", logo: "https://connect.endeavor.org.tr/wp-content/uploads/2020/08/sanofi-1-1170x877.jpg", tagline: "Committed to Health", category: "new" },
    { id: 7, name: "Bayer", logo: "https://f.invest.gov.tr/en/WhyTurkey/SuccessStories/PublishingImages/pages/bayer.png", tagline: "Science for a Better Life", category: "top" },
    { id: 8, name: "GSK", logo: "https://tr.gsk.com/media/6320/gsk_signal_full_colour_rgb-1.png?anchor=center&mode=crop&quality=90&width=624&height=416&rnd=133496349250000000", tagline: "Innovative Solutions", category: "popular" },
    { id: 9, name: "Roche", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Hoffmann-La_Roche_logo.svg/1200px-Hoffmann-La_Roche_logo.svg.png", tagline: "Advancing Science", category: "new" },
    { id: 10, name: "AbbVie", logo: "https://chicagoinnovation.com/wp-content/uploads/2022/11/Abbvie.jpg", tagline: "Transforming Lives", category: "top" },
  ];

  const [filter, setFilter] = useState("all");
  const filteredBrands =
    filter === "all" ? allBrands : allBrands.filter((brand) => brand.category === filter);

  const featuredBrands = allBrands.filter((brand) => brand.category === "top");

  return (
    <div className="brands-page">
      <section className="brands-hero">
        <div className="brands-hero-overlay">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Trusted Brands
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Discover the world-class partners who empower our commitment to quality healthcare.
          </motion.p>
        </div>
      </section>

      <section className="featured-brands">
        <div className="container">
          <h2>Featured Brands</h2>
          <motion.div
            className="featured-brands-grid" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {featuredBrands.map((brand) => (
              <motion.div
                key={brand.id}
                className="featured-brand-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={brand.logo} alt={brand.name} />
                <h3>{brand.name}</h3>
                <p>{brand.tagline}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="brands-filter">
        <div className="container">
          <div className="filter-buttons">
            <button
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}
            >
              All Brands
            </button>
            <button
              className={filter === "top" ? "active" : ""}
              onClick={() => setFilter("top")}
            >
              Top Brands
            </button>
            <button
              className={filter === "popular" ? "active" : ""}
              onClick={() => setFilter("popular")}
            >
              Popular
            </button>
            <button
              className={filter === "new" ? "active" : ""}
              onClick={() => setFilter("new")}
            >
              New Arrivals
            </button>
          </div>
        </div>
      </section>

      <section className="brands-grid-section">
        <div className="container">
          <h2>All Brands</h2>
          <div className="brands-grid">
            {filteredBrands.map((brand) => (
              <motion.div
                key={brand.id}
                className="brand-card"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={brand.logo} alt={brand.name} />
                <div className="brand-info">
                  <h3>{brand.name}</h3>
                  <p>{brand.tagline}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="brands-cta">
        <div className="container">
          <h2>Become a Partner</h2>
          <p>
            Join our network of trusted brands and become part of our commitment to delivering quality healthcare solutions.
          </p>
          <a href="/customer/ContactUs" className="btn cta-btn">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Brands;
