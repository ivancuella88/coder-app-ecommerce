import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import OrderDetail from "../components/Order/OrderDetail";

const AboutUs = () => {
    return (
        <>
            <div className="main-content container">
                <h1 className="heading">¡Gracias por tu pedido!</h1>
                
                <div className="py-5">
                    <p className="text-center">Tu pedido está siendo procesado. Nos estaremos comunicando con vos a la brevedad.</p>
                    <br></br>
                    <h3 className="text-center">El detalle de tu pedido:</h3>
                </div>
                <OrderDetail />
                <div classs="mt-4 flex justify-center">
                    <Link to="/tienda" className="text-center">
                        <Button className="button default-button default-button__black mx-auto">Seguir comprando</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default AboutUs;