import React from "react";
import "./Clients.css";

const ClientsSection = () => {
  return (
    <section className="clients-section container">
      <h2>OUR CLIENTS</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the.
      </p>
      <div className="clients-grid">
        <div className="client-card">SAMSUNG</div>
        <div className="client-card">SAMSUNG</div>
        <div className="client-card">SAMSUNG</div>
        <div className="client-card">SAMSUNG</div>
        <div className="client-card">SAMSUNG</div>
        <div className="client-card">SAMSUNG</div>
      </div>
    </section>
  );
};

export default ClientsSection;
