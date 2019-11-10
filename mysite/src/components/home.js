import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Certifications from "./certifications";
function Home() {
  return (
    <div id="home" className="text-white text-center bg-dark">
      <Jumbotron className="bg-dark">
        <br />
        <br />
        <br />
        <h2>HELLO, GLAD YOU'RE</h2>
        <h2>HERE!</h2>
        <h3>Keep scrolling for a little about me!</h3>
        <br />
        <br />
        <Certifications></Certifications>
      </Jumbotron>
    </div>
  );
}

export default Home;
