import React from 'react';
import resume from './Resume2019.svg';
import Image from 'react-bootstrap/Image'
import './App.css';
import Footer from "./components/footer"
import Header from "./components/header"
function App() {
  var imageStyles = {
    width: '100%',
  };
  return (
    <div>
      {/* <Header></Header> */}
      <Image src={resume} alt="Subrata's resume" fluid rounded style={imageStyles}/>
      {/* <Footer></Footer> */}
    </div>
  );
} 

export default App;
