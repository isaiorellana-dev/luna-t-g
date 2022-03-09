import React from "react";
import Button from "@components/common/Button";

import "@styles/components/MainBanner.scss";

const MainBanner = () => {
  return (
    <section className="MainBanner">
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
