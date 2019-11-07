import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container"
import ReactBootstrapLogo from "../react-bootstrap.svg";
import Image from "react-bootstrap/Image";
function Footer() {
  return (
    <div id="home" className="text-white text-center">
      {/* <Container> */}
      <Navbar bg="dark" variant="dark" sticky="bottom">
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse> */}
        <Nav className="navbar-text col-md-12 col-sm-12 col-xs-12">
          &copy; {new Date().getFullYear()} &nbsp;&amp; Developed By &nbsp;{" "}
          <a href="https://www.linkedin.com/in/subratamazumder/">
            Subrata Mazumder
          </a>
        </Nav>
        {/* <Nav pullRight>
        Powered By &nbsp;<Image
            src={ReactBootstrapLogo}
            alt="React Bootstrap"
            fluid
            rounded
            width="30"
            height="30"
          />
          {/* <Nav.Link href="https://react-bootstrap.github.io/">
            <Image
            src={ReactBootstrapLogo}
            alt="React Bootstrap"
            fluid
            rounded
            width="30"
            height="30"
          />
          </Nav.Link> 
        </Nav> */}
      </Navbar>
      {/* </Container> */}
      <Navbar bg="dark" variant="dark" sticky="bottom">
        <Nav className="navbar-text col-md-12 col-sm-12 col-xs-12">
        Powered By &nbsp;<Image
            src={ReactBootstrapLogo}
            alt="React Bootstrap"
            fluid
            rounded
            width="30"
            height="30"
          />
          {/* Powered By &nbsp; {" "}
           <Nav.Link href="https://react-bootstrap.github.io/">
            <Image
            src={ReactBootstrapLogo}
            alt="React Bootstrap"
            fluid
            rounded
            width="30"
            height="30"
          />
          </Nav.Link> */}
        </Nav>
      </Navbar>
    </div>
  );
}

export default Footer;
