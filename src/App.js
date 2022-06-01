import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
        <header className="App-header">
          <NavBar />
          <Routes>
            <Route exact path="/" />
            <Route exact path="/contacto" element={ <Contact /> }/>
          </Routes>
        </header>
        <ItemListContainer heading={'Bienvenidos a Musicommerce'} />
        </div>
      </BrowserRouter>
    </>
  ); 
}

export default App;
