import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Skills from "./components/skills";
import About from "./components/about";
import Home from "./components/home";
import Certified from "./components/certified";
import SiteNavbar from "./components/site-nav-bar";
function App() {
  return (
    <div>
      <SiteNavbar></SiteNavbar>
      <Home></Home>
      <Certified></Certified>
      <About></About>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
}

export default App;
