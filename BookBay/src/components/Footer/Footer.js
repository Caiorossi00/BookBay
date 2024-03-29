import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="copy">
        <p>2024 Copyright Vision · Powered by Caio Rossi</p>
      </div>
      <div className="socials">
        <a
          href="https://www.instagram.com/caio_.rossi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://wa.me/53984158694"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
