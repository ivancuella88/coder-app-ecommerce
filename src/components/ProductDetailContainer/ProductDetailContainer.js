import { useEffect, useState } from "react";
import ProductDetail from "../ProductDetail/ProductDetail";
import Products from "../../mocks/products";
import './ProductDetailContainer.css';
import { useParams } from "react-router-dom";

const ProductDetailContainer = () =>{

    const { id } =  useParams();
    const [product, setProduct] = useState({})

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
        getProduct()
        .then((res) => {
            setProduct(res)
            console.log(res)
        })
        .catch((err) => {
            console.log('No se encontró el producto')
        })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    
    return (
        <>
            <ProductDetail product={product} />
        </>
    )
}

export default ProductDetailContainer;