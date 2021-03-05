import React from 'react'
import "../Navbar/Navbar.scss";

const Navbar = () => {
    return (
        <div>
            <div className="navBar">
                <h1>Reactive Employee Directory</h1>
                <div className="searchBar">
                    <form>
                        <input type="text" name="name" placeholder="" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
