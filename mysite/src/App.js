import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Skills from "./components/skills";
import About from "./components/about";
import Home from "./components/home";
import SiteNavbar from "./components/site-nav-bar";
import CookieNotification from "./components/cookie-notification"
import Blogs from "./components/blogs"
//<Skills></Skills>
function App() {
  return (
    <div>
      <SiteNavbar></SiteNavbar>
      <Home></Home>
      <About></About>
      
      <Blogs></Blogs>
      <Footer></Footer>
      <CookieNotification></CookieNotification>
    </div>
  );
}

export default App;
