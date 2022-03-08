import React from "react";
import "@styles/components/Header.scss";
import logo from "@img/logo.png";

const Header = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [toggleMenu, setToggleMenu] = React.useState(false);

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const isMobile = () => {
    if (windowWidth < 760) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <header>
      <img src={logo}></img>
      <nav className={`${!isMobile() || toggleMenu ? null : "hide"}`}>
        <ul>
          <li>Inicio</li>
          <li>Servicios</li>
          <li>Sobre Nosotros</li>
          <li>Personal</li>
          <li>Contacto</li>
        </ul>
      </nav>
      {isMobile() && (
        <button
          className={`${toggleMenu ? "equis" : "burger"}`}
          id="btn-menu"
          onClick={handleToggleMenu}
        />
      )}
    </header>
  );
};

export default Header;
