import "../Menu/Menu.scss";
import React, { useContext } from "react";
import HomeImage from "./img/home.svg";
import NameImage from "./img/name.svg";
import PhoneImage from "./img/phone.svg";
import EmailImage from "./img/email.svg";
import EmployeeContext from "../../utils/EmployeeContext";

const Menu = () => {

    const data = useContext(EmployeeContext);

    return (
        <div className="menuContainer">
            {/* <div className="menuBox">
                <div className="box"></div>
                <img src={HomeImage} alt="home"/> 
            </div>
            
            <div className="border"></div> */}
            
            <div className="menuBox" onClick={data.handleSortName}>
                <div className="box"></div>
                <img src={NameImage} alt="name"/>
            </div>

            {/* <div className="border"></div>

            <div className="menuBox">
                <div className="box"></div>
                <img src={PhoneImage} alt="phone"/>
            </div> */}

            <div className="border"></div>

            <div className="menuBox" onClick={data.handleSortEmail}>
                <div className="box"></div>
                <img src={EmailImage} alt="email"/>
            </div>
            
        </div>
    )
};

export default Menu;
