import { useContext, useEffect, useState } from 'react';
import CartContext from "../../context/CartContext";
import TextField from '@mui/material/TextField';
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


import CircularProgress from '@mui/material/CircularProgress';

import { addDoc, collection } from 'firebase/firestore';
import db from '../../utils/firebaseConfig'

import { Validate } from '../../helpers/Helpers'

import './Checkout.css';

const CheckoutForm = () => {

    const navigate  = useNavigate();
    const { cartItems, cartTotal, emptyCart, setAddedToCart } = useContext(CartContext)

    const [order, setOrder]                 = useState({})
    const [buyer, setBuyer]                 = useState({})
    const [processing, setProcessing]       = useState(false)
    const [orderReceived, setOrderReceived] = useState({})
    const [paymentMethod, setPaymentMethod] = useState()

    const setInputValue = (e) => {
        setBuyer({...buyer, [e.target.name] :  e.target.value})
    }

    const radioPaymentMethod = (e) => {
        setPaymentMethod(e.target.value)
    }

    const submit =  (e) => {

        e.preventDefault()

        let valid = Validate(e)
        if(valid){

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
                payment_method   : paymentMethod,
                total   : cartTotal
            }
            
            setOrder(buyerOrder)
            saveOrder(buyerOrder)
        }
        
    }

    const saveOrder = async (buyerOrder) => {
        
        const firebaseOrders    = collection(db, 'orders')
        const orderDoc          = await addDoc(firebaseOrders, buyerOrder)
        setProcessing(false)
        setOrderReceived(orderDoc)
        localStorage.setItem('musicomm_session_buyer', JSON.stringify(buyer))

        if(orderDoc){
            emptyCart()
            setAddedToCart(false)
            navigate(`/gracias-por-tu-compra/pedido/${orderDoc.id}`)
        }
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
                        <Link to={`/mi-cuenta/pedidos/${orderReceived.id}`}>
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
                                <div className='checkout-form__group input-container'>
                                    <TextField size="small" onChange={setInputValue} data-rules="required" name="name" label="Nombre" variant="outlined" />
                                </div>
                                <div className='checkout-form__group input-container'>
                                    <TextField size="small" onChange={setInputValue} data-rules="required|email" name="email" label="Email" variant="outlined" />
                                </div>
                                <div className='checkout-form__group input-container'>
                                    <TextField size="small" onChange={setInputValue} data-rules="required" name="phone" label="Teléfono" variant="outlined" />
                                </div>
                                <div className='checkout-form__group input-container'>
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label">Medios de pago</FormLabel>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue=""
                                                name="payment_method"
                                                data-rules="checked"
                                                onChange={radioPaymentMethod}
                                                >
                                                <FormControlLabel value="transferencia-bancaria" control={<Radio className="checkout-radio-input" />} label="Transferencia bancaria" />
                                                <FormControlLabel value="mercado-pago" control={<Radio className="checkout-radio-input" />} label="Mercado pago" />
                                                <FormControlLabel value="tarjeta-credito" control={<Radio className="checkout-radio-input" />} label="Tarjeta de crédito" />
                                            </RadioGroup>
                                        </FormControl>
                                </div>
                                <div className="text-center">
                                    <Button type="submit" className="mx-auto default-button default-button__black">Realizar compra</Button>
                                </div>
                            </form>
                        </>
                    )
                    : (
                        <div className='loading__container'>
                            <div>Estamos procesando tu pedido...</div>
                            <CircularProgress />
                        </div>
                    )
                )
            }
        </>
    )
}

export default CheckoutForm;