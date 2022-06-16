import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './Card.css';

const Card = ({ product }) => {

    const { id, title, short_description, price, imageUrl } = product

    return (
        <>
            <div id={ `card-product-${id}`} className="card-item">
                <Link to={`/producto/${id}`}>
                    <div className="card-item__image">
                        <img src={`/images/${imageUrl}`} alt={title} width="280" height="280"/>
                    </div>
                </Link>
                <div className="card-item__info">
                    <h4>{ title }</h4>
                    <p>{ short_description }</p>
                </div>
                <span className="card-item__price"><span className="card-item__price-simbol">{ price ? '$' : '' }</span> { price ? price.toLocaleString("es-ES") : '' }</span>
                <ItemCount product={product} />
            </div>
        </>
    )
}

export default Card;