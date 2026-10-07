
import React from "react";
import "./about.css";
import aboutImage from "../assets/about.jpg";

const About: React.FC = () => {
  return (
    <div id="about" className="about-container">
      <div className="about">
        <div className="about-text">
          <p className="section-label">THE STORY</p>
          <h1>ABOUT MILES</h1>
          <p>Miles Gonzalo Morales is a Brooklyn Visions Academy student who was bitten by a radioactive spider and gained spider-like abilities. Initially not wanting to be a hero, he was forced to take up the mantle of Spider-Man after the death of Peter Parker.</p>
          <p>With help from the Spider-Gang, Miles found the strength to save the city from the Super-Collider and became the new protector of Brooklyn.</p>
          <p>Later, Miles faced the Spot and the Spider-Society while fighting to protect his family and change the future he was told to accept.</p>
        </div>

        <div className="about-image">
          <img src={aboutImage} alt="Miles Morales" />
        </div>
      </div>
    </div>
  );
};

export default About;