import React, {useState, useEffect} from 'react';
import API from "../../utils/API.js";
import Card from "../Card/Card.js";
import Navbar from "../Navbar/Navbar.js";
import Search from "../Search/Search.js"
import Menu from "../Menu/Menu.js"

const EmployeeData = () => {
    const [results, setResults] = useState([]);

    // Render 25 People
    useEffect(() => {
        API.getEmployee().then(res => {
            // Storing an array of 100 people
            setResults(res.data.results);
            console.log(results);
        })
    }, []);

    const handleFilter = () => {

    }

    return (
        <div>
            <Navbar>
                <Search/>
                <Menu/>
            </Navbar>
            {results.map ( employee => {
                return (<Card
                image={employee.picture.large}
                name={`${employee.name.first} ${employee.name.last}`}
                phone={employee.phone}
                email={employee.email}
                />)
            })}    
        </div>
    )
}

export default EmployeeData;
