import { useEffect, useState } from "react";
import ProductDetail from "../ProductDetail/ProductDetail";
import CategoryNavBar from "../NavBar/CategoryNavBar";
import Products from "../../mocks/products";
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom";
import NotProductFound from "../NotFound/NotProductFound";
import './ProductDetailContainer.css';

const ProductDetailContainer = () =>{

    const { id }                =  useParams();
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)

    const getProduct = () => {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if(Products.length){
                    resolve(Products.find((product) => product.id == id ))
                }
                else{
                    reject()
                    console.log('No se encontró el producto')
                }
            }, 2000);
        })
    }
    
    useEffect(()=> {
        setLoading(true)
        getProduct()
        .then((res) => {
            setProduct(res)
            setLoading(false)
        })
        .catch((err) => {
            console.log('No se encontró el producto')
        })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    
    return (
        <>
            <CategoryNavBar />
            {
                loading
                ?
                <div className='loading__container'>
                    <CircularProgress />
                </div>
                :
                    (product)
                    ? 
                    <div className="main-content container">
                        <ProductDetail product={product} />
                    </div>
                    : 
                    <NotProductFound />
            }
        </>
    )
}

export default ProductDetailContainer;