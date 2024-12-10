import React from "react";
import "./Navbar.css";

const Navbar = ({ setCurrentContent }) => {
  return (
    <div>
      <div className="container-nav">
        <div className="logo">
          <h1>BookBay</h1>
        </div>
        <div className="nav-lista">
          <ul>
            <li
              onClick={() => setCurrentContent("home")}
              className="routes-nav"
            >
              Todos
            </li>
            <li
              onClick={() => setCurrentContent("topPicks")}
              className="routes-nav"
            >
              Destaques
            </li>
            <li
              onClick={() => setCurrentContent("cart")}
              className="routes-nav"
            >
              <i className="fas fa-shopping-cart"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
