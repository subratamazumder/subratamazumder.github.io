import React from 'react';
import SkillsLogo from '../skills.svg';
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar'
function Skills() {
  var imageStyles = {
    width: '75%',
    height: '75%',
  };
  return (
    <div id="skills" className="text-center">
      <Navbar bg="light" expand="lg">
        <h3>Skills</h3>
      </Navbar>
      
      <Image src={SkillsLogo} alt="Subrata's skill" fluid rounded style={imageStyles}/>
      
    </div>
  );
} 

export default Skills;
