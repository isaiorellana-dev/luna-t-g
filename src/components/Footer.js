import React from "react";
import { Link } from "react-router-dom";
import logo from "@img/logo.png";
import "@styles/components/Footer.scss";
import instagram from "@icons/instagram.png";
import facebook from "@icons/facebook.png";
import WhatsApp from "@icons/whatsapp.png";

const Footer = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  const isMobile = () => {
    if (windowWidth < 600) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <footer>
      {isMobile() ? (
        <React.Fragment>
          <img src={logo}></img>
          <div className="social">
            <img src={instagram}></img>
            <img src={facebook}></img>
            {/* <img src={WhatsApp}></img> */}
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Link to="/">
            <img src={logo}></img>
          </Link>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="Servicios">Servicios</Link>
            </li>
            <li>
              <Link to="SobreNosotros">Sobre Nosotros</Link>
            </li>
            <li>
              <Link to="Pedidos">Pedidos</Link>
            </li>
            <li>
              <Link to="Personal">Personal</Link>
            </li>
          </ul>
          <div>
            <p>llamanos</p>
            <ul>
              <li>
                <a href="tel:+504 9450-4185">Morazán: +504 9450-4185</a>
              </li>
              <li>
                <a href="tel:+504 9635-2170">El Negrito: +504 9635-2170</a>
              </li>
            </ul>
          </div>
          <div className="social">
            <a href="https://www.instagram.com/luna.togo/">
              <img src={instagram}></img>
            </a>
            <a href="https://www.facebook.com/Luna-To-Go-100482718981784">
              <img src={facebook}></img>
            </a>
          </div>
        </React.Fragment>
      )}
    </footer>
  );
};

export default Footer;
