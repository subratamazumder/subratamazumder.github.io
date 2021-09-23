import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import BrandLogo from "../dp-logo.png";
import GithubLogo from "../GitHub-Mark-Light-120px-plus.png";
import LinkedInLogo from "../204340_linkedin-logo-png.png";

import Image from "react-bootstrap/Image";
function SiteNavbar() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={BrandLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Subrata Mazumder
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#blogs">Blogs</Nav.Link>
          <Nav.Link href="https://s3-ap-s1-subrata-public.s3.ap-south-1.amazonaws.com/Subrata_Mazumder_CV_2021.pdf">Resume/CV</Nav.Link>
          <NavDropdown title="Applications" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://subrata.dev/covid19/">
              COVID19 World Stats
            </NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/subratamazumder/react-amplified/blob/master/README.md">
              React ToDo App AWS AppSync GraphQL
            </NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/subratamazumder/billion-user-app">
              A Billion User App (in progress)
            </NavDropdown.Item>
            <NavDropdown.Item href="https://subrata.dev/notepad/">
              MyNotepad
            </NavDropdown.Item>
            <NavDropdown.Item href="http://dev-scp-reward-app.s3-website.ap-south-1.amazonaws.com/">
              Gold Price Calculator
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Solutions" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://github.com/subratamazumder/local-alb-lambda">
              Mocking AWS ALB-Lambda for Local Testing
            </NavDropdown.Item>
            <NavDropdown.Item href="https://subrata.dev/event-driven-architecture/">
              Serverless Event Driven Architecture
            </NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/subratamazumder/pdf-utility-java/blob/master/README.md">
              Java PDF Merger
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="POC" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://github.com/subratamazumder/nginx-poc/blob/master/README.md">
              Nginx TLS & MTLS
            </NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/subratamazumder/tyk-poc/blob/master/README.md">
              TYK API Gateway MTLS
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Nav.Link href="https://github.com/subratamazumder">
          <Image
            src={GithubLogo}
            alt="Github"
            fluid
            rounded
            width="30"
            height="30"
          />
        </Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/subratamazumder/">
          <Image
            src={LinkedInLogo}
            alt="LinkedIn"
            fluid
            rounded
            width="30"
            height="30"
          />
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SiteNavbar;
