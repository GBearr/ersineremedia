import React from "react";
import "../assets/styles/FooterComponent.css";
import logo from "../assets/img/unnamed.png";
import { SocialLinks } from "./SocialLinksComponet";

export const FooterComponent = () => {
  return (
    <footer>
      <div class="content">
        <div class="top">
          <img className="footer--logo" src={logo} alt="" />
        </div>
        <div class="link-boxes">
          <ul class="box">
            <p>
              Ersin Erem Media, dijital dünyada öne çıkan markaların arkasındaki
              güçlü ve yaratıcı bir ekip tarafından kurulmuş bir dijital
              pazarlama ajansıdır. Markaların dijital varlıklarını
              şekillendirmeleri, büyümeleri ve başarıya ulaşmaları için özgün ve
              etkili çözümler sunmayı amaç edinmiştir.
            </p>
          </ul>
          <ul class="box">
            <li class="link_name top">Adres</li>
            <li>
              <p href="#">İstanbul / Avrupa</p>
            </li>
            <li>
              <p href="#">90 541 605 75 00</p>
            </li>
            <li>
              <p href="#">info@ersineremedia.com</p>
            </li>
          </ul>
          <ul class="box input-box">
            <li class="link_name">Abone Ol</li>
            <li>
              <input type="text" placeholder="E Mail Adresiniz" />
            </li>
            <li>
              <input type="button" value="Abone Ol" />
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom-details"></div>
    </footer>
  );
};
