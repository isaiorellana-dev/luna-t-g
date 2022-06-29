import React from 'react';
import MainBanner from '@components/MainBanner';
import Ventajas from '@components/Ventajas';
import Restaurantes from '@components/Restaurantes';
import ServiciosBanner from '@components/ServiciosBanner';

function Inicio() {
  return (
    <>
      <MainBanner />
      <Ventajas />
      <Restaurantes />
      <ServiciosBanner />
    </>
  );
}

export default Inicio;
