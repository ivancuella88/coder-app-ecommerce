import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './Card.css';

const Card = ({id, title, short_description, price, imageUrl}) => {
    return (
        <>
            <div id={ `card-product-${id}`} className="card-item">
                <div className="card-item__image">
                    <img src={imageUrl} alt={title} width="280" height="280"/>
                </div>
                <div className="card-item__info">
                    <h4>{ title }</h4>
                    <p>{ short_description }</p>
                </div>
                <span className="card-item__price"><span className="card-item__price-simbol">{ price ? '$' : '' }</span> { price ? price.toLocaleString("es-ES") : '' }</span>
                <ItemCount id={id} defaulQty={1} stock={30} />
            </div>
        </>
    )
}

export default Card;