import React, {useState} from "react";
import { Button } from "@mui/material";
import './ItemCount.css'

const ItemCount = ({defaulQty, stock}) => {

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
            <div className="card-item__quantity">
                <div className="card-item__quantity-button">
                    <Button onClick={decrementQty} disabled={qty === defaulQty }>-</Button>
                    <span>{qty}</span>
                    <Button onClick={IncrementQty} disabled={qty === stock || !qty }>+</Button>
                </div>
                <div className="card-item__add-to-cart-button">
                    <Button onClick={AddToCart} disabled={!stock}>Add to cart</Button>
                    {  
                        (qty > 0 && addedToCart) && (   
                            <span className="card-item__added-to-cart-message">{AddedToCartMessage}</span>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default ItemCount;