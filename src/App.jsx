import React from "react";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
