import React, { useState } from "react";
import logo from "../assets/img/unnamed.png";
import "../assets/styles/HeaderComponent.css";

export const HeaderComponent = () => {
  const [showKurumsalDropdown, setShowKurumsalDropdown] = useState(false);
  const [showHizmetlerDropdown, setShowHizmetlerDropdown] = useState(false);

  return (
    <div className="header-container">
      <div className="logo">
        <img src={logo} alt="ersineremmedia" />
      </div>
      <nav className="buttons">
        <a href="#">Ana Sayfa</a>

        <div
          className="dropdown"
          onMouseEnter={() => setShowKurumsalDropdown(true)}
          onMouseLeave={() => setShowKurumsalDropdown(false)}
        >
          Kurumsal
          <div
            style={{ display: showKurumsalDropdown ? "block" : "none" }}
            className="dropdown-content"
          >
            <a href="#">Hakkımızda</a>
            <a href="#">Gizlilik Politikası</a>
            <a href="#">KVKK Metni</a>
          </div>
        </div>

        <div
          className="dropdown"
          onMouseEnter={() => setShowHizmetlerDropdown(true)}
          onMouseLeave={() => setShowHizmetlerDropdown(false)}
        >
          Hizmetler
          <div
            style={{ display: showHizmetlerDropdown ? "block" : "none" }}
            className="dropdown-content"
          >
            <a href="#">Instagram Hesabım Kapandı</a>
            <a href="#">Instagram Hesabım Çalındı</a>
            <a href="#">Takipçi Hizmeti</a>
            <a href="#">Hesap Kapatma Hizmeti</a>
            <a href="#">Tiktok Hesabım Kapandı (Çözüm)</a>
          </div>
        </div>
        <a href="#">S.S.S</a>
        <a href="#">İletişim</a>
      </nav>
    </div>
  );
};
