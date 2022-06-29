import React from 'react';
import '@styles/components/common/IconServices.scss';

function IconServices(props) {
  return (
    <div className="icons-services">
      <div className="icons-services__img-container">
        <img src={props.src} />
      </div>
      <h3>{props.text}</h3>
    </div>
  );
}

export default IconServices;
