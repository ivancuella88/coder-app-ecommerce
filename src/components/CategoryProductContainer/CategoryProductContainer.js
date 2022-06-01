import ItemListContainer from "../ItemListContainer/ItemListContainer";

const CategoryProductContainer = ({heading, products}) => {
    
    return (
        <>
            <ItemListContainer products={products} heading={heading} />
        </>
    )
}

export default CategoryProductContainer;