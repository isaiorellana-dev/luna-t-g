import React from 'react';
import internacional from '@img/inter.jpg';
import rosty from '@img/rosty.jpg';
import superpollos from '@img/superpollos.jpg';
import chino from '@img/chino.jpg';
import chyrs from '@img/chyrs.jpg';
import profegrill from '@img/profe.jpg';
import danielBolsa from '@img/guillermo-chavito.png';
import Background from '@containers/Background';
import '@styles/components/Restaurantes.scss';

function Restaurantes() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

  const isMobile = (size) => {
    if (windowWidth < size) {
      return true;
    }
    return false;
  };

  return (
    <section className="restaurantes">
      {isMobile(470) ? (
        // * Nueva estructura de componente mobile
        <>
          <div className="restaurantes__left">
            <img className="daniel-bolsa" src={danielBolsa} />
          </div>
          <div className="restaurantes__right">
            <h2>apoya la gastronomía local</h2>
            <div className="restaurantes__right--img-container-animated">
              <div className="img" />
            </div>
          </div>
        </>
      ) : (
        // * Estructura de componente desktop
        <>
          <div className="restaurantes__left">
            <img className="daniel-bolsa" src={danielBolsa} />
          </div>
          <div className="restaurantes__right">
            <h2>apoya la gastronomía local</h2>
            <div className="restaurantes__right--img-container">
              <img src={internacional} />
              <img src={superpollos} />
              <img src={rosty} />
              <img src={chino} />
              <img src={chyrs} />
              <img src={profegrill} />
            </div>
          </div>
          {!isMobile(1200) && <Background />}
        </>
      )}
    </section>
  );
}

export default Restaurantes;
