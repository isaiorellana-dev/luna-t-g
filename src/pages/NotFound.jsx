import React from 'react';
import Button from '@components/common/Button';
import Err from '@img/404-Luna.png';
import '@styles/pages/NotFound.scss';

function NotFound() {
  return (
    <section className="not-found">
      <img src={Err} className="img" />
      <div className="content">
        <Button className="MainBanner__button" text="Inicio" link="/" routing />
      </div>
    </section>
  );
}

export default NotFound;
