import React from 'react'
import "../Main/Main.scss";
import EmployeeData from "../EmployeeData/EmployeeData.js";

const Main = () => {
    return (
        <div className="Main">
            {/* Contains the Navbar and Cards */}
            <EmployeeData/>
        </div>
    );
};

export default Main;
