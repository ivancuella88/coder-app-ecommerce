import { useState, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import ClearIcon from '@mui/icons-material/Clear';


import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidgetDrawer = () => {
    
    const { cartItems, addedToCart, setAddedToCart }    = useContext(CartContext)
    const [state, setState]                             = useState(false);

    const toggleDrawer = (state) => (event) => {
        
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        if(!state){
            setAddedToCart(false)
        }

        setState(state);

    };

    useEffect( ()=> {
        console.log(cartItems)
        setState(addedToCart);
    }, [addedToCart])

    const list = () => (
        <Box
            sx={{ width: { sm: '25vw' }, flexShrink: { sm: 0 } }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <div class="">Mi carrito</div>
            <Divider />
            {
                cartItems.length
                ?   (
                        <List>
                            {
                                cartItems.map(( {product, qty }, i) => (
                                        <ListItem key={i} disablePadding>
                                            <div className='cart-widget-item w-full flex justify-between'>
                                                <div className='cart-widget-item__image'>
                                                    <img src={ `${product.imageUrl}`} width={80} height={80} />
                                                </div>
                                                <div className='cart-widget-item__info'>
                                                    <Link to={`/producto/${product.id}`}>
                                                        <div className="cart-widget-item__title">{product.title}</div>
                                                    </Link>
                                                    <div className="cart-widget-item__qty">Cantidad: {qty}</div>
                                                    <div className="cart-widget-item__price">${product.price}</div>
                                                </div>
                                                <ClearIcon />
                                            </div>
                                        </ListItem>
                                    )
                                )
                            }
                        </List>
                    )
                : (
                    <p>No hay productos en el carrito</p>
                )
            }
            <Divider />
            
        </Box>
    );

    return (
        <>
            <Button onClick={toggleDrawer(true)}>
                <ShoppingCartIcon />
            </Button>
            <Drawer
                    anchor={'right'}
                    open={state}
                    onClose={toggleDrawer(false)}
                >
                { list() }
            </Drawer>
        </>
    );
}

export default CartWidgetDrawer;