import React from 'react';
import LFFlogo from '@img/Logo 1.png';
import Button from '@components/common/Button';
import LFFInfo from './LFFInfo';
import { Outlet } from 'react-router-dom';

import '@styles/components/MainBanner.scss';

function MainBanner() {
  return (
    <>
      <section className="MainBanner">
        <div className="content">
          <h1>Celebra nuestro primer aniversario con el:</h1>
          <img src={LFFlogo}></img>
          <Button
            className="MainBanner__button"
            text="Mas Información"
            link="/luna-food-fest"
            routing
          />
        </div>
      </section>
      <Outlet>
        <LFFInfo />
      </Outlet>
    </>
  );
}

export default MainBanner;
