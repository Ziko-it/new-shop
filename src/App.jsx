import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Katalog from "./pages/Katalog";
import FavoritesPage from "./pages/FavoritesPage";
import CartPage from "./pages/CartPage";
import { FavoritesProvider } from "./assets/context/FavoritesContext";
import { CartProvider } from "./assets/context/CartContext";
import Header from "./assets/components/Header";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Buyurtma from "./pages/Buyurtma";
import Addresses from "./pages/Addresses";
import Profil from "./pages/Profil";
import Sotrudniki from "./pages/Sotrudniki";
import Footer from "./assets/components/Footer";
import "./App.css";
import Leyavut from "./pages/Leyavut";
import Opatut from "./pages/Opatut";
import Vasit from "./pages/Vasit";

function App() {
  const location = useLocation();

  const hideHeader =
    location.pathname === "/login" ||
    location.pathname === "/sign" ||
    location.pathname === "/vasit";

  return (
    <FavoritesProvider>
      <CartProvider>
        {!hideHeader && <Header />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/button" element={<Katalog />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />

          <Route path="/buyurtma" element={<Leyavut />}>
            <Route index element={<Buyurtma />} />
            <Route path="profil" element={<Profil />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="sotrudniki" element={<Sotrudniki />} />
            <Route path="opatut" element={<Opatut />} />
          </Route>
          <Route path="/vasit" element={<Vasit />} />
        </Routes>
        {!hideHeader && <Footer />}
      </CartProvider>
    </FavoritesProvider>
  );
}

export default App;
