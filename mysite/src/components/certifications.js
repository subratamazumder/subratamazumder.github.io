import React from "react";
import AWSCertLogoSAP from "../certificates/AWS-Certified_Solutions-Architect_Professional_512x512.png";
import AWSCertLogoSAA from "../certificates/AWS-Certified_Solutions-Architect_Associate_512x512.png";
import AWSCertLogoDVA from "../certificates/AWS-Certified_Developer_Associate_512x512.png";
import AWSCertLogoSOA from "../certificates/AWS-Certified_Sysops-Administrator_Associate_512x512.png";
import Image from "react-bootstrap/Image";
function Certifications() {
  var imageStyles = {
    width: "75%",
    height: "75%"
  };
  return (
    <div id="Certifications" className="text-white text-center">
      {/* <Navbar bg="light" variant="dark">
        <Nav className="navbar-text">
        <Image
                src={AWSCertLogo}
                alt="Subrata's skill"
                fluid
                rounded
                style={imageStylesCert}
              />
              
        </Nav>
      </Navbar> */}
      {/* col-md-12 col-sm-12 col-xs-12 */}

      <div className="row d-flex align-items-center bg-dark">
        <div className="col-sm-3 col-md-3 col-lg-3 text-center">
          <Image
            src={AWSCertLogoSAP}
            alt="Subrata's skill"
            fluid
            rounded
            style={imageStyles}
          />
        </div>
        <div className="col-sm-3 col-md-3 col-lg-3 text-center">
          <Image
            src={AWSCertLogoSAA}
            alt="Subrata's skill"
            fluid
            rounded
            style={imageStyles}
          />
        </div>
        <div className="col-sm-3 col-md-3 col-lg-3 text-center">
          <Image
            src={AWSCertLogoSOA}
            alt="Subrata's skill"
            fluid
            rounded
            style={imageStyles}
          />
        </div>
        <div className="col-sm-3 col-md-3 col-lg-3 text-center">
          <Image
            src={AWSCertLogoDVA}
            alt="Subrata's skill"
            fluid
            rounded
            style={imageStyles}
          />
        </div>
      </div>
    </div>
  );
}

export default Certifications;
