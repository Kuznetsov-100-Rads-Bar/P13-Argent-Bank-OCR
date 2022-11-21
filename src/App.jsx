import React from "react";

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
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { fetchUserProfileDataAction } from "./store/actions/UserData.actions";
import { useEffect } from "react";

function App({ userData, fetchUserData }) {
  const { isLogged } = userData;

  useEffect(() => {
    if (isLogged) {
      fetchUserData({ token: userData.accessToken });
    }
  }, [])


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

const userDataDispatch = (dispatch) => {
  return {
    fetchUserData: (token) => dispatch(fetchUserProfileDataAction(token))
  }
}

export default connect(userDataState, userDataDispatch)(App);
