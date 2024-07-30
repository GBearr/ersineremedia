import React from "react";
import { HeaderComponent } from "./HeaderComponent";
import { BodyComponent } from "./BodyComponent";
import { FooterComponent } from "./FooterComponent";
import { BannerComponent } from "./BannerComponent";

export const MainPageComponent = () => {
  return (
    <section className="layout">
      <div className="header">
        <HeaderComponent />
      </div>
      <div className="banner">
        <BannerComponent />
      </div>
      <div className="body">
        <BodyComponent />
      </div>
      <div className="footer">
        <FooterComponent />
      </div>
    </section>
  );
};
