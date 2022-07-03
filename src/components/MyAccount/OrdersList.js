
import { Link } from "react-router-dom"
import {Button} from "@mui/material"

const ordersList = ( { orders }) => {

    return (
        <>  
            <div className="flex justify-between items-start table-container">  
                <div className="divTable order-table_container-table" >
                    <div className="divTableBody">
                        <div className="divTableRow divTableHeading">
                            <div className="divTableCell">
                                ID
                            </div>
                            <div className="divTableCell">
                                Fecha
                            </div>
                            <div className="divTableCell text-center">
                                Total
                            </div>
                            <div className="divTableCell">
                                
                            </div>
                        </div>
                        {
                            orders.map((order, i) => {
                                
                                const {id, date, total} = order
                                
                                return (
                                    
                                    <div key={i} className="divTableRow">
                                        <div className="divTableCell">
                                            <div className="order-table-item">${id}</div>
                                        </div>
                                        <div className="divTableCell">
                                            <div className="order-table-item">{date}</div>
                                        </div>
                                        <div className="divTableCell  text-center">
                                            <div className="order-table-item__price">${total}</div>
                                        </div>
                                        <div className="divTableCell text-right">
                                            <Link to={`/mi-cuenta/pedidos/${id}`}>
                                                <Button className="color-primary">
                                                    Ver pedido
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ordersList;
