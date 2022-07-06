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
            </div>
        </>
    )
}

export default AboutUs;