import React from 'react';
import Button from '@components/common/Button.jsx';
import marys from '@img/marys-ribs.jpg';
import food from '@icons/food.svg';
import envio from '@icons/envio.svg';
import money from '@icons/money.svg';
import '@styles/components/PromoCard.scss';

function PromoCard() {
  return (
    <div className="promo-card">
      <img className="food" src={marys} alt="marys-ribs" />
      <div className="text-container">
        <p className="title">Baby ribs en salsa BBQ</p>
        <p className="descripcion">
          Costillas BBQ, pure de papa, Arroz blanco, salsa ranch, salsa de
          jalapeño y ensalada.
        </p>
        <div className="current-info">
          <p>
            <span>from </span>Mary's Grill
          </p>
          <p>
            <span>disponible </span>8/7/22
          </p>
        </div>
        <div className="price-info">
          <img src={food} alt="" />
          <p>Comida: 160 L</p>
        </div>
        <div className="price-info">
          <img src={envio} alt="" />
          <p>Envio: 20 L (35% de descuento)</p>
        </div>
        <div className="price-info">
          <img src={money} alt="" />
          <p>Total: 180 L</p>
        </div>
      </div>
      <Button text="pedir" />
    </div>
  );
}

export default PromoCard;
