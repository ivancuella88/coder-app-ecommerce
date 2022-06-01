import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './pages/Contact';
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
          <div className="App">
            <div className="App-header">
              <NavBar />
              <Routes>
                <Route exact path="/" />
                <Route exact path="/contacto" element={ <Contact /> }/>
              </Routes>
            </div>
            <div className='page-content container'>
              <ItemListContainer heading={'Bienvenidos a Musicommerce'} />
              <h1>Producto destacado</h1>
              <ProductDetailContainer />
            </div>
          </div>
      </BrowserRouter>
    </>
  ); 
}

export default App;
