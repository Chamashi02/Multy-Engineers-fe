import React from "react";
import "../css/multy.css";
import contactus from "../images/contactus.jpg";

const ContactUs = () => {
  return (
    <main className="contact-main">

      <section className="contact">
        <div className="contact-bg" />
        <div className="contact-pattern" />
        <div className="contact-image-overlay" />

        <div className="contact-content">
          <h1>Contact Us</h1>
        </div>
      </section>

        <section className="contact-section">
          <div className="section-title-wrap">
            <h2 className="section-title">Get in Touch</h2>
          </div>
            <p>
                Feel free to contact us for any inquiries or project discussions. 
                We are here to help you build modern and functional spaces.
                We'll get back to you as soon as possible.
            </p>

        <div className="contact-map">
            <iframe src="https://maps.google.com/maps?q=colombo&t=&z=13&ie=UTF8&iwloc=&output=embed" title="map">
            </iframe>
        </div>
        </section>
      </main>
  );
};

export default ContactUs;