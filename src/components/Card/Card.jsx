import React from "react";
import { Link } from "react-router-dom"

const Card = (props) => {
    return (
        <div>

            <h1>{props.id}</h1>
            <Link to={`/detail/${props.id}`}>
            <h1>{props.name}</h1>
            </Link>
            <h1>{props.email}</h1>
        </div>
    )
}

export default Card;