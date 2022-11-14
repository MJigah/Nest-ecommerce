import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import LocationPage from "./pages/LocationPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Vendor from "./pages/Vendor";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";
import { useEffect } from "react";
import { appendScript } from "./utils/appendScript";
import Wishlist from "./pages/Wishlist";

function App() {
  useEffect(() => {
    // appendScript("./assets/js/main8c94.js");
  }, [])
  
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/vendor" element={<Vendor />}></Route>
            <Route path="/location" element={<LocationPage />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
