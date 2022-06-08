import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import CategoryNavBar from "../components/NavBar/CategoryNavBar";
import Categories from "../mocks/categories";
import Banner from '../components/Banner/Banner';
import { useState, useEffect } from "react";

const CategoryProduct = () => {

    const { categorySlug }= useParams();
    
    const [heading, setHeading] = useState()
    
    const getProductCategories = () => {
        
        setHeading('Categorias')
        if(categorySlug){
            let headingText = Categories.find((elem) => elem.slug == categorySlug)
            if(headingText){
                setHeading(headingText.name)
            }
        }
    }

    useEffect( ()=>{
        getProductCategories()
    }, [categorySlug]);

    return (
        <>
            <CategoryNavBar />
            <Banner url={'/images/banner-hot-sale.png'} title={'Hot sale'} />
            <ItemListContainer heading={ heading } />
        </>
    )
}

export default CategoryProduct;