import React from "react";
import "@styles/components/common/IconServices.scss";

const IconServices = (props) => {
  return (
    <div className="icons-services">
      <div className="icons-services__img-container">
        <img src={props.src}></img>
      </div>
      <h3>{props.text}</h3>
    </div>
  );
};

export default IconServices;
