import React from "react";
import "./Hero.css";
import BG from "../../Assets/Hero/BG.mp4"

const HeroSection = () => {
  return (
    <div className="hero-section">
      <video
        className="hero-video"
        src={BG}
        autoPlay
        loop
        muted
        playsInline
        poster="path-to-your-fallback-image.jpg"
      ></video>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Your Hero Title</h1>
        <p>Your subtitle or description goes here.</p>
      </div>
    </div>
  );
};

export default HeroSection;
