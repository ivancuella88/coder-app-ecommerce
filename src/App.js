import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer';
function App() {
  return (
    <>
      <div className="App">
          <div className="App-header">
              <NavBar />
          </div>
          <div className='container'>
            <ItemListContainer heading={'Productos más vendidos'} />
            <h1>Producto destacado</h1>
            <ProductDetailContainer />
          </div>
      </div>
    </>
  );
}

export default App;
