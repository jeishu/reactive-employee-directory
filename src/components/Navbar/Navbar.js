import React from 'react'
import "../Navbar/Navbar.scss";


const Navbar = ({children}) => {
    return (
        <>
            <div className="navBar">
                <h1>Reactive User Directory</h1>
                {children}
            </div>
        </>
    );
};

export default Navbar;
