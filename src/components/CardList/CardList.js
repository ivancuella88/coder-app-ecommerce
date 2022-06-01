import Card from '../Card/Card';

const CardList = ( { products }) => {

    return (
        <>
            <div className="item-list-container__list">
            {
                products.map(( {id, sku, title, short_description, price, imageUrl }, i) => {
                    return <Card key={sku} id={id} title={title} short_description={short_description} price={price} imageUrl={imageUrl} />
                })
            }
            </div>
        </>
    )
}

export default CardList;