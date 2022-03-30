import React from "react";
import internacional from "@img/inter.avif";
import rosty from "@img/rosty.avif";
import superpollos from "@img/superpollos.avif";
import chino from "@img/chino.avif";
import chyrs from "@img/chyrs.avif";
import profegrill from "@img/profe.avif";
import danielBolsa from "@img/guillermo-chavito.avif";
import Background from "@containers/Background";
import "@styles/components/Restaurantes.scss";

const Restaurantes = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  const isMobile = (size) => {
    if (windowWidth < size) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <section className="restaurantes">
      {isMobile(470) ? (
        // * Nueva estructura de componente mobile
        <React.Fragment>
          <div className="restaurantes__left">
            <img className="daniel-bolsa" src={danielBolsa}></img>
          </div>
          <div className="restaurantes__right">
            <h2>apoya la gastronomía local</h2>
            <div className="restaurantes__right--img-container-animated">
              <div className="img"></div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        // * Estructura de componente desktop
        <React.Fragment>
          <div className="restaurantes__left">
            <img className="daniel-bolsa" src={danielBolsa}></img>
          </div>
          <div className="restaurantes__right">
            <h2>apoya la gastronomía local</h2>
            <div className="restaurantes__right--img-container">
              <img src={internacional}></img>
              <img src={superpollos}></img>
              <img src={rosty}></img>
              <img src={chino}></img>
              <img src={chyrs}></img>
              <img src={profegrill}></img>
            </div>
          </div>
          {!isMobile(1200) && <Background />}
        </React.Fragment>
      )}
    </section>
  );
};

export default Restaurantes;
