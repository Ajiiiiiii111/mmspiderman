// src/components/layout/Navbar.tsx
import React, { useState } from "react";
import "./navbar.css";

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "Home", path: "/#home" },
  { label: "About", path: "/#about" },
  { label: "Powers", path: "#powers" },
  { label: "Suits", path: "#suits" },
  { label: "Timeline", path: "#timeline" },
  { label: "Gallery", path: "#gallery" },
  { label: "Characters", path: "#characters" },
  { label: "Contact", path: "#contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => setIsOpen((prev) => !prev);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          Miles Morales
        </a>

        {/* Hamburger for mobile */}
        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;