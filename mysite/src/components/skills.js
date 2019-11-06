import React from 'react';
import SkillsLogo from '../skills.svg';
import Image from 'react-bootstrap/Image'
function Skills() {
  var imageStyles = {
    width: '75%',
    height: '75%',
  };
  return (
    <div id="skills" className="text-white text-center">
      
      <Image src={SkillsLogo} alt="Subrata's skill" fluid rounded style={imageStyles}/>
      
    </div>
  );
} 

export default Skills;
