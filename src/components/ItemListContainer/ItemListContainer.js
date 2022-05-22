import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';

const ItemListContainer = ({ heading }) => {
    return (
        <>
            <div className="item-list-container">
                <h1>{ heading }</h1>
                <div className="item-list-container__list">
                    <div className="card-itemd">
                        <h4>Guitarra Electrica Gibson SG</h4>
                        <ItemCount defaulQty={1} stock={30} />
                    </div>
                    <div className="card-item">
                        <h4>Amplificador Fender</h4>
                        <ItemCount defaulQty={1} stock={12} />
                    </div>
                    <div className="card-item">
                        <h4>Bajo 5 cuerdas</h4>
                        <ItemCount defaulQty={1} stock={24} />
                    </div>
                    <div className="card-item">
                        <h4>Guitarra Electrica Les Paul</h4>
                        <ItemCount defaulQty={1} stock={0} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemListContainer;