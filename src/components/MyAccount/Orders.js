import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import db from '../../utils/firebaseConfig';
import { useState, useEffect } from 'react';

import OrdersList from './OrdersList';
import { CircularProgress } from '@mui/material';

const Orders = () => {

    const [orders, setOrders]       = useState([])
    const [loading, setLoading]     = useState(false)

    const getOrders = async () => {

        const q             =  query(collection(db, "orders"), orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);
        const queryDocs     = querySnapshot.docs.map( (doc) => {

            let data = doc.data()
            data.id = doc.id
            return data
        })

        return queryDocs
    }

    useEffect(() => {

        setLoading(true)
        setOrders([])

        getOrders().then((res) => {
            setOrders(res)
            setLoading(false)
        }).catch((err) => {
            console.warn('Error en la consulta', err);
        })

    }, [])
    return (
        <>
            <div className="">
                <h2 className="">Mis pedidos</h2>
                {
                    loading
                    ?
                    <div className='loading__container'>
                        <CircularProgress />
                    </div>
                    :
                        (orders.length)
                        ? <OrdersList orders={orders}/> 
                        : (
                            <div className='cart-widget__empty'>
                                <p>Todavia no realizaste ningun pedido</p>
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

export default Orders;