import React from 'react';
import Button from '@components/common/Button.jsx';
import food from '@icons/food.svg';
import envio from '@icons/envio.svg';
import money from '@icons/money.svg';
import '@styles/components/PromoCard.scss';

function PromoCard({
  nombre,
  descripcion,
  from,
  fecha,
  precio,
  img,
  disponible,
}) {
  const msg = `https://api.whatsapp.com/send?phone=+50494504185&text=Hola, quiero hacer un pedido de ${nombre} de ${from} de la promoción del Luna Food Fest&source=&data=`;

  return (
    <div className="promo-card">
      <img className="food" src={img} alt={nombre} />
      <div className="text-container">
        <p className="title">{nombre}</p>
        <p className="descripcion">{descripcion}</p>
        <div className="current-info">
          <p>
            <span>from </span>
            {from}
          </p>
          <p>
            <span>disponible </span>
            {fecha}
          </p>
        </div>
        <div className="price-info">
          <img src={food} alt="" />
          <p>Comida: {precio} L</p>
        </div>
        <div className="price-info">
          <img src={envio} alt="" />
          <p>Envio: 20 L (35% de descuento)</p>
        </div>
        <div className="price-info">
          <img src={money} alt="" />
          <p>Total: {precio + 20} L</p>
        </div>
      </div>
      {disponible && <Button text="pedir" link={msg} />}
    </div>
  );
}

export default PromoCard;
