import React, { useState } from "react";
import "../css/multy.css";
import cu1 from "../images/cu1.jpg";
import cu2 from "../images/cu2.jpg";
import cu3 from "../images/cu3.jpg";

const projects = [
  {
    label: "Colombo Commerical Project",
    img: "https://www.emezzi.com/Uploads/2021/12/banner-industriele-deur-372.jpg",
  },
  {
    label: "Galle Hotel Project",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
];

const aboutImages = [cu1, cu2, cu3];

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () =>
    setActiveSlide((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);

  const nextSlide = () =>
    setActiveSlide((prev) => (prev + 1) % aboutImages.length);

  return (
    <main className="home-main">

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-pattern" />
        <div className="hero-image-overlay" />

        <button className="hero-arrow left">&#8249;</button>

        <div className="hero-content">
          <h1>Innovative Aluminium, Steel &amp; Glass Solutions</h1>
          <p>Quality fabrications for modern interiors and structures</p>
          <button className="btn-primary">VIEW OUR WORK</button>
        </div>

        <button className="hero-arrow right">&#8250;</button>
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

        <div className="about-carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>&#8249;</button>

          <div className="carousel-track">
            {aboutImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`About image ${i + 1}`}
                className={`carousel-img ${i === activeSlide ? "active" : ""}`}
              />
            ))}
          </div>

          <button className="carousel-btn next" onClick={nextSlide}>&#8250;</button>
        </div>

        <div className="about-dots">
          {aboutImages.map((_, i) => (
            <div
              key={i}
              className={`dot ${activeSlide === i ? "active" : ""}`}
              onClick={() => setActiveSlide(i)}
            />
          ))}
        </div>
      </section>

      <section className="projects-section">
        <div className="section-title-wrap">
          <h2 className="section-title">Our Projects for Clients</h2>
          <p className="subtitle">
            Multy Engineers delivers premium aluminium, steel and glass
            solutions, showcasing excellence and craftsmanship in every
            installation we undertake.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.label}>
              <img src={project.img} alt={project.label} />
              <div className="project-card-label">
                {project.label}
                <span className="arrow">&#8250;</span>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <button className="btn-navy">VIEW ALL PROJECTS</button>
        </div>
      </section>

    </main>
  );
};

export default Home;
