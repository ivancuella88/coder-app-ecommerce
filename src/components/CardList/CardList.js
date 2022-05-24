import Card from '../Card/Card';

const CardList = ( { products }) => {

    console.log(products)
    return (
        <>
            <div className="item-list-container__list">
            {
                products.map(( {id, sku, title, description, price, imageUrl }, i) => {
                    return <Card key={sku} id={id} title={title} description={description} price={price} imageUrl={imageUrl} />
                })
            }
            </div>
        </>
    )
}

export default CardList;