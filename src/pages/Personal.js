import React from "react";
import PersonalBanner from "@components/PersonalBanner";
import fotoUno from "@img/personal-1.png";
import fotoDos from "@img/personal-2.png";
import fotoTres from "@img/personal-3.png";
import "@styles/pages/Personal.scss";

const Personal = () => {
  return (
    <React.Fragment>
      <PersonalBanner />
      <section className="personal__img-container">
        <img src={fotoUno}></img>
        <img src={fotoDos}></img>
        <img src={fotoTres}></img>
      </section>
    </React.Fragment>
  );
};

export default Personal;
