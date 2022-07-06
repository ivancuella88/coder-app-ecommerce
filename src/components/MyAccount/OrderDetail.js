import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Link, useParams } from "react-router-dom";
import NotProductFound from "../NotFound/NotProductFound";

import { doc, getDoc } from "firebase/firestore";
import db from '../../utils/firebaseConfig';
import { Button } from "@mui/material";

const OrderDetail = () =>{

    const { orderId }           = useParams();
    const [order, setOrder]     = useState({})
    const [loading, setLoading] = useState(false)

    const getOrder = async () => {
        const q         = doc(db, "orders", orderId);
        const queryDoc  = await getDoc(q);

        let orderDoc  = queryDoc.data()
        orderDoc.id   = queryDoc.id
        return orderDoc
    }
    
    useEffect(()=> {
        setLoading(true)
        getOrder()
        .then((res) => {
            setOrder(res)
            setLoading(false)
            console.log(order.items)

        })
        .catch((err) => {
            console.log('No se encontró el producto')
        })
    }, [orderId]) // eslint-disable-line react-hooks/exhaustive-deps
    
    return (
        <>  
            {
                loading
                ?
                <div className='loading__container'>
                    <CircularProgress />
                </div>
                :
                    (order)
                    ?
                    <div className="main-content container">
                        <h1 className="heading">Mi cuenta</h1>
                        <div className="flex mb-4">
                            <Link to={`/mi-cuenta/`}>
                                <Button className="color-primary default-button">
                                    Volver
                                </Button>
                            </Link>
                        </div>
                        <OrderDetail />
                        <div id={ `order-${order.id}` } className="single-order-container flex">
                            <div className="col-4/12 single-order-container__detail">
                                <div className="mb-2">
                                    <strong>Pedido Nro.:</strong> {order.id}
                                </div>
                                <div className="mb-2">
                                    <strong>Fecha:</strong> {order.date}
                                </div>
                                <div className="">
                                    <strong>Total:</strong> ${order.total}
                                </div>
                            </div>
                            <div className="col-8/12 single-order-container__items">
                                {
                                    order.items 
                                    ?
                                    (
                                        <div className="flex justify-between items-start table-container">  
                                            <div className="divTable order-table_container-table" >
                                                <div className="divTableBody">
                                                    <div className="divTableRow divTableHeading">
                                                        <div className="divTableCell">
                                                            Producto
                                                        </div>
                                                        <div className="divTableCell">
                                                            Precio
                                                        </div>
                                                        <div className="divTableCell">
                                                            Cantidad
                                                        </div>
                                                        <div className="divTableCell text-center">
                                                            Subtotal
                                                        </div>
                                                        <div className="divTableCell">
                                                            
                                                        </div>
                                                    </div>
                                                    {
                                                        order.items.map((item, i) => {
                                                            
                                                            const {id, price, qty, title} = item
                                                            return (
                                                                
                                                                <div key={i} className="divTableRow">
                                                                    <div className="divTableCell">
                                                                        <div className="order-table-item">{title}</div>
                                                                    </div>
                                                                    <div className="divTableCell">
                                                                        <div className="order-table-item">{price}</div>
                                                                    </div>
                                                                    <div className="divTableCell text-center">
                                                                        <div className="order-table-item">{qty}</div>
                                                                    </div>
                                                                    <div className="divTableCell  text-center">
                                                                        <div className="order-table-item__price">${price * qty}</div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    : ''
                                }
                            </div>
                        </div>
                    </div>
                    : 
                    <NotProductFound />
            }
        </>
    )
}

export default OrderDetail;