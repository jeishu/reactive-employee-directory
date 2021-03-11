import React, {useState, useEffect} from 'react';
import API from "../../utils/API.js";
// import Main from "../Main/Main.js";
import Card from "../Card/Card.js";

const EmployeeData = () => {
    // const [image, setImage] = useState();
    // const [name, setName] = useState();
    // const [phone, setPhone] = useState();
    // const [email, setEmail] = useState();

    const [results, setResults] = useState([]);

    // Render 25 People
    useEffect(() => {
        API.getEmployee().then(res => {
            // setImage(res.data.results[0].picture.large);
            // setName(`${res.data.results[0].name.first} ${res.data.results[0].name.last}`);
            // setPhone(res.data.results[0].phone);
            // setEmail(res.data.results[0].email);

            // Storing an array of 100 people
            setResults(res.data.results);
            console.log(results);
        })
    }, []);

    return (
        <div>
            {/* <Card
                image={image}
                name={name}
                phone={phone}
                email={email}
                /> */}
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
