import React from 'react';
import flecha from '@img/flecha.png';
import '@styles/containers/Background.scss';

function Background() {
  return (
    <div className="background">
      <img src={flecha} />
      <img src={flecha} />
    </div>
  );
}

export default Background;
