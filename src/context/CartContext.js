import { createContext, useEffect, useState } from "react";

const CartContext   = createContext()

const CartProvider  = ({children}) => {

    const [cartItems, setCartItems]         = useState([]);
    const [addedToCart, setAddedToCart]     = useState(false);
    const [alreadyInCart, setAlreadyInCart] = useState(false);
    const [cartSubtotal, setCartSubTotal]           = useState(0)
    const [cartShippingCost, setCartShippingCost]   = useState(0)
    const [cartTotal, setCartTotal]                 = useState(0)

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

    const updateCartTotals = () => {
        let subtotal    = cartItems.reduce( (previousValue, currentValue) => previousValue + currentValue.subtotal, 0)
        setCartSubTotal(subtotal)
        setCartTotal(subtotal + cartShippingCost)
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
        cartSubtotal,
        cartTotal,
        setAddedToCart,
        addCartItem,
        removeCartItem,
        emptyCart,
        isInCart
    }

    useEffect(()=>{
        updateCartTotals()
    }, [cartItems])

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }