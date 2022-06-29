import React from 'react';
import PersonalBanner from '@components/PersonalBanner';
import fotoUno from '@img/personal-1.png';
import fotoDos from '@img/personal-2.png';
import fotoTres from '@img/personal-3.png';
import fotoCuatro from '@img/personal-4.png';
import fotoCinco from '@img/personal-5.png';
import fotoSeis from '@img/personal-6.png';
import '@styles/pages/Personal.scss';

function Personal() {
  return (
    <>
      <PersonalBanner />
      <section className="personal__img-container">
        <img src={fotoUno} />
        <img src={fotoDos} />
        <img src={fotoTres} />
        <img src={fotoCuatro} />
        <img src={fotoCinco} />
        <img src={fotoSeis} />
      </section>
    </>
  );
}

export default Personal;
