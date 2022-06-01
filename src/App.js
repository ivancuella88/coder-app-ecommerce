import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import SingleProduct from './pages/SingleProduct';
import CategoryProduct from './pages/CategoryProduct';

function App() {
  return (
    <>
      <div className="App">
          <BrowserRouter>
              <div className="App-header">
                  <NavBar />
              </div>
              <div className='page-content container'>
                <Routes>
                  <Route exact path="/"  element={ <Home /> } />
                  <Route exact path="/tienda" element={ <Shop /> } />
                  <Route exact path="/producto/:id" element={ <SingleProduct /> } />
                  <Route exact path="/categorias" element={ <CategoryProduct /> } />
                  <Route exact path="/categoria/:categorySlug" element={ <CategoryProduct /> } />
                  <Route exact path="/nosotros" element={ <AboutUs /> } />
                  <Route exact path="/contacto" element={ <Contact /> } />
                  <Route exact path="*" element={ <NotFound /> } />
                </Routes>
              </div>
          </BrowserRouter>
      </div>
    </>
  ); 
}

export default App;
