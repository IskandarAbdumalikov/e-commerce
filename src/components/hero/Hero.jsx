import React from 'react'
import hero from "../../assets/hero.svg";


const Hero = () => {
  return (
    <div>
      <div className="hero container">
        <img src={hero} alt="" />
      </div>
    </div>
  );
}

export default Hero