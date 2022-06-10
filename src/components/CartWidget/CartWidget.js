
import CartWidgetDrawer from '../CartWidgetDrawer/CartWidgetDrawer';
import CartSnackbar from '../CartSnackbar/CartSnackbar';
import './CartWidget.css';

const CartWidget = () => {

    return(
        <>
            <CartSnackbar />
            <div className="cart-widget__container">
                <CartWidgetDrawer />
            </div>
        </>
    )
}

export default CartWidget