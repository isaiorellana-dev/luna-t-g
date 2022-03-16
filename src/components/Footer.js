import React from "react";
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
            <img src={WhatsApp}></img>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <img src={logo}></img>
          <ul>
            <li>Inicio</li>
            <li>Servicios</li>
            <li>Sobre Nosotros</li>
            <li>Personal</li>
            <li>Contacto</li>
          </ul>
          <div>
            <p>llamanos</p>
            <ul>
              <li>
                <a href="tel:+504 9450-4185">+504 9450-4185</a>
              </li>
            </ul>
          </div>
          <div className="social">
            <img src={instagram}></img>
            <img src={facebook}></img>
            <img src={WhatsApp}></img>
          </div>
        </React.Fragment>
      )}
    </footer>
  );
};

export default Footer;
