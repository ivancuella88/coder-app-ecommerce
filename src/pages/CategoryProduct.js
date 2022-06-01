import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Products from "../mocks/products";
import CategoryProductContainer from '../components/CategoryProductContainer/CategoryProductContainer';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const CategoryProduct = () => {

    const { categorySlug } =  useParams();
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                let items = []
                items = Products
                if(categorySlug){
                    items = Products.filter(
                        item => item.categories.find((attr => attr == categorySlug))
                    )
                    console.log(items)
                }
                resolve(items);
            }, 2000);
        });
    };

    useEffect(() => {

        getProducts().then((res) => {
            setProducts(res)
        }).catch((err) => {
            console.log('Error en la consulta');
        })

    }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
            {/* <CategoryProductContainer heading={categorySlug} products={products} /> */}
            <ItemListContainer products={products} heading={categorySlug} />
        </>
    )
}

export default CategoryProduct;