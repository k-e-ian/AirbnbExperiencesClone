import React from "react";
import star_icon from "../assets/star.png";
import profilePhoto0 from "../assets/katie-zaferes.png"
import profilePhoto1 from "../assets/mountain-bike.png"
import profilePhoto2 from "../assets/wedding-photography.png"

const coverImgToProfilePhoto = {
    "katie-zaferes.png": profilePhoto0,
    "mountain-bike.png": profilePhoto1,
    "wedding-photography.png": profilePhoto2,
  };

export default function Card(props) {
    const selectedProfilePhoto = coverImgToProfilePhoto[props.data.coverImg]
    
    let badgeText
    
    if (props.data.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.data.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        
        <div className="card">
            {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
            <img 
                className="card--image" 
                src={selectedProfilePhoto} 
                alt="avatar"
            />
            <div className="card--stats">
                <img className="card--star" src={star_icon} alt="star-icon"></img>
                <span>{props.data.stats.rating}</span>
                <span className="gray">({props.data.stats.reviewCount}) &#8226; </span>
                <span className="gray">{props.data.country}</span>       
            </div>
            <p className="card--title">{props.data.title}</p>
            
            <p className="card--price"><span className="bold">From ${props.data.price}</span> /
            person</p> 
        </div>
    ) 
}
