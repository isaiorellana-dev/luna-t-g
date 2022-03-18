import React from "react";
import chavito from "@img/chavito-mochila.png";
import "@styles/pages/SobreNosotros.scss";

const SobreNosotros = () => {
  return (
    <section className="sobre-nosotros__container">
      <h1>Sobre Nosotros</h1>
      <div>
        <img src={chavito}></img>
        <p>
          lorem ipsum dolor sit amet consectetur adipiscing elit montes rutrum
          placerat orci efficitur sed conubia vitae platea neque pretium
          venenatis turpis eros libero pellentesque tincidunt interdum lectus
          porta facilisi odio quam magna sagittis accumsan aliquam nullam diam
          nec pulvinar sapien gravida fringilla nam nunc suspendisse fames at
          donec tortor justo hac ac quis tempus dictumst vestibulum sociosqu
          luctus congue laoreet ex elementum dapibus praesent enim litora metus
          ligula lacus nascetur iaculis sodales tristique class facilisis
          aliquet lacinia tempor cursus himenaeos auctor arcu mattis nisi nostra
          potenti mollis ullamcorper penatibus molestie sollicitudin aptent sem
          maecenas convallis posuere ad dignissim magnis velit
        </p>
        <p>
          lorem ipsum dolor sit amet consectetur adipiscing elit montes rutrum
          placerat orci efficitur sed conubia vitae platea neque pretium
          venenatis turpis eros libero pellentesque tincidunt interdum lectus
          porta facilisi odio quam magna sagittis accumsan aliquam nullam diam
          nec pulvinar sapien gravida fringilla nam nunc suspendisse fames at
          donec tortor justo hac ac quis tempus dictumst vestibulum sociosqu
          luctus congue laoreet ex elementu
        </p>
      </div>
    </section>
  );
};

export default SobreNosotros;
