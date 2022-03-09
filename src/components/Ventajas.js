import React from "react";
import Button from "@components/common/Button";
import rapido from "@icons/reloj.svg";
import seguro from "@icons/seguro.png";
import profesional from "@icons/profesional.png";
import "@styles/components/Ventajas.scss";

const Ventajas = () => {
  return (
    <section className="Ventajas__banner">
      <div className="Ventajas__left">
        <h1>Ventajas de utilizar nuestro servicio</h1>
        {/* <Button
          className="Ventajas__button"
          text="llama ya!!"
          link="Contacto"
        /> */}
      </div>
      <div className="Ventajas__right">
        <div>
          <div className="seguro__icon Ventajas__circle">
            <img src={seguro} alt="seguro" />
          </div>
          <h2>Seguro y confiable</h2>
        </div>
        <div>
          <div className="profesional__icon Ventajas__circle">
            <img src={profesional} alt="profesional" />
          </div>
          <h2>Servicio profesional</h2>
        </div>
        <div>
          <div className="rapido__icon Ventajas__circle">
            <img src={rapido} alt="rapido" />
          </div>
          <h2>Ahorras tiempo y esfuerzo</h2>
        </div>
      </div>
    </section>
  );
};

export default Ventajas;
