import React from "react";
import katie_png from "../assets/katie-zaferes.png";
import star_icon from "../assets/star.png";

function Card() {
    return (
        <div className="card">
            <img className="card--img" src={katie_png} alt="katie-zafares-png" />
            <div className="card--stats">
                <img className="card--star" src={star_icon} alt="star-icon"></img>
                <span>5.0</span>
                <span className="gray">(6) &#8226;</span>
                <span className="gray">USA</span>       
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $156</span> / person</p> 
        </div>
    )
}

export default Card
