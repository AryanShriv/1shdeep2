import React from "react";
import "./Contact.css";

const ContactSection = () => {
  return (
    <section className="contact-section container">
      <div className="contact-content">
        <h1 className="contact-heading">
          LET'S WORK <br /> TOGETHER
        </h1>
        <div className="contact-arrow">→</div>
      </div>
      <div className="contact-info">
        <div className="contact-item">
          <h3 className="contact-title">
            EMAIL <span className="arrow">→</span>{" "}
          </h3>
          <p className="contact-details">
            <a href="mailto:admin@gmail.com">admin@gmail.com</a>
          </p>
        </div>
        <div className="contact-item">
          <h3 className="contact-title">
            PHONE <span className="arrow">→</span>
          </h3>
          <p className="contact-details">(+91) - 9876543210</p>
        </div>
        <div className="contact-item">
          <h3 className="contact-title">
            SOCIAL LINKS <span className="arrow">→</span>
          </h3>
          <p className="contact-details">
            <a href="#">Facebook</a> | <a href="#">Twitter</a> |{" "}
            <a href="#">Instagram</a> | <a href="#">LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
