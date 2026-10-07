
import React from "react";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/Footer";
import "./App.css";

import Home from "./pages/home";
import About from "./pages/about";
import Powers from "./pages/powers";
import Suits from "./pages/suits";
import Timeline from "./pages/timeline";
import Gallery from "./pages/gallery";
import Characters from "./pages/characters";
import Contact from "./pages/contact";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="powers"><Powers /></section>
        <section id="suits"><Suits /></section>
        <section id="timeline"><Timeline /></section>
        <section id="gallery"><Gallery /></section>
        <section id="characters"><Characters /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  );
};

export default App;