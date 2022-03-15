import React from "react";
import MainBanner from "@components/MainBanner";
import Ventajas from "@components/Ventajas";
import Restaurantes from "@components/Restaurantes";
import ServiciosBanner from "@components/ServiciosBanner";

const Inicio = () => {
  return (
    <React.Fragment>
      <MainBanner />
      <Ventajas />
      <Restaurantes />
      <ServiciosBanner />
    </React.Fragment>
  );
};

export default Inicio;
