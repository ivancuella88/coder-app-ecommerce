import { useContext, useEffect, useState } from 'react';
import CartContext from "../../context/CartContext";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

import CircularProgress from '@mui/material/CircularProgress';

import { addDoc, collection } from 'firebase/firestore';
import db from '../../utils/firebaseConfig'

import './Checkout.css';

const CheckoutForm = () => {

    const { cartItems, cartTotal } = useContext(CartContext)

    const [order, setOrder]                 = useState({})
    const [buyer, setBuyer]                 = useState({})
    const [processing, setProcessing]       = useState(false)
    const [orderReceived, setOrderReceived] = useState({})

    const setInputValue = (e) => {
        setBuyer({...buyer, [e.target.name] :  e.target.value})
    }

    const submit =  (e) => {

        e.preventDefault()

        setProcessing(true)

        const buyerOrder = {
            buyer   : buyer ,
            items   : cartItems.map((item) => {
                return {
                    id : item.product.id,
                    title : item.product.title,
                    price : item.product.price,
                    qty : item.qty
                }
            }),
            date    : new Date().toLocaleString('es-ES'),
            total   : cartTotal
        }

        setOrder(buyerOrder)
        saveOrder(buyerOrder)
    }

    const saveOrder = async (buyerOrder) => {
        
        const firebaseOrders    = collection(db, 'orders')
        const orderDoc     = await addDoc(firebaseOrders, buyerOrder)
        setProcessing(false)
        setOrderReceived(orderDoc)
        console.log(orderReceived.id)
    }
    return (
        <>
            {
                Object.keys(orderReceived).length
                ? 
                (
                    <div className='order-complete text-center'>
                        <h4>¡Gracias por tu compra!</h4>
                        <p>La orden ha sido generada exitosamente.</p>
                        <div className='order-complete__order-number'>Order Nº: {orderReceived.id}</div>
                        <br />
                        <Link to={`/mi-cuenta/${orderReceived.id}`}>
                            <Button className="default-button default-button__black">Ver en mis pedidos</Button>
                        </Link>
                    </div>
                )
                : 
                (
                    !processing
                    ? 
                    (
                        <>
                            <h3 className='text-center'>Finalizar compra</h3>
                            <form className='checkout-form' onSubmit={submit}>
                                <div className='checkout-form__group'>
                                    <TextField size="small" onChange={setInputValue} name="name" label="Nombre" variant="outlined" />
                                </div>
                                <div className='checkout-form__group'>
                                    <TextField size="small" onChange={setInputValue} name="email" label="Email" variant="outlined" />
                                </div>
                                <div className='checkout-form__group'>
                                    <TextField size="small" onChange={setInputValue} name="phone" label="Teléfono" variant="outlined" />
                                </div>
                                <div className="text-center">
                                    <Button type="submit" className="mx-auto default-button default-button__black">Finalizar</Button>
                                </div>
                            </form>
                        </>
                    )
                    : (
                        <div className='loading__container'>
                            <CircularProgress />
                        </div>
                    )
                )
            }
        </>
    )
}

export default CheckoutForm;