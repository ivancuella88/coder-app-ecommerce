import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CardList from '../CardList/CardList';
import NotProductsFound from '../NotFound/NotProductsFound';
import CircularProgress from '@mui/material/CircularProgress';
import './ItemListContainer.css';

import { collection, getDocs } from "firebase/firestore";
import db from '../../utils/firebaseConfig';

const ItemListContainer = ({ heading }) => {

    const { categorySlug }              = useParams();
    const [products, setProducts]       = useState([])
    const [loading, setLoading]         = useState(false)

    const getProducts = async () => {
        const q             = collection(db, "products");
        const querySnapshot = await getDocs(q);
        const queryDocs     = querySnapshot.docs.map( (doc) => {

            let data = doc.data()
            data.id = doc.id
            return data
        })

        return queryDocs
    }

    const filterProductsByCategory = (products) => {
        if(products.length){
            
            return products.filter(
                (product) => {
                    if(product.categories){
                        return product.categories.find( (item => item == categorySlug))
                    }
                }
            )
        }
    }
    useEffect(() => {

        setLoading(true)
        setProducts([])

        getProducts().then((res) => {

            if(categorySlug){
                res  = filterProductsByCategory(res)
            }
            setProducts(res)
            setLoading(false)
        }).catch((err) => {
            console.warn('Error en la consulta');
        })

    }, [categorySlug]) // eslint-disable-line react-hooks/exhaustive-deps
        
    return (
        <>
            <div className="item-list-container container">
                <h2 className='page-heading'>{ heading }</h2>
                {
                    loading
                    ?
                    <div className='loading__container'>
                        <CircularProgress />
                    </div>
                    :
                        (products.length)
                        ? <CardList products={products}/> 
                        : <NotProductsFound />
                }
            </div>
        </>
    )
}

export default ItemListContainer;