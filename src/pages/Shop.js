import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { Link } from "react-router-dom";
const Shop = () => {
    return (
        <>
            <ul style={ { listStyle : 'none', display : "flex", flexWrap : 'wrap', margin : 0}  }>
                <li>
                    <Link to="/categorias">Todas</Link>
                </li>
                <li>
                    <Link to="/categoria/guitarras">Guitarras</Link>
                </li>
                <li>
                    <Link to="/categoria/bajos">Bajos</Link>
                </li>
                <li>
                    <Link to="/categoria/saxofones">Saxofones</Link>
                </li>
                <li>
                    <Link to="/categoria/otros">Otros</Link>
                </li>
            </ul>
            <ItemListContainer products={[]} heading={'Tienda'} />
        </>
    )
}

export default Shop;