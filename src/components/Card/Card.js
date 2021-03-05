import React from 'react'
import "../Card/Card.scss";

const Card = (props) => {
    return (
        <div className="Card">
            <figure className="img-container">
                <img alt={props.name} src={props.image} />
            </figure>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Occupation:</strong> {props.occupation}
                    </li>
                    <li>
                        <strong>Location:</strong> {props.location}
                    </li>
                </ul>
            </div>
            <span onClick={() => props.removeFriend(props.id)} className="remove">
                𝘅
            </span>
        </div>
    )
}

export default Card
