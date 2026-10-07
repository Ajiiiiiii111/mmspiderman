
import React from "react";
import "./contact.css";

const Contact: React.FC = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-content">
        <div className="contact-intro">
          <p className="section-label">CONNECT</p>
          <h1>JOIN THE<br />SPIDER-VERSE</h1>
          <p>Have a favorite suit, power, or Spider-Verse moment? Send a message and share it with us.</p>
        </div>
        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} placeholder="Write your message" />
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;