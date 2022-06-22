
import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";
import db from '../../utils/firebaseConfig';

const ProductDetail = ({product}) =>{
    
    const { id, title, long_description, price, imageUrl, categories } = product
    
    const [productCategories, setProductCategories]     = useState([])

    const getProductsCategories = async () => {
        const coleccionCategories   = collection(db, "categories");
        const docsCategories        = await getDocs(coleccionCategories);
        const queryCategories       = docsCategories.docs.map( (doc) => {
            let data = doc.data()
            data.id = doc.id
            return data
        })

        return queryCategories
    }

    useEffect( ()=>{

        if(categories){
            getProductsCategories()
            .then(res => {
            
                if(res){
                    setProductCategories(
                        res.filter((elem) => {
                            return categories.includes(elem.slug)
                        })
                    )
                }
            })
            .catch((err) => {
                console.log('Error en la consulta (getProductCategories)');
            })

        }
        
    }, [categories])

    return (
        <>
            <div id={ `product-${id}` } className="single-product-container flex">
                <div className="col-5/12 single-product-container__image">
                    <img src={`/images/${imageUrl}`} alt={title} width="600" height="600"/>
                </div>
                <div className="col-7/12 single-product-container__info">
                    {
                        productCategories && 
                        <div className="single-product-container__info-categories">
                            {
                                productCategories.map((item,i) => {
                                    return <span key={i} ><Link to={`/categoria/${item.slug}`}>{item.name}</Link></span>
                                })
                            }
                        </div>
                    }
                    <h1>{ title }</h1>
                    <p>{ long_description }</p>
                    <span className="card-item__price"><span className="card-item__price-simbol">{ price ? '$' : '' }</span> { price ? price.toLocaleString("es-ES") : '' }</span>
                    <ItemCount product={product} isSingleProduct={true} />
                </div>
            </div>
        </>
    )
}

export default ProductDetail;