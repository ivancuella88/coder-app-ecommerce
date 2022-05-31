import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <div className="App">
          <div className="App-header">
              <NavBar />
          </div>
          <div className='container'>
            <ItemListContainer heading={'Productos destacados'} />
          </div>
      </div>
    </>
  );
}

export default App;
