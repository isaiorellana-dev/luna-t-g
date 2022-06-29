import React from 'react';

function useMobile(size) {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  // const [isMobile, setIsMobile] = React.useState(false);

  window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

  const isMobile = () => {
    if (windowWidth < size) {
      return true;
    }
    return false;
  };

  return isMobile;
}

export { useMobile };
