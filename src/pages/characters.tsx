
import React from "react";
import milesImage from "../assets/milespic.jpg";
import gwenImage from "../assets/gwen.jpg";
import peterImage from "../assets/pp.jpg";
import societyImage from "../assets/soc.jpg";
import "./characters.css";

const characters = [
  ["Miles Morales", "The new Spider-Man and protector of Brooklyn.", milesImage],
  ["Gwen Stacy", "A Spider-hero from another dimension and Miles' friend.", gwenImage],
  ["Peter B. Parker", "An experienced Spider-Man who helps Miles find his courage.", peterImage],
  ["The Spider-Society", "A multiversal team of Spider-heroes protecting their worlds.", societyImage],
];

const Characters: React.FC = () => {
  return (
    <div className="characters-container" id="characters">
      <div className="characters-content">
        <p className="section-label">THE SPIDER-VERSE</p>
        <h1>KEY CHARACTERS</h1>
        <div className="characters-grid">
          {characters.map(([name, description, image]) => (
            <article className="character-card" key={name}>
              <img src={image} alt={name} />
              <div>
                <h2>{name}</h2>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;