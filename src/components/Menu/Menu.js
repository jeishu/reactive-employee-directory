import "../Menu/Menu.scss";
import React from "react";
import HomeImage from "./img/home.svg";
import NameImage from "./img/name.svg";
import PhoneImage from "./img/phone.svg";
import EmailImage from "./img/email.svg";

const Menu = () => {

    return (
        <div className="menuContainer">
            <div className="menuBox">
                <div className="box"></div>
                <img src={HomeImage} alt="home"/> 
            </div>
            
            <div className="border"></div>
            
            <div className="menuBox">
                <div className="box"></div>
                <img src={NameImage} alt="name"/>
            </div>

            <div className="border"></div>

            <div className="menuBox">
                <div className="box"></div>
                <img src={PhoneImage} alt="phone"/>
            </div>

            <div className="border"></div>

            <div className="menuBox">
                <div className="box"></div>
                <img src={EmailImage} alt="email"/>
            </div>
            
        </div>
    )
};

export default Menu;
