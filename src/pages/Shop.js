import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import CategoryNavBar from "../components/NavBar/CategoryNavBar";
import Banner from "../components/Banner/Banner";

const Shop = () => {
    return (
        <>
            <CategoryNavBar />
            <Banner url={'/images/banner-hot-sale.png'} title={'Hot sale'} />
            <ItemListContainer heading={'Tienda'} />
        </>
    )
}

export default Shop;