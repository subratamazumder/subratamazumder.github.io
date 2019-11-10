import React from "react";
import AWSCertLogo from "../certificates/AWS_Certified_Logo_1176x600_Color.png";
import Image from "react-bootstrap/Image";
function Certified() {
  var imageStylesCert = {
    width: "50%",
    height: "50%"
  };
  return (
    <div id="Certifications" className="text-white text-center">
      <div className="col-md-12 col-sm-12 col-xs-12 text-center">
        <Image
          src={AWSCertLogo}
          alt="Subrata's skill"
          fluid
          rounded
          style={imageStylesCert}
        />
      </div>
    </div>
  );
}

export default Certified;
