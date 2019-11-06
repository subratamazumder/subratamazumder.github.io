import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
function Header() {
  return (
    <div className="text-white text-center">
      <Jumbotron fluid className="bg-info">
        <Container>
          <h2>Thanks for visiting</h2>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Header;
