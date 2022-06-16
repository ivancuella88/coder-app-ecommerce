import { useEffect, useState } from "react";
import ProductDetail from "../ProductDetail/ProductDetail";
import CategoryNavBar from "../NavBar/CategoryNavBar";
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom";
import NotProductFound from "../NotFound/NotProductFound";
import './ProductDetailContainer.css';

import { doc, getDoc } from "firebase/firestore";
import db from '../../utils/firebaseConfig';

const ProductDetailContainer = () =>{

    const { id }                =  useParams();
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)

    const getProduct = async () => {
        const q         = doc(db, "products", id);
        const queryDoc  = await getDoc(q);

        let productDoc  = queryDoc.data()
        productDoc.id   = queryDoc.id
        return productDoc
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
    }, [id]) // eslint-disable-line react-hooks/exhaustive-deps
    
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