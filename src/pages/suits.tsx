
import React from "react";
import { useState } from "react";
import classicSuit from "../assets/classic.jpg";
import upgradedSuit from "../assets/upgraded.jpg";
import mm2099Suit from "../assets/mm2099.jpg";
import "./suits.css";

const suits = [
  {
    name: "Classic Suit",
    description: "Miles' first Spider-Man suit, built from his own style and courage.",
    image: classicSuit,
  },
  {
    name: "Upgraded Suit",
    description: "A refined suit that shows Miles growing into his role as Spider-Man.",
    image: upgradedSuit,
  },
  {
    name: "Spider-Man 2099 Suit",
    description: "A futuristic suit inspired by the Spider-Society and its alternate worlds.",
    image: mm2099Suit,
  },
];

const Suits: React.FC = () => {
  const [currentSuit, setCurrentSuit] = useState(0);
  const suit = suits[currentSuit];

  const showPreviousSuit = () => {
    setCurrentSuit((currentSuit - 1 + suits.length) % suits.length);
  };

  const showNextSuit = () => {
    setCurrentSuit((currentSuit + 1) % suits.length);
  };

  return (
    <div className="suits-container" id="suits">
      <div className="suits-content">
        <p className="suits-eyebrow">MILES MORALES / SUIT ARCHIVE</p>
        <h1>MILES' SUITS</h1>

        <div className="suit-showcase">
          <button
            className="suit-arrow"
            onClick={showPreviousSuit}
            aria-label="Show previous suit"
          >
            &#8592;
          </button>

          <div className="suit-image-frame">
            <img src={suit.image} alt={suit.name} className="suit-image" />
          </div>

          <button
            className="suit-arrow"
            onClick={showNextSuit}
            aria-label="Show next suit"
          >
            &#8594;
          </button>
        </div>

        <div className="suit-details">
          <p className="suit-counter">
            {String(currentSuit + 1).padStart(2, "0")} / {String(suits.length).padStart(2, "0")}
          </p>
          <h2>{suit.name}</h2>
          <p>{suit.description}</p>
        </div>

        <div className="suit-dots" aria-label="Select a suit">
          {suits.map((item, index) => (
            <button
              key={item.name}
              className={`suit-dot ${index === currentSuit ? "selected" : ""}`}
              onClick={() => setCurrentSuit(index)}
              aria-label={`Show ${item.name}`}
              aria-current={index === currentSuit ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suits;