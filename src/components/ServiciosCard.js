import { React, Fragment } from "react";

import "@styles/components/ServiciosCard.scss";

const ServiciosCard = ({ titulo, text, img, clase }) => {
  return (
    <Fragment>
      <article className={clase}>
        <div className="text-container">
          <h2>{titulo}</h2>
          <p>{text}</p>
        </div>
        <div className="img-container">
          <img src={img}></img>
        </div>
      </article>
    </Fragment>
  );
};

export default ServiciosCard;
