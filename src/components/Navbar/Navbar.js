import React from 'react'
import "../Navbar/Navbar.scss";


const Navbar = ({children}) => {
    return (
        <div>
            <div className="navBar">
                <h1>Reactive Employee Directory</h1>
                {children}
            </div>
        </div>
    );
};

export default Navbar;
