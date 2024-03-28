import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Products/Product";
import Header from "./components/Navbar/Header";
import Details from "./pages/product details/Details";
import Categories from "./pages/Category/Categories";
import CategoryProducts from "./pages/Category/CategoryProducts";
import User from "./pages/Users/User";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Details />} />
          <Route path="/category" element={<Categories />} />
          <Route path="/category/:id" element={<CategoryProducts />} />
          <Route path="/users" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
