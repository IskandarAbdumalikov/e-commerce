import React from "react";
import "./hero.scss";
import hero from "../../assets/images/hero.svg";

const Hero = () => {
  return (
    <div>
      <div id="hero">
        <div className="hero  container">
          <div className="hero__left ">
            <img src={hero} alt="" />
          </div>
          <div className="hero__right">
            <h1>Free delivery from 1000 ₽</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
