import React, {useState, useEffect} from 'react';
import API from "../../utils/API.js";
// import Main from "../Main/Main.js";
import Card from "../Card/Card.js";

const EmployeeData = () => {
    const [image, setImage] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {
        API.getEmployee().then(res => {
            setImage(res.data.results[0].picture.large);
            setName(`${res.data.results[0].name.first} ${res.data.results[0].name.last}`);
            setPhone(res.data.results[0].phone);
            setEmail(res.data.results[0].email);
        })
    }, []);

    return (
        <div>
            <Card
                image={image}
                name={name}
                phone={phone}
                email={email}
                />
        </div>
    )
}

export default EmployeeData;
