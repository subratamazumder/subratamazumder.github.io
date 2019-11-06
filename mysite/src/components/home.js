import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
function Home() {
  var imageStyles = {
    width: '100%',
  };
  return (
    <div id="home" className="text-white text-center">
      <Jumbotron className="bg-dark">
        <br/>
        <br/>
        <br/>
  <h2>HELLO, GLAD YOU'RE</h2>
  <h2>HERE!</h2>
  <p>
    Keep scrolling for a little about me!
  </p>
  
</Jumbotron>
    </div>
  );
} 

export default Home;
