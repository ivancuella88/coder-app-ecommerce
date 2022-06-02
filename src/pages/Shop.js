import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { Link } from "react-router-dom";
import CategoryNavBar from "../components/NavBar/CategoryNavBar";
const Shop = () => {
    return (
        <>
            <CategoryNavBar />
            <ItemListContainer heading={'Tienda'} />
        </>
    )
}

export default Shop;