import { useContext, useEffect } from "react";
import CartContext from "../../context/CartContext";
import CheckoutModal from "../Checkout/CheckoutModal";

const CartDetails = () => {

    const { cartItems, cartSubTotal, cartShippingCost, cartTotal } = useContext(CartContext)

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
                <CheckoutModal />
            </div>
        </div>
    )
}

export default CartDetails;