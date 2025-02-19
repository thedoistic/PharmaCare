import React from "react";
import { motion } from "framer-motion";
import "./OperationsAndPolicies.css";

const OperationsAndPolicies = () => {

  const operations = [
    {
      id: 1,
      title: "Pharmaceuticals",
      description:
        "We offer a comprehensive range of prescription medications and over‑the‑counter drugs that are safe, effective, and affordable.",
      colorClass: "op-card-blue",
    },
    {
      id: 2,
      title: "Wellness Supplements",
      description:
        "Our premium selection of wellness supplements is designed to support a healthy lifestyle and boost your natural defenses.",
      colorClass: "op-card-green",
    },
    {
      id: 3,
      title: "Diagnostics & Lab Services",
      description:
        "Using state‑of‑the‑art diagnostics and laboratory services, we deliver fast and accurate health assessments for informed care.",
      colorClass: "op-card-orange",
    },
  ];

  const policies = [
    {
      id: 1,
      title: "Equality & Inclusion",
      description:
        "We believe every individual deserves respect. Our policies foster an environment where diversity is celebrated and everyone is valued equally.",
      colorClass: "policy-card-purple",
    },
    {
      id: 2,
      title: "Transparency",
      description:
        "We operate with openness and honesty. Our practices ensure clear communication and fair treatment for our employees and customers alike.",
      colorClass: "policy-card-teal",
    },
    {
      id: 3,
      title: "Sustainability",
      description:
        "We are committed to environmental responsibility and sustainable growth, continually integrating eco‑friendly practices in our operations.",
      colorClass: "policy-card-yellow",
    },
  ];

  return (
    <div className="ops-policies-page">
      <section className="op-hero">
        <div className="op-hero-overlay">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Operations &amp; Policies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Explore what we do and our commitment to fairness and excellence.
          </motion.p>
        </div>
      </section>

      <section className="ops-section">
        <div className="container">
          <h2 className="section-title">Our Operations</h2>
          <div className="cards-grid">
            {operations.map((op) => (
              <motion.div
                key={op.id}
                className={`card op-card ${op.colorClass}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>{op.title}</h3>
                <p>{op.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="policies-section">
        <div className="container">
          <h2 className="section-title">Our Policies</h2>
          <div className="cards-grid">
            {policies.map((policy) => (
              <motion.div
                key={policy.id}
                className={`card policy-card ${policy.colorClass}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>{policy.title}</h3>
                <p>{policy.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OperationsAndPolicies;
