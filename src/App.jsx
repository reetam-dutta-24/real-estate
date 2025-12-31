import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";
import Signin from "./pages/Signin.jsx";
import Signout from "./pages/Signout.jsx";
import Header from "./components/Header.jsx";

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/profile" element = {<Profile/>}/>
        <Route path = "/signin" element = {<Signin/>}/>
        <Route path = "/signout" element = {<Signout/>}/>
        

      </Routes>
    </BrowserRouter>
  );
};
export default App;