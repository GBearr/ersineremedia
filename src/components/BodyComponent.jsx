// BodyComponent.jsx
import React from "react";
import logo from "../assets/img/unnamed.png";
import { CardComponent } from "./CardComponent";

import "../assets/styles/BodyComponent.css";

export const BodyComponent = () => {
  return (
    <div className="body-container">
      <div className="card-container">
        <CardComponent />
      </div>
    </div>
  );
};
