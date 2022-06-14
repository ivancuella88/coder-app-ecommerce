import { useContext, useEffect } from "react"
import { Link, useNavigate} from 'react-router-dom';
import CartContext from '../context/CartContext';

import CartDetails from "../components/CartDetails";

import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';

const Cart = () => {

    const navigate = useNavigate();
    const { cartItems, removeCartItem } = useContext(CartContext)

    const goToPage = (pathName) => {
        navigate(pathName, { replace: true });
    }

    return (
        <>
            <div className="main-content container">
                <h1 className="heading">Carrito</h1>
                {
                    cartItems.length
                    ?
                    
                    <div className="flex justify-between items-start cart-table-container">
                        <div className="col-9/12">
                            <div className="divTable cart-table_container-table" >
                                <div className="divTableBody">
                                    <div className="divTableRow divTableHeading">
                                        <div className="divTableCell">
                                            &nbsp;
                                        </div>
                                        <div className="divTableCell">
                                            Producto
                                        </div>
                                        <div className="divTableCell text-center">
                                            Precio
                                        </div>
                                        <div className="divTableCell text-center">
                                            Cantidad
                                        </div>
                                        <div className="divTableCell text-center">
                                            Subtotal
                                        </div>
                                        <div className="divTableCell">
                                            
                                        </div>
                                    </div>
                                    {
                                        cartItems.length
                                        ?   (
                                                <>
                                                    {
                                                        cartItems.map(( {product, qty }, i) => {
                                                            
                                                                const {id, title, price, imageUrl} = product
                                                                return (
                                                                    
                                                                    <div key={i} className="divTableRow">
                                                                        <div className="divTableCell text-center">
                                                                            <div className='cart-widget-item__image'>
                                                                                <img className="object-contain" src={ `${imageUrl}`} width={80} height={80} alt={title}/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="divTableCell">
                                                                            <Link to={`/producto/${product.id}`}>
                                                                                    <div className="cart-widget-item__title">{title}</div>
                                                                            </Link>
                                                                        </div>
                                                                        <div className="divTableCell  text-center">
                                                                            <div className="cart-widget-item__price">${price}</div>
                                                                        </div>
                                                                        <div className="divTableCell text-center">
                                                                            <div className="cart-widget-item__qty">x {qty}</div>
                                                                        </div>
                                                                        <div className="divTableCell  text-center">
                                                                            <div className="cart-widget-item__price">${price * qty}</div>
                                                                        </div>
                                                                        <div className="divTableCell text-right">
                                                                            <Button className="color-primary" onClick={ () => { removeCartItem(id) }}>
                                                                                <ClearIcon />
                                                                            </Button>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }
                                                        )
                                                    }
                                                </>
                                            )
                                        : (
                                            ''
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-3/12">
                            <div className="cart-details__container">
                                <h3 className="text-left heading">Detalles de tu compra</h3>
                                <CartDetails />
                            </div>
                        </div>
                    </div>
                    : (
                        <div className='cart-widget__empty'>
                            <p>No hay productos en el carrito</p>
                            <Button>
                                <Link to={'/tienda'}>Ir a la tienda</Link>
                            </Button>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Cart; 