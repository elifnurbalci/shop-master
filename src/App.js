import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { CartProvider } from "./components/CartContext";
import React from "react";

function App() {
  return (
    <div>
      <Navbar bg="info" variant="dark">
        <Navbar.Brand style={{marginInlineStart: "20px"}}>Balci Shop</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
      </Navbar>
      <CartProvider>
        <ProductList />
          <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
