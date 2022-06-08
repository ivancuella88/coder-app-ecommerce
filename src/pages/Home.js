import Banner from '../components/Banner/Banner';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Home = () => {
    return (
        <>
            <Banner url={'/images/banner-hot-sale.png'} title={'Hot sale'} />
            <ItemListContainer heading={'Productos destacados'} />
        </>
    )
}

export default Home;