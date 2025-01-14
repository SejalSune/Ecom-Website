import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import About from "./About";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import Error from "./Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/singleproduct/:id" element={<SingleProduct/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
