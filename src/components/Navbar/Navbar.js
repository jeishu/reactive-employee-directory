import React from 'react'
import "../Navbar/Navbar.scss";
import Search from "../Search/Search.js"
import Menu from "../Menu/Menu.js"

const Navbar = () => {
    return (
        <div>
            <div className="navBar">
                <h1>Reactive Employee Directory</h1>
                <Search/>
                <Menu/>
            </div>
        </div>
    );
};

export default Navbar;
