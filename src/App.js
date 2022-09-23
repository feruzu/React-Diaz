import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
// import ItemListContainer  from './components/ItemListContainer/ItemListContainer';





function App() {
  return (
    
    <div className="App">     

      <NavBar />
      
      {/* <ItemListContainer greeting="Bienvenidos a la Web" /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
