import React from "react";
import exp_img from "../assets/photo-grid.png"

function Hero() {
    return (
        <section className="exp-container">
                <img className="exp--img" src={exp_img} alt="experience_image" />
                <h1 className="exp--header">Online Experiences</h1>
                <p className="exp--text">Join unique interactive activites led by
                one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}

export default Hero