
import ItemCount from "../ItemCount/ItemCount";
const ProductDetail = ({product}) =>{

    const { id, title, long_description, price, imageUrl } = product
    
    return (
        <>
            <div id={ `product-${id}` } className="single-product-container flex">
                <div className="col-5/12 single-product-container__image">
                    <img src={imageUrl} alt={title} width="600" height="600"/>
                </div>
                <div className="col-7/12 single-product-container__info">
                    <h2>{ title }</h2>
                    <p>{ long_description }</p>
                    <span className="card-item__price"><span className="card-item__price-simbol">{ price ? '$' : '' }</span> { price ? price.toLocaleString("es-ES") : '' }</span>
                    <ItemCount defaulQty={1} stock={30} />
                </div>
            </div>
        </>
    )
}

export default ProductDetail;