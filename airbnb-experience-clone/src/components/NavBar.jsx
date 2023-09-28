import React from "react";
import airbnb_logo from "../assets/airbnb-logo.png";


function NavBar() {
    return (
        <nav>
            <img className="nav--logo" src={airbnb_logo} alt="arbnb logo"/>
        </nav>
    )
}

export default NavBar