import { createContext, useState } from "react";

const CartContext = createContext()
const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState();

    const addCartItems = (product) => {
        console.log(product)
    }

    return (
        <CartContext.Provider value={cartItems}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }