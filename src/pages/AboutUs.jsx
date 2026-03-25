import React from "react";
import "../css/multy.css";
import service1 from "../images/service1.jpg";
import service2 from "../images/service2.jpg";
import service3 from "../images/service3.png";
import service4 from "../images/service4.jpg";
import service5 from "../images/service5.webp";
import service6 from "../images/service6.jpg";

const services = [
  {
    title: "Aluminium & Glass Doors and Windows",
    img: service1,
  },
  {
    title: "Glass Partition Works",
    img: service2,
  },
  {
    title: "Ceiling Works",
    img: service3,
    highlight: true,
  },
  {
    title: "Steel Structures & Building",
    img: service4,
  },
  {
    title: "Office Interiors",
    img: service5,
    highlight: true,
  },
  {
    title: "Pantry Cupboards",
    img: service6,
  },
];

const choices = [
  {
    title: "Quality Materials",
    desc: "We use only premium-grade materials ensuring durability and strength.",
  },
  {
    title: "Skilled Fabrication",
    desc: "Expert craftsmanship with attention to every detail.",
  },
  {
    title: "On-Time Delivery",
    desc: "Projects completed and delivered within the promised timeline.",
  },
  {
    title: "Professional Finishing",
    desc: "Clean, polished, and modern finishing for every project.",
  },
];

const AboutUs = () => {
  return (
    <main className="about-main">

      <section className="about">
        <div className="about-bg" />
        <div className="about-pattern" />
        <div className="about-image-overlay" />
      </section>

      <section className="about-section">
        <div className="section-title-wrap">
          <h2 className="section-title">About Multy Engineers</h2>
        </div>
        <p>
          Multy Engineers specializes in aluminium, steel and glass fabrication
          solutions. We are dedicated to creating lasting structures with
          innovative techniques, quality materials, and meticulous attention to
          detail for every client project across Sri Lanka.
        </p>
      </section>
      
      <section className="services-section">
        <div className="section-title-wrap">
          <h2 className="section-title">Our Services</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={service.title}>
              <img src={service.img} alt={service.title} />
              <div className="service-card-label">
                {service.title}
                <span className="arrow">&#8250;</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="choose-us-section">
        <div className="section-title-wrap">
          <h2 className="section-title">Why Choose Us</h2>
        </div>

        <div className="choose-us-grid">
          {choices.map((choice, index) => (
        <div className="choice-card" key={index}>
          <div className="choice-icon">
          {choice.icon}
            </div>
              <h4 className="choice-title">{choice.title}</h4>
              <p className="choice-desc">{choice.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default AboutUs;