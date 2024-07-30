import React from "react";
import logo from "../assets/img/unnamed.png";

import "../assets/styles/BannerComponent.css";

export const BannerComponent = () => {
  return (
    <div className="banner-container">
      <div className="rectangle-1"></div>
      <div className="rectangle-2"></div>
      <div className="rectangle-transparent-1"></div>
      <div className="rectangle-transparent-2"></div>
      <div className="rectangle-up-1"></div>
      <div className="rectangle-up-2"></div>
      <div className="rectangle-up-3"></div>
      <div className="circle-1"></div>
      <div className="circle-2"></div>
      <div className="circle-3"></div>
      <div className="body-logo">
        <img src={logo} alt="ersineremmedia" />
      </div>
    </div>
  );
};
