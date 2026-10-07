
import React from "react";
import spiderVerseTeam from "../assets/post.jpg";
import spiderVerseCollage from "../assets/post2.jpg";
import swinging from "../assets/swinging.jpg";
import milesAndGwen from "../assets/gandm.jpg";
import moviePoster from "../assets/movie.jpg";
import "./gallery.css";

const galleryImages = [
  [swinging, "Into the Spider-Verse"],
  [spiderVerseTeam, "The Spider-Verse team"],
  [spiderVerseCollage, "Across the Spider-Verse"],
  
  [milesAndGwen, "Miles and Gwen"],
  [moviePoster, "Across the Spider-Verse poster"],
];

const Gallery: React.FC = () => {
  return (
    <div className="gallery-container" id="gallery">
      <div className="gallery-content">
        <p className="section-label">VISUAL ARCHIVE</p>
        <h1>THE GALLERY</h1>
        <div className="gallery-grid">
          {galleryImages.map(([image, label]) => (
            <figure className="gallery-item" key={label}>
              <img src={image} alt={label} />
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;