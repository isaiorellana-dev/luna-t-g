import { React, Fragment } from "react";
import ServiciosCard from "@components/ServiciosCard";
import chavito from "@img/chavito.png";
import Button from "@components/common/Button";
import "@styles/pages/Servicios.scss";
const Servicios = () => {
  return (
    <Fragment>
      <section className="servicios__first-container">
        <ServiciosCard
          titulo="Envíos"
          text="lorem ipsum dolor sit amet consectetur adipiscing elit vehicula
            inceptos praesent sollicitudin iaculis imperdiet donec auctor
            potenti aenean rhoncus euismod diam elementum parturient integer
            convallis feugiat"
          img={chavito}
        />
        <ServiciosCard
          titulo="Compras"
          text="lorem ipsum dolor sit amet consectetur adipiscing elit vehicula
            inceptos praesent sollicitudin iaculis imperdiet donec auctor
            potenti aenean rhoncus euismod diam elementum parturient integer
            convallis feugiat"
          img={chavito}
        />
        <ServiciosCard
          titulo="Transacciones Bancarias"
          text="lorem ipsum dolor sit amet consectetur adipiscing elit vehicula
            inceptos praesent sollicitudin iaculis imperdiet donec auctor
            potenti aenean rhoncus euismod diam elementum parturient integer
            convallis feugiat"
          img={chavito}
        />
      </section>
      <section className="servicios__second-container">
        <div>
          <h2>Horarios</h2>
          <p>
            lorem ipsum dolor sit amet consectetur adipiscing elit vehicula
            inceptos praesent sollicitudin iaculis imperdiet
          </p>
        </div>
        <div>
          <h2>Que esperas?</h2>
          <Button
            className="MainBanner__button"
            text="Llama Ya!!"
            link="Servicios"
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Servicios;
