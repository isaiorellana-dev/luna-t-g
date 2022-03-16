import React from "react";
import Button from "@components/common/Button";
import rapido from "@icons/reloj.svg";
import seguro from "@icons/seguro.png";
import Background from "@containers/Background";
import profesional from "@icons/profesional.png";
import "@styles/components/Ventajas.scss";

const Ventajas = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  const isMobile = (size) => {
    if (windowWidth < size) {
      return true;
    } else {
      return false;
    }
  };

  const clasesImg = ["img-1", "img-2", "img-3", "img-4", "img-5"];
  const [indexImg, setIndexImg] = React.useState(0);

  function next() {
    indexImg === 0 ? setIndexImg(2) : setIndexImg(indexImg - 1);
    return indexImg;
  }

  let timer;
  const updateTimer = () => {
    timer = setInterval(() => {
      next();
    }, 3500);
  };

  React.useEffect(() => {
    updateTimer();

    return () => clearInterval(timer);
  }, [indexImg]);

  return (
    <section className="Ventajas__banner">
      {!isMobile(450) && (
        <React.Fragment>
          {!isMobile(1420) && <Background />}
          <div className="Ventajas__left">
            <h2>Ventajas de utilizar nuestro servicio</h2>
            <Button
              className="Ventajas__button"
              text="llama ya!!"
              link="Contacto"
            />
          </div>
          <div className="Ventajas__right">
            <div>
              <div className="seguro__icon Ventajas__circle">
                <img src={seguro} alt="seguro" />
              </div>
              <h3>Seguro y confiable</h3>
            </div>
            <div>
              <div className="profesional__icon Ventajas__circle">
                <img src={profesional} alt="profesional" />
              </div>
              <h3>Servicio profesional</h3>
            </div>
            <div>
              <div className="rapido__icon Ventajas__circle">
                <img src={rapido} alt="rapido" />
              </div>
              <h3>Ahorras tiempo y esfuerzo</h3>
            </div>
          </div>
        </React.Fragment>
      )}
      {isMobile(450) && (
        <React.Fragment>
          <div className="Ventajas__left">
            <h1>Ventajas de utilizar nuestro servicio</h1>
          </div>
          <div className="Ventajas__right slider">
            <div className="img--container">
              <div className={`container ${clasesImg[indexImg]}`}>
                <div className={`seguro__icon Ventajas__circle`}>
                  <img src={seguro} alt="seguro" />
                </div>
                <h3>Seguro y confiable</h3>
              </div>
              <div
                className={`container ${
                  clasesImg[indexImg === 2 ? 0 : indexImg + 1]
                } `}
              >
                <div className={`profesional__icon Ventajas__circle`}>
                  <img src={profesional} alt="profesional" />
                </div>
                <h3>Servicio profesional</h3>
              </div>
              <div
                className={`container ${
                  clasesImg[indexImg === 0 ? 2 : indexImg - 1]
                } `}
              >
                <div className={`rapido__icon Ventajas__circle`}>
                  <img src={rapido} alt="rapido" />
                </div>
                <h3>Ahorras tiempo y esfuerzo</h3>
              </div>
            </div>
            <Button
              className="Ventajas__button"
              text="llama ya!!"
              link="Contacto"
            />
          </div>
        </React.Fragment>
      )}
    </section>
  );
};

export default Ventajas;
