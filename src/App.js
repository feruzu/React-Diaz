import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/cartContext";
import Footer from "./components/Footer/Footer";





function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        
        <Routes>
          
          <Route path="/" element={<ItemListContainer /> }/>
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<h1>404: Te perdiste</h1>} />
        </Routes>
  
      <Footer/>
      </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
