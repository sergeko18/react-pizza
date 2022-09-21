import React from "react";
import "./scss/footer.scss";
import like from "./assets/img/like.png";
import views from "./assets/img/view.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <button className="footer-wrapper__button">
        <img className="footer-wrapper__button_like" src={like} alt="like" />
        <div className="footer-wrapper__button_count">22</div>
      </button>

      <div className="footer-wrapper__logo">
        <div>SERGE PIZZA</div>
      </div>

      <div className="footer-wrapper__info">
        <div className="footer-wrapper__info_item">
          <img src={like} alt="like" />
          22
        </div>
        <div className="footer-wrapper__info_item">
          <img src={views} alt="views" />
          34
        </div>
      </div>

      <div className="footer-wrapper__published">
        Published: September 19th 2022
      </div>
    </div>
  );
};

export default Footer;
