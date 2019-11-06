import React from 'react';
import Image from 'react-bootstrap/Image'
import './App.css';
import Footer from "./components/footer"
import Skills from "./components/skills"
import About from "./components/about"
import Home from "./components/home"
import SiteNavbar from "./components/site-nav-bar"
function App() {
  var imageStyles = {
    width: '100%',
  };
  return (
    <div>
<SiteNavbar></SiteNavbar>
<Home></Home>
<About></About>
<Skills></Skills>
<Footer></Footer>
    </div>
  );
} 

export default App;
