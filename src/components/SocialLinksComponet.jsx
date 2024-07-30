import React from "react";
import "../assets/styles/SocialLinksComponent.css";

export const SocialLinks = () => {
  return (
    <ul className="social-links">
      <li>
        <a href="#">
          <i class="fa fa-brands fa-facebook-f"></i>
          <span> - Facebook</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-brands fa-x-twitter"></i>
          <span> - X</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-brands fa-instagram"></i>
          <span> - Instagram</span>
        </a>
      </li>
    </ul>
  );
};
