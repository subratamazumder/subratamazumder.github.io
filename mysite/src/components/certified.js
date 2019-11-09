import React from "react";
import AWSCertLogoSAP from "../certificates/AWS_Certified_Logo__SolutionsArchitect_Professional_1176x600-Color.png";
import AWSCertLogo from "../certificates/AWS_Certified_Logo_1176x600_Color.png";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
function Certified() {
  var imageStylesCert = {
    width: "40%",
    
  };
  var imageStyles = {
    width: "100%",
    height: "100%"
  };
  return (
    <div id="Certifications" className="text-white text-center">
      <Navbar bg="light" variant="dark">
        <Nav className="navbar-text">
        <Image
                src={AWSCertLogo}
                alt="Subrata's skill"
                fluid
                rounded
                style={imageStylesCert}
              />
              
        </Nav>
      </Navbar>
    </div>
  );
}

export default Certified;
