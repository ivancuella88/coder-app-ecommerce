import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './Card.css';

const Card = ({id, title, description, price, imageUrl}) => {
    return (
        <>
            <div className="card-item">
                <div className="card-item__image">
                    <img src={imageUrl} alt={title} width="280" height="280"/>
                </div>
                <div className="card-item__info">
                    <h4>{ title }</h4>
                    <p>{ description }</p>
                </div>
                <span className="card-item__price"><span className="card-item__price-simbol">{ price ? '$' : '' }</span> { price ? price.toLocaleString("es-ES") : '' }</span>
                <ItemCount defaulQty={1} stock={30} />
            </div>
        </>
    )
}

export default Card;