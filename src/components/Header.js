import React from "react";
import { Link } from "react-router-dom";
import "@styles/components/Header.scss";
import logo from "@img/logo.png";

const Header = () => {
  //* Estados de React
  // 1. Estado para saber el ancho de la ventana
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  // 2. Estado para abrir y cerrar el menu, el parámetro entre paréntesis es el valor inicial por defecto
  const [toggleMenu, setToggleMenu] = React.useState(false);

  // 3. Evento para saber cuando se cambia el ancho de la ventana, cuando cambia este evento actualiza el valor del estado creado arriba en el inciso 1.
  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  // 4. Función para actualizar el estado del menu (inciso 2).
  const handleToggleMenu = () => {
    // AL llamar esta función se actualiza el estado del menu cambiando su valor, si esta en true se cambia a false y viceversa.
    setToggleMenu(!toggleMenu);
  };

  // 5. Función para saber si el ancho de la ventana es menor a un valor dado.
  const isMobile = (size) => {
    // Utiliza el valor del estado creado en el inciso 1 para comprobar si es menor a un valor dado.
    if (windowWidth < size) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <header>
      <img src={logo}></img>
      <nav className={`${!isMobile(760) || toggleMenu ? null : "hide"}`}>
        <ul>
          <li>
            <Link to="/" onClick={handleToggleMenu}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="Servicios" onClick={handleToggleMenu}>
              Servicios
            </Link>
          </li>
          <li>
            <Link to="SobreNosotros" onClick={handleToggleMenu}>
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link to="Pedidos" onClick={handleToggleMenu}>
              Pedidos
            </Link>
          </li>
          <li>
            <Link to="Contacto" onClick={handleToggleMenu}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      {
        //* Botón hamburguesa, se renderiza solo si el tamaño de la ventana es menor a 760px. y contiene en el evento onClick la función para abrir o cerrar el menu.
        isMobile(760) && (
          <button
            className={`${toggleMenu ? "equis" : "burger"}`}
            id="btn-menu"
            onClick={handleToggleMenu}
          />
        )
      }
    </header>
  );
};

export default Header;
