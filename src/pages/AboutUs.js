import { Link } from "react-router-dom";
import NotAvailable from "../components/NotAvailable/NotAvailable";

const AboutUs = () => {
    return (
        <>
            <div className="main-content container">
                <h1 className="heading">Nosotros</h1>
                
                <div className="">
                    <div className="flex justify-between items-center bg-white">
                        <div className="col-6/12">
                            <img src='/images/about-us.jpg' className="w-full" alt="nosotros" />
                        </div>
                        <div className="col-6/12 p-4">
                            <div className="p-4 text-center">
                                <p>Somos un empresa dedicada a la venta de instrumentos musicales ubicada en CABA.
                                    <br></br>Hace más de 20 años que acompañamos a los musicos con productos de altisima calidad.</p>
                                <p>Contamos con profesionales siempre dispuestos a dar el mejor servicio.</p>
                                <p>Encontrá todo lo que buscas y más en <Link to="/tienda">Musiccom</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;