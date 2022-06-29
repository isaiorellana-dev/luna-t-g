import { React, Fragment } from 'react';

import '@styles/components/ServiciosCard.scss';

function ServiciosCard({ titulo, text, img, clase }) {
  return (
    <article className={clase}>
      <div className="text-container">
        <h2>{titulo}</h2>
        <p>{text}</p>
      </div>
      <div className="img-container">
        <img src={img} alt="luna-to-go" />
      </div>
    </article>
  );
}

export default ServiciosCard;
