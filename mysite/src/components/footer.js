import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ReactBootstrapLogo from '../react-bootstrap.svg';
import Image from 'react-bootstrap/Image'
function Footer() {
  return (
    <div id="home" className="text-white text-center">
    <Navbar bg="dark" variant="dark" sticky="bottom">
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse> */}
    <Nav className="mr-auto">
    &copy; {new Date().getFullYear()} &nbsp;&amp; Developed By  &nbsp; <a href="https://www.linkedin.com/in/subratamazumder/">Subrata Mazumder</a>
    </Nav>
    <Nav className="justify-content-end">
    Powered By &nbsp;<Image src={ReactBootstrapLogo} alt="React Bootstrap" fluid rounded width="30"
        height="30"/>
    </Nav>
  </Navbar>
  </div>
  );
}

export default Footer;
