import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <div className="App">
          <header className="App-header">
              <NavBar />
          </header>
          <ItemListContainer heading={'Bienvenidos a Musicommerce'} />
      </div>
    </>
  );
}

export default App;
