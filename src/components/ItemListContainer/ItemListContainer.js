import { useEffect, useState } from 'react';
import CardList from '../CardList/CardList';
import './ItemListContainer.css';

const ItemListContainer = ({ heading }) => {

    const [products, setProducts] = useState([])

    const productsList = [
        {
            id: 25,
            sku: 'XYHF72',
            price : 167000,
            title: 'Guitarra Electrica Gibson SG',
            description: 'Su madera de caoba la hace un producto versátil y popular.',
            stock: 50,
            imageUrl : './images/XYHF72.jpg'
        },
        {
            id: 13,
            sku: 'XYHF74',
            price : 75500,
            title: 'Amplificador Fender',
            description: 'Al contar con 2 canales, te permitirán alcanzar tonos limpios y reproducir todos los géneros de música',
            stock: 4,
            imageUrl : './images/XYHF74.jpg'
        },
        {
            id: 213,
            sku: 'XYHF76',
            price : 90000,
            title: 'Bajo 5 cuerdas',
            description: 'El delgado mástil de arce de roca dura tiene un acabado satinado fácil de tocar.',
            stock: 50,
            imageUrl : './images/XYHF76.jpg'
        },
        {
            id: 213,
            sku: 'XYHF78',
            price : 120000,
            title: 'Guitarra Electrica Les Paul',
            description: 'Epiphone Modern Collection Les Paul Classic de caoba heritage cherry sunburst brillante con diapasón de laurel indio',
            stock: 14,
            imageUrl : './images/XYHF78.jpg'
        }
    ];
    
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productsList);
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