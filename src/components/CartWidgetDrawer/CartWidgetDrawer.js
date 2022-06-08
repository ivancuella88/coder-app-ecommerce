import { useState, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import CartContext from '../../context/CartContext';


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
        setState(addedToCart);
    }, [addedToCart])

    const list = () => (
        <Box
            sx={{ width: { sm: '25vw' }, flexShrink: { sm: 0 } }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Divider />
            <List>
                {
                    cartItems.map(( {product, qty }, i) => (
                            <ListItem key={i} disablePadding>
                                <div className='cart-widget-item flex'>
                                    <div className="cart-widget-item__title">{product.title}</div>
                                    <div className="cart-widget-item__qty">x {qty}</div>
                                    <div className="cart-widget-item__price">${product.price}</div>
                                </div>
                            </ListItem>
                        )
                    )
                }
            </List>
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