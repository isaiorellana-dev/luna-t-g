import React from "react";
import internacional from "@img/inter.png";
import rosty from "@img/rosty.png";
import superpollos from "@img/superpollos.png";
import chino from "@img/chino.png";
import chyrs from "@img/chyrs.png";
import profegrill from "@img/profe-grill.png";
import "@styles/components/Restaurantes.scss";

const Restaurantes = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  const isMobile = () => {
    if (windowWidth < 470) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <section className="restaurantes">
      <div className="restaurantes__left">
        <h2>apoya la gastronomía local</h2>
      </div>
      <div className="restaurantes__right">
        {isMobile() ? (
          <div className="restaurantes__right--img-container-animated">
            <div className="img"></div>
          </div>
        ) : (
          <div className="restaurantes__right--img-container">
            <img src={internacional}></img>
            <img src={superpollos}></img>
            <img src={rosty}></img>
            <img src={chino}></img>
            <img src={chyrs}></img>
            <img src={profegrill}></img>
          </div>
        )}
      </div>
    </section>
  );
};

export default Restaurantes;
