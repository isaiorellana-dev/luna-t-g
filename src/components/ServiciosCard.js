import { React, Fragment } from "react";
import chavito from "@img/chavito.png";
import "@styles/components/ServiciosCard.scss";

const ServiciosCard = () => {
  return (
    <Fragment>
      <article>
        <div>
          <h2>Envíos</h2>
          <p>
            lorem ipsum dolor sit amet consectetur adipiscing elit vehicula
            inceptos praesent sollicitudin iaculis imperdiet donec auctor
            potenti aenean rhoncus euismod diam elementum parturient integer
            convallis feugiat libero blandit suscipit ridiculus maximus cras
            justo netus luctus posuere quisque vestibulum porttitor ut semper
            dui facilisis
          </p>
        </div>
        <div>
          <img src={chavito}></img>
        </div>
      </article>
    </Fragment>
  );
};

export default ServiciosCard;
