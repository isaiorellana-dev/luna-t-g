import React from "react";
import flecha from "@img/flecha.png";
import "@styles/containers/Background.scss";

const Background = () => {
  return (
    <div className="background">
      <img src={flecha}></img>
      <img src={flecha}></img>
    </div>
  );
};

export default Background;
