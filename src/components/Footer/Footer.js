import { Link } from "react-router-dom";
const Footer = () => {

    return (
        <>
            <div className="footer__container">
                <div className="footer__container-menu">
                    <div>
                        <Link to="/">Inicio</Link>
                    </div>
                    <div>
                        <Link to="/tienda">Tienda</Link>
                    </div>
                    <div>
                        <Link to="/nosotros">Nosotros</Link>
                    </div>
                    <div>
                        <Link to="/contacto">Contacto</Link>
                    </div>
                </div>
                <div className="footer__container-text">
                    <p>Desarrollado por <a href="mailto:ivancuella88@hotmail.com" title="Enviar mail a Iván Cuella">Iván Cuella</a></p>
                </div>
            </div>
        </>
    )
}

export default Footer;