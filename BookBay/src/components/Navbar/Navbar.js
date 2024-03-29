import React from "react";
import "./Navbar.css";

const Navbar = ({ setCurrentContent }) => {
  const liStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    color: "#7D7D7D",
    fontWeight: 400,
    textTransform: "uppercase",
    cursor: "pointer",
  };

  return (
    <div>
      <div className="container-nav">
        <div className="logo">
          <h1>BookBay</h1>
        </div>
        <div className="nav-lista">
          <ul>
            <li style={liStyle} onClick={() => setCurrentContent("home")}>
              Todos
            </li>
            <li style={liStyle} onClick={() => setCurrentContent("topPicks")}>
              Destaques
            </li>
            <li style={liStyle} onClick={() => setCurrentContent("cart")}>
              <i className="fas fa-shopping-cart"></i>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
