import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CardList from '../CardList/CardList'
import Products from '../../mocks/products';
import NotProductsFound from '../NotFound/NotProductsFound';
import CircularProgress from '@mui/material/CircularProgress';
import './ItemListContainer.css';

const ItemListContainer = ({ heading }) => {

    const { categorySlug }              = useParams();
    const [products, setProducts]       = useState([])
    const [loading, setLoading]         = useState(false)

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Products);
            }, 2000);
        });
    };

    const filterProductsByCategory = (products) => {
        if(products.length){
            return products.filter(
                product => product.categories.find((item => item == categorySlug))
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
            console.log('Error en la consulta');
        })

    }, [categorySlug]) // eslint-disable-line react-hooks/exhaustive-deps
        
    return (
        <>
            <div className="item-list-container container">
                <h1>{ heading }</h1>
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