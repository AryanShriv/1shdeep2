import React from 'react'
import "./CTA.css"

const CTA = () => {
  return (
    <div className="CTA-section container">
      <div className="about-columns">
        <div className="about-column">
          <h3 className="column-heading">
            OUR PROJECTS <span className="arrow">→</span>
          </h3>
          <p className="column-description">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
        <div className="about-column">
          <h3 className="column-heading">
            CONTACT US <span className="arrow">→</span>
          </h3>
          <p className="column-description">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
        <div className="about-column">
          <h3 className="column-heading">
            BLOGS <span className="arrow">→</span>
          </h3>
          <p className="column-description">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CTA