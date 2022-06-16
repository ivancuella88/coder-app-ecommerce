import { createContext, useState } from "react";

const CartContext   = createContext()

const CartProvider  = ({children}) => {

    const [cartItems, setCartItems]         = useState([]);
    const [addedToCart, setAddedToCart]     = useState(false);
    const [alreadyInCart, setAlreadyInCart] = useState(false);

    const addCartItem = (product) => {
        setAddedToCart(true)
        setCartItems(cartItems => [...cartItems, product ])
    }

    const removeCartItem = (id) => {
        let itemsInCart = [...cartItems]
        itemsInCart = itemsInCart.filter( (cartItem) => cartItem.product.id != id)
        setCartItems(itemsInCart)
    }

    const emptyCart = () => {
        setCartItems([])
    }

    const isInCart = (id) => {
        let isInCart =  cartItems.find( (cartItem) => cartItem.product.id == id)
        if(isInCart){
            setAlreadyInCart(true)
            setTimeout(()=>{
                setAlreadyInCart(false)
            }, 2000)
        }
        return isInCart
    }

    const data = {
        addedToCart,
        alreadyInCart,
        cartItems,
        setAddedToCart,
        addCartItem,
        removeCartItem,
        emptyCart,
        isInCart
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }