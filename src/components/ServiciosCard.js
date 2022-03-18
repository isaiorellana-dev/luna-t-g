import { React, Fragment } from "react";

import "@styles/components/ServiciosCard.scss";

const ServiciosCard = ({ titulo, text, img }) => {
  return (
    <Fragment>
      <article>
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
