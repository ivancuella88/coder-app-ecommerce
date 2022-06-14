import { useContext, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate} from 'react-router-dom';
import { goToPage } from "../helpers/Helpers";

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { useState } from "react";
import CartContext from "../context/CartContext";

const CartDetails = () => {

    const { cartItems } = useContext(CartContext)
    const [cartSubTotal, setCartSubTotal] = useState(0)
    const [cartShippingCost, setCartShippingCost] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)
    
    const navigate = useNavigate(); 
    const goToPage = (pathName) => {
        navigate(pathName, { replace: true });
    }

    useEffect(()=>{
        let subtotal    = cartItems.reduce( (previousValue, currentValue) => previousValue + currentValue.subtotal, 0)
        setCartSubTotal(subtotal)
        setCartTotal(subtotal + cartShippingCost)
    }, [cartItems])

    return (
        <div className="cart-details">
            <div className="divTable" >
                <div className="divTableBody">
                    <div className="divTableRow cart-details__subtotal">
                        <div className="divTableCell">
                            <div className="font-semibold">Subtotal</div>
                        </div>
                        <div className="divTableCell text-right">
                            <div className="">$ {cartSubTotal}</div>
                        </div>
                    </div>
                    <div className="divTableRow cart-details__shipping">
                        <div className="divTableCell">
                            <div className="font-semibold">Envío</div>
                        </div>
                        <div className="divTableCell text-right">
                            <div className="">{ cartShippingCost ? cartShippingCost : 'Gratis' }</div>
                        </div>
                    </div>
                    <div className="divTableRow cart-details__total">
                        <div className="divTableCell">
                            <div className="font-semibold">Total</div>
                        </div>
                        <div className="divTableCell text-right">
                            <div className="">$ {cartTotal}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cart-widget__go-to-checkout'>
                <Button onClick={ () => { goToPage('finalizar-compra')}} className="default-button card-item__button card-item__cart-link">
                    <span>Finalizar compra</span> <DoubleArrowIcon />
                </Button>  
            </div>
        </div>
    )
}

export default CartDetails;