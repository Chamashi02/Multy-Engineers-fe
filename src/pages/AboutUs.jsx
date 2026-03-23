import React from "react";
import "../css/multy.css";

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
      
    </main>
  );
};

export default AboutUs;