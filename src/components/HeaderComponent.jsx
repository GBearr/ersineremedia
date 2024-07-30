import React from "react";
import logo from "../assets/img/unnamed.png";
import "../assets/styles/HeaderComponent.css";

export const HeaderComponent = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src={logo} alt="ersineremmedia" />
      </div>
      <nav className="buttons">
        <a href="#">Ana Sayfa</a>
        <a href="#">Kurumsal</a>
        <a href="#">Hizmetler</a>
        <a href="#">S.S.S</a>
        <a href="#">İletişim</a>
      </nav>
    </div>
  );
};
