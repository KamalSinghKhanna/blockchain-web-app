import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <div className="footer-logo">
          <img
            src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/02/white-acco-logo.png"
            alt=""
            className="logo"
          />
        </div>
        <div className="footer-menu1">
          <ul className="navbar-menu">
            <li>Home</li>
            <li>About Us</li>
            <li>Destination</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-menu2">
          <ul className="navbar-menu">
            <li>Privacy Policy</li>
            <li>Terms Condition</li>
          </ul>
        </div>
      </div>
      <span>© 2022 Blockchain website</span>
    </div>
  );
};

export default Footer;
