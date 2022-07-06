
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import OrderDetail from "../components/Order/OrderDetail";

const SingleOrder = () => {
    return (
        <>
            <div className="main-content container">
                <h1 className="heading">Mi cuenta</h1>
                <div className="mb-4">
                    <Link to={'/mi-cuenta'}>
                        <Button className="button default-button default-button__black">
                            Volver
                        </Button>
                    </Link>
                </div>
                <OrderDetail />
            </div>
        </>
    )
}

export default SingleOrder; 