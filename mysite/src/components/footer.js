import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import brand from '../dp.gif';
import Jumbotron from "react-bootstrap/Jumbotron";
function Footer() {
  return (
    <div id="home" className="text-white text-center">
    <Navbar bg="dark" variant="dark" sticky="bottom">
    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse> */}
    <Nav className="mr-auto">
    ©2019 Subrata Mazumder
    </Nav>
  </Navbar>
  </div>
  );
}

export default Footer;
