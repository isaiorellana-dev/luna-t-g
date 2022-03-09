import React from "react";
import ñikiti from "@img/MainBanner.jpg";
import Button from "@components/common/Button";

import "@styles/components/MainBanner.scss";

const MainBanner = () => {
  return (
    <section className="MainBanner">
      {/* <picture>
        <source src=""></source>
        <img src={ñikiti}></img>
      </picture> */}
      <div className="content">
        <h1>envíos hasta la puerta de tu casa</h1>
        <p>Conoce a fondo nuestro servicio:</p>
        <Button
          className="MainBanner__button"
          text="Servicios"
          link="Servicios"
        />
      </div>
    </section>
  );
};

export default MainBanner;
