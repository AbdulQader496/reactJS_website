import React from "react";
import imageOfReact from "../images/icons8-react-128.png"

export default function Navbar() {
    return (
        <nav>
           <img src={imageOfReact} className="nav-reactImg" alt="react-img" />
           <h3 className="nav-img_text">React Facts</h3>
           <h4 className="nav-title">React Lesson - Project 1</h4>
        </nav>
    )
}