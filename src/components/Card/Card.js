import React from 'react'
import "../Card/Card.scss";

const Card = (props) => {
    return (
        <div className="Card">
            <figure className="img-container">
                <img alt={props.image} src={props.image} />
            </figure>
            <div className="info">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Phone:</strong> {props.phone}
                    </li>
                    <li>
                        <strong>Email:</strong> {props.email}
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Card;
