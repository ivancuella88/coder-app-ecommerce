import { Link } from "react-router-dom";
const NotAvailable = () => {

    return (
        <>
            <div className="not-available__container">
                <div className="not-available__container-content">
                    <p>Contenido no disponible</p>
                    <div>
                        <Link to="/">ir al Inicio</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotAvailable;