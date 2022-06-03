import React, {useState} from "react";
import { Button } from "@mui/material";
import './ItemCount.css'
import { Link, useParams } from "react-router-dom";

const ItemCount = ({id, defaulQty, stock, isSingleProduct}) => {

    const [addedToCart, setAddedToCart] = useState(false)
    const [AddedToCartMessage, setAddedToCartMessage] = useState('')
    const [qty, setQty] = useState(defaulQty)
    
    const IncrementQty = () => {
        if(stock > qty){
            setQty(qty + 1)
        }
    }
    
    const decrementQty = () => {
        if(qty > 1){
            setQty(qty - 1)
        }
    }

    const AddToCart = () => {

        if(qty && stock){
            setAddedToCart(true)
            ShowAddedToCartMessage()
        }
        console.log(qty)
    }

    const ShowAddedToCartMessage = () => {
        let message = 'El producto fue agregado al carrito';
        setAddedToCartMessage(message)

        setTimeout(
            () => {
                setAddedToCartMessage('')
            }, 3000
        )
    }

    return (
        <>  
            {
                !addedToCart
                ? (
                    <>
                        <div className="card-item__quantity">
                            <div className="card-item__quantity-button">
                                <Button onClick={decrementQty} disabled={qty === defaulQty }>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="#2c2c2c" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                    </svg>
                                </Button>
                                <span className="card-item__quantity-button-value">{qty}</span>
                                <Button onClick={IncrementQty} disabled={qty === stock || !qty }>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} className="" fill="#2c2c2c" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                        <div className="card-item__buttons-container">
                            <Button className="card-item__button card-item__add-to-cart-button" onClick={AddToCart} disabled={!stock}>Agregar al carrito</Button>
                            {
                                !isSingleProduct && 
                                <Link to={`/producto/${id}`}>
                                    <Button className="default-button card-item__button card-item__view-product-button">Ver</Button>
                                </Link>
                            }
                        </div>
                    </>
                )
                : 
                    <div className="flex">
                        <Link to={'/carrito'}>
                            <Button className="default-button card-item__button card-item__cart-link">Finalizar mi compra</Button>
                        </Link>    
                        <span className="card-item__added-to-cart-message">{AddedToCartMessage}</span>
                    </div>
            }
        </>
    )
}

export default ItemCount;