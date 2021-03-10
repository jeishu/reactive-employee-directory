import React from 'react'
import "../Navbar/Navbar.scss";
import Search from "../Search/Search.js"

const Navbar = () => {
    return (
        <div>
            <div className="navBar">
                <h1>Reactive Employee Directory</h1>
                <Search/>
            </div>
        </div>
    );
};

export default Navbar;
