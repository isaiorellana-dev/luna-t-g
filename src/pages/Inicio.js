import React from "react";
import MainBanner from "@components/MainBanner";
import Negrito from "@components/Negrito";
import Ventajas from "@components/Ventajas";
import Restaurantes from "@components/Restaurantes";
import ServiciosBanner from "@components/ServiciosBanner";

const Inicio = () => {
  return (
    <React.Fragment>
      <MainBanner />
      <Negrito />
      <Ventajas />
      <Restaurantes />
      <ServiciosBanner />
    </React.Fragment>
  );
};

export default Inicio;
