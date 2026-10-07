// home.tsx
import "./home.css";
import homeImage from "../assets/home.jpg";

export default function Home() {
    return (
        <div className="home-container" id="home">
            <div className="home">
                <div className="home-text">
                    <p className="home-eyebrow">SPIDER-MAN / MILES MORALES</p>
                    <h1>MILES <br />MORALES</h1>
                    <h3>Great Power Comes With Great Responsibility</h3>
                </div>
                <div className="home-image">
                    <img src={homeImage} alt="Miles Morales" className="img-home" />
                </div>
            </div>
        </div>
    );
}