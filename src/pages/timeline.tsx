
import React from "react";
import "./timeline.css";

const events = [
  ["01", "The Spider Bite", "Miles is bitten by a radioactive spider and begins to discover his new abilities."],
  ["02", "A New Spider-Man", "After Peter Parker's death, Miles accepts the responsibility of protecting Brooklyn."],
  ["03", "The Super-Collider", "Miles joins the Spider-Gang and helps stop Kingpin's dangerous collider."],
  ["04", "The Spider-Society", "Miles enters a multiversal conflict and challenges the rules of the Spider-Society."],
];

const Timeline: React.FC = () => {
  return (
    <div className="timeline-container" id="timeline">
      <div className="timeline-content">
        <p className="section-label">THE JOURNEY</p>
        <h1>MILES' TIMELINE</h1>
        <div className="timeline-list">
          {events.map(([number, title, description]) => (
            <article className="timeline-event" key={number}>
              <span className="timeline-number">{number}</span>
              <div>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;