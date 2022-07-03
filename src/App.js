import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import MyAccount from './pages/MyAccount';
import SingleOrder from './pages/SingleOrder';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import SingleProduct from './pages/SingleProduct';
import CategoryProduct from './pages/CategoryProduct';
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <>
      <div className="App">
        <CartProvider>
          <BrowserRouter>
              <div className="App-header">
                  <div className="header__top-bar">
                    <span>Envios a todo en país</span>
                    <span>Compra segura</span>
                    <span>Pagá con tarjeta en cuotas</span>
                  </div>
                  <NavBar />
              </div>
              <div className='page-content'>
                <Routes>
                  <Route exact path="/"  element={ <Home /> } />
                  <Route exact path="/tienda" element={ <Shop /> } />
                  <Route exact path="/producto/:id" element={ <SingleProduct /> } />
                  <Route exact path="/categorias" element={ <CategoryProduct /> } />
                  <Route exact path="/categoria/:categorySlug" element={ <CategoryProduct /> } />
                  <Route exact path="/mi-cuenta/" element={ <MyAccount /> } />
                  <Route exact path="/mi-cuenta/pedidos/:orderId" element={ <SingleOrder /> } />
                  <Route exact path="/carrito" element={ <Cart /> } />
                  <Route exact path="/nosotros" element={ <AboutUs /> } />
                  <Route exact path="/contacto" element={ <Contact /> } />
                  <Route exact path="*" element={ <NotFound /> } />
                </Routes>
              </div>
              <div className="App-footer">
                  <Footer />
              </div>
          </BrowserRouter>
        </CartProvider>
      </div>
    </>
  ); 
}

export default App;
