import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';

const CartWidget = () => {

    return(
        <>
            <div className="cart-widget__container">
                <Button
                    size="large"
                    edge="start"
                    color="inherit"
                    >
                    <ShoppingCartIcon />
                </Button>
            </div>
        </>
    )
}

export default CartWidget