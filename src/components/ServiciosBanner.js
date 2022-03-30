import React from "react";
import IconServices from "./common/IconServices";
import medicina from "@img/medicina.avif";
import mercado from "@img/mercado.avif";
import regalo from "@img/regalo.avif";
import paquetes from "@img/paquetes.avif";
import transacciones from "@img/transacciones.avif";
import ferreteria from "@img/ferreteria.avif";
import bebidas from "@img/bebidas.avif";
import comida from "@img/comida.avif";
import Background from "@containers/Background";

import "@styles/components/ServiciosBanner.scss";

const ServiciosBanner = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  const isMobile = (size) => {
    if (windowWidth < size) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <section className="services-banner">
      <div className="services-banner__title-container">
        <h2>Todo al alcance de tu mano</h2>
      </div>
      <div className="services-banner__icons-container">
        <IconServices src={medicina} text="Medicinas" />
        <IconServices src={mercado} text="Mercado" />
        <IconServices src={regalo} text="Regalos" />
        <IconServices src={paquetes} text="Paquetes" />
        <IconServices src={transacciones} text="Banco" />
        <IconServices src={ferreteria} text="Ferretería" />
        <IconServices src={comida} text="Comida" />
        <IconServices src={bebidas} text="Bebidas" />
      </div>
      {!isMobile(1200) && <Background />}
    </section>
  );
};

export default ServiciosBanner;
