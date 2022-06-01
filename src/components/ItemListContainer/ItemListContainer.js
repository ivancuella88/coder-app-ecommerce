import { useEffect, useState } from 'react';
import CardList from '../CardList/CardList';
import ProductDetailContainer from '../ProductDetailContainer/ProductDetailContainer';
import './ItemListContainer.css';
import Products from '../../mocks/products';

const ItemListContainer = ({ heading }) => {

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Products);
            }, 2000);
        });
    };

    useEffect(() => {

        getProducts().then((res) => {
            console.log(res);
            setProducts(res)
        }).catch((err) => {
            console.log('Error en la consulta');
        })

    }, []) // eslint-disable-line react-hooks/exhaustive-deps
        
    return (
        <>
            <div className="item-list-container">
                <h1>{ heading }</h1>
                <CardList products={products}/>
            </div>
        </>
    )
}

export default ItemListContainer;