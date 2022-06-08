import { createContext, useState } from "react";

const CartContext = createContext()
const CartProvider = ({children}) => {

    const [cartItems, setCartItems]     = useState([]);
    const [addedToCart, setAddedToCart] = useState(false);

    const addCartItems = (product) => {
        console.log(cartItems)
        setAddedToCart(true)
        setCartItems(cartItems => [...cartItems, product])
    }

    const data = {
        addedToCart,
        setAddedToCart,
        cartItems,
        addCartItems
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }