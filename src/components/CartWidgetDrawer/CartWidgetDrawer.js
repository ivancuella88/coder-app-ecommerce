import { useState, useContext, useEffect } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import CartContext from '../../context/CartContext';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ClearIcon from '@mui/icons-material/Clear';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

const CartWidgetDrawer = () => {

    const navigate = useNavigate();
    const { cartItems, addedToCart, setAddedToCart, removeCartItem, emptyCart }    = useContext(CartContext)
    const [drawerState, setDrawerState] = useState(false);

    const toggleDrawer = (drawerState) => (event) => {

        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        
        if(!drawerState){
            setAddedToCart(false)
        }
        
        setDrawerState(drawerState);
    };

    const goToShop = () => {
        setDrawerState(false);
        navigate("/tienda", { replace: true });
    }

    useEffect( ()=> {
        setDrawerState(addedToCart);
    }, [addedToCart])

    const list = () => (
        <Box
            sx={{ width: { sm: '25vw' }, flexShrink: { sm: 0 } }}
            role="presentation"
            onKeyDown={toggleDrawer(false)}
        >
            <div className='flex justify-start'>
                <Button className='color-primary' onClick={toggleDrawer(false)}>
                    <CloseIcon />
                </Button>
            </div>
            <div className="cart-widget-heading">
                <h2>Mi carrito</h2>
            </div>
            {
                cartItems.length
                ?   (
                        <>
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
                                                    <Button className="color-primary" onClick={ () => { removeCartItem(product.id) }}>
                                                        <ClearIcon />
                                                    </Button>
                                                </div>
                                            </ListItem>
                                        )
                                    )
                                }
                            </List>
                            <Divider />
                            <div className='cart-widget__empty-cart-button'>
                                <Button onClick={emptyCart}>Limpiar carrito <DeleteIcon /></Button>
                            </div>
                        </>
                    )
                : (
                    <div className='cart-widget__empty'>
                        <p>No hay productos en el carrito</p>
                        <Button onClick={goToShop}>Ir a la tienda</Button>
                    </div>
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
                    open={drawerState}
                    onClose={toggleDrawer(false)}
                >
                { list() }
            </Drawer>
        </>
    );
}

export default CartWidgetDrawer;