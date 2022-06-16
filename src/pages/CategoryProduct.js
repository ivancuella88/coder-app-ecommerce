import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import CategoryNavBar from "../components/NavBar/CategoryNavBar";
import Banner from '../components/Banner/Banner';
import { useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import db from '../utils/firebaseConfig';

const CategoryProduct = () => {

    const { categorySlug } = useParams();
    
    const [heading, setHeading] = useState()
    const [productsCategories, setProductsCategories] = useState([])
    
    const getProductCategories = async () => {
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

        setHeading('Categorias')

        getProductCategories()
        .then(res => {
            setProductsCategories(res)
        })
        .catch((err) => {
            console.log('Error en la consulta (getProductCategories)');
        })

        if(categorySlug){
            let headingText = productsCategories.find((elem) => elem.slug == categorySlug)
            if(headingText){
                setHeading(headingText.name)
            }
        }
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