import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Skills from "./components/skills";
import About from "./components/about";
import Home from "./components/home";
import SiteNavbar from "./components/site-nav-bar";
import CookieNotification from "./components/cookie-notification"
function App() {
  return (
    <div>
      <SiteNavbar></SiteNavbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Footer></Footer>
      <CookieNotification></CookieNotification>
    </div>
  );
}

export default App;
