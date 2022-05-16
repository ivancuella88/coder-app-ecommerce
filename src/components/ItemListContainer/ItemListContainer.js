import './ItemListContainer.css';

const ItemListContainer = ({ heading }) => {
    return (
        <>
            <div className="item-list-container">
                <h1>{ heading }</h1>
            </div>
        </>
    )
}

export default ItemListContainer;