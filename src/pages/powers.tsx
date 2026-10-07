
import React from "react";
import "./power.css";

const powers = [
  {
    number: "01",
    name: "Spider-Sense",
    description: "A heightened awareness that warns Miles when danger is close.",
    accent: "blue",
  },
  {
    number: "02",
    name: "Wall-Crawling",
    description: "Miles can cling to and climb walls with complete control.",
    accent: "blue",
  },
  {
    number: "03",
    name: "Super Agility",
    description: "Fast reflexes and flexible movement help him move through the city.",
    accent: "blue",
  },
  {
    number: "04",
    name: "Venom Blast",
    description: "Miles channels bio-electric energy into a powerful electric strike.",
    accent: "red",
  },
  {
    number: "05",
    name: "Camouflage",
    description: "He can blend into his surroundings and disappear from view.",
    accent: "red",
  },
  {
    number: "06",
    name: "Super Strength",
    description: "Enhanced strength lets Miles protect people far beyond human limits.",
    accent: "red",
  },
];

const Powers: React.FC = () => {
  return (
    <div className="powers-container" id="powers">
      <div className="powers-content">
        <p className="powers-eyebrow">MILES MORALES / ABILITIES</p>
        <h1>THE POWERS OF MILES MORALES</h1>
        <p className="powers-intro">
          Every power comes with a responsibility. Discover what makes Miles a
          different kind of Spider-Man.
        </p>

        <div className="powers-grid">
          {powers.map((power) => (
            <article className={`power-card ${power.accent}`} key={power.name}>
              <span className="power-number">{power.number}</span>
              <div>
                <h2>{power.name}</h2>
                <p>{power.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Powers;