import React from "react";
import logo from "@img/logo.png";
import "@styles/components/Footer.scss";
import instagram from "@icons/instagram.png";
import facebook from "@icons/facebook.png";
import whatsapp from "@icons/whatsapp.png";

const Footer = () => {
  return (
    <footer>
      <img src={logo}></img>
      <div className="social">
        <img src={instagram}></img>
        <img src={facebook}></img>
        <img src={whatsapp}></img>
      </div>
    </footer>
  );
};

export default Footer;
