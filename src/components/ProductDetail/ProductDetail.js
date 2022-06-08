
import ItemCount from "../ItemCount/ItemCount";
import Categories from "../../mocks/categories";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ProductDetail = ({product}) =>{
    
    const { id, title, long_description, price, imageUrl, categories } = product
    
    const [productCategories, setProductCategories] = useState([])
    
    const getProductCategories = () => {
        
        if(categories){
            setProductCategories(Categories.filter((elem) => 
               categories.includes(elem.slug)
            ))
        }
    }

    useEffect( ()=>{
        getProductCategories()
    }, [categories])

    return (
        <>
            <div id={ `product-${id}` } className="single-product-container flex">
                <div className="col-5/12 single-product-container__image">
                    <img src={imageUrl} alt={title} width="600" height="600"/>
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
                    <ItemCount defaulQty={1} stock={30} isSingleProduct={true} />
                </div>
            </div>
        </>
    )
}

export default ProductDetail;