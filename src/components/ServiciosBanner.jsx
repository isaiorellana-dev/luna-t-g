import React from 'react';
import medicina from '@img/medicina.png';
import mercado from '@img/mercado.png';
import regalo from '@img/regalo.png';
import paquetes from '@img/paquetes.png';
import transacciones from '@img/transacciones.png';
import ferreteria from '@img/ferreteria.png';
import bebidas from '@img/bebidas.png';
import comida from '@img/comida.png';
import Background from '@containers/Background';
import IconServices from './common/IconServices';

import '@styles/components/ServiciosBanner.scss';

function ServiciosBanner() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

  const isMobile = (size) => {
    if (windowWidth < size) {
      return true;
    }
    return false;
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
}

export default ServiciosBanner;
