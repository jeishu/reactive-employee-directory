import React from 'react'
import "../Card/Card.scss";

const Card = () => {
    return (
        <div className="Card">
            <figure>
                <img src="./img/demopic.jpg" alt="" />
            </figure>
            
            <div className="info">
                <p>Name: Jeremy </p>
                <p>Phone: 333-333-3333 </p>
                <p>Email: jz@jz.com </p>
                <p>DOB: 11/11/1111 </p>
            </div>
        </div>
    )
}

export default Card
