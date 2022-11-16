import React, { useState } from "react";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profil from "./pages/Profil";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { connect } from "react-redux";

// react-router-dom
import {
  useLocation,
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App({ userData }) {
  const { isLogged } = userData;
  const [userLocation, setUserLocation] = useState("");

  setInterval(() => {
    console.log(userLocation);
  }, 2000);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        {!isLogged ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route
              path="/profil"
              element={<Navigate to={"/login"} replace={true} />}
            />
          </>
        ) : (
          <Route path="/profil" element={<Profil />} />
        )}

        <Route path="*" element={<Navigate to={"/"} replace={true} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const userDataState = (state) => {
  return {
    userData: state.userData,
  };
};

export default connect(userDataState, null)(App);
