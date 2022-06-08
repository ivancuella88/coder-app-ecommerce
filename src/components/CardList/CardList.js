import Card from '../Card/Card';

const CardList = ( { products }) => {

    return (
        <>
            <div className="item-list-container__list">
            {
                products.map((product , i) => {
                    return <Card key={product.sku} product={product} />
                })
            }
            </div>
        </>
    )
}

export default CardList;