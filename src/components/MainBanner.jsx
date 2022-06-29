import React from 'react';
import Button from '@components/common/Button';

import '@styles/components/MainBanner.scss';

function MainBanner() {
  return (
    <section className="MainBanner">
      <div className="content">
        <h1>envíos hasta la puerta de tu casa</h1>
        <p>Haz tu pedido ya llenando nuestro formulario:</p>
        <Button
          className="MainBanner__button"
          text="Pide Ahora"
          link="/Pedidos"
          routing
        />
      </div>
    </section>
  );
}

export default MainBanner;
