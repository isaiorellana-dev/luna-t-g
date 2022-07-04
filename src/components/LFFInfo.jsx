import React from 'react';
import '@styles/components/LFFInfo.scss';
import PromoCard from './PromoCard';

function LFFInfo() {
  return (
    <div className="lff">
      <div className="combos-info">
        <h2>Combos y promociones del Luna Food Fest</h2>
        <div className="cards-container">
          <PromoCard />
        </div>
      </div>

      <div>
        <h2>¿QUE ES EL LUNA FOOD FEST?</h2>
        <p>
          Son 5 días de combos y promociones de tus restaurantes favoritos en
          Morazán, Yoro a partir del lunes 4 de Julio.
          <br />
          <br /> El 5 de julio todos los pedidos tendrán un descuento del 35% en
          celebración de nuestro día de aniversario.
          <br />
          <br /> Cada día un restaurante diferente tendrá a la venta una
          promoción o un combo que será vendido exclusivamente por nuestro
          servicio de delivery (Para estar al tanto de las promociones te
          recomendamos que nos sigas en todas nuestras redes sociales).
          <br />
          <br />
          Cada vez que hagas un pedido de la promoción o combo del día, el envió
          tendrá un 35% de descuento.
          <br />
          <br /> Cada pedido que forme parte del LUNA FOOD FEST será calificado
          por nuestro clientes.
          <br />
          <br /> El día Sábado 9 de Julio se anunciara la promoción o el combo
          ganador según la valoración de nuestros clientes y la cantidad de
          ventas que genere.
          <br />
          <br /> El día 10 de Julio podrás disfrutar de nuevo del combo o
          promoción ganadora.
        </p>
      </div>
    </div>
  );
}

export default LFFInfo;
