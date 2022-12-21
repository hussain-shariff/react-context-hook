import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import Data from './data';
import React from "react";
import Cart from "./components/Cart";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider> 
        <Router>
          <Nav/>
          <Routes>
            <Route path = '/' element = { <ProductList/> }></Route>
            <Route path = '/cart' element = { <Cart/> }></Route>
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
