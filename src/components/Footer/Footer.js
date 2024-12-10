import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="copy">
        <p>
          2024 Copyright Vision · Developed By<span> </span>
          <a
            href="https://www.instagram.com/caiorossi.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Caiorossi.dev
          </a>
        </p>
      </div>
      <div className="socials">
        <a
          href="https://www.instagram.com/caiorossi.dev/"
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
