import React from "react";
import PersonalBanner from "@components/PersonalBanner";
import fotoUno from "@img/personal-1.avif";
import fotoDos from "@img/personal-2.avif";
import fotoTres from "@img/personal-3.avif";
import fotoCuatro from "@img/personal-4.avif";
import fotoCinco from "@img/personal-5.avif";
import fotoSeis from "@img/personal-6.avif";
import "@styles/pages/Personal.scss";

const Personal = () => {
  return (
    <React.Fragment>
      <PersonalBanner />
      <section className="personal__img-container">
        <img src={fotoUno}></img>
        <img src={fotoDos}></img>
        <img src={fotoTres}></img>
        <img src={fotoCuatro}></img>
        <img src={fotoCinco}></img>
        <img src={fotoSeis}></img>
      </section>
    </React.Fragment>
  );
};

export default Personal;
