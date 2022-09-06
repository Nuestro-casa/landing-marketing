import React from "react";
import logo from "../../assets/header.png";
import "./Header.scss";
function Header() {
  return (
    <nav className="header">
      <img src={logo} alt="Logotipo de Nuestro" />
    </nav>
  );
}

export default Header;
