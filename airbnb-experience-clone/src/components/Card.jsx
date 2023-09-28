import React from "react";
import star_icon from "../assets/star.png";

export default function Card(props) {
    return (
        
        <div className="card">
            {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img className="card--image" src={props.img} alt="avatar"/>
            <div className="card--stats">
                <img className="card--star" src={star_icon} alt="star-icon"></img>
                <span>{props.rating}</span>
                <span className="gray">{props.reviewCount} &#8226;</span>
                <span className="gray">{props.country}</span>       
            </div>
            <p className="card--title">{props.title}</p>
            
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p> 
        </div>
    ) 
}
