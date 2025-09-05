import React, { useState  } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Typed from 'typed.js';

function Whatsapp() {


  return (
    <div >
      <a
        href="https://wa.me/+923265167490?text="
        target=" _blank"
        rel="noreferrer"
        id="whatsapp"
        className="btn1"
      >
        
     
          <FontAwesomeIcon icon={faWhatsapp} shake style={{color: "#ffffff",marginTop:"39px"}} /> 
                
      </a>
    </div>
  );
}

export default Whatsapp;