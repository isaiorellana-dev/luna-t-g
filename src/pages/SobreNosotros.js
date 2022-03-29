import React from "react";
import grupal from "@img/grupal-1.png";
import "@styles/pages/SobreNosotros.scss";

const SobreNosotros = () => {
  return (
    <section className="sobre-nosotros__container">
      <h1>Sobre Nosotros</h1>
      <div>
        <img src={grupal}></img>

        <div>
          <h2>Misión</h2>
          <p>
            Brindar un servicio de entrega de forma rápida, segura y confiable,
            con una solución efectiva para realizar y recibir envíos sin tener
            que salir de casa.
          </p>
          <h2>Visión</h2>
          <p>
            Ser una empresa líder en el mercado de delivery, que aporte una
            solución a los negocios que hacen progresar el comercio de la zona y
            a las personas que buscan nuevas maneras de aprovechar su tiempo.
          </p>
        </div>
        <p>
          Luna to go es un servicio de delivery, fundado en 2020 por Roger Luna
          en la ciudad de Morazán, Yoro. Brindando a la comunidad local una
          solución efectiva para realizar envíos de forma rápida, segura y lo
          mas importante sin tener que salir de casa. Luna To Go contribuyo a
          que el comercio siguiera saliendo adelante a pesar de la pandemia, ya
          que durante la cuarentena la gente no podia ir a lugares cerrados ni
          hacer aglomeraciones, pero la gente necesitaba realizar compras, hacer
          envíos, mandados... etc, para todos esos problemas estuvo Luna to go
          dando una solución que le quitara a la gente el riesgo de exponerse
          ante el virus. El negocio ha sido no solo un éxito para nosotros si no
          también es un recurso mas para los negocios de la comunidad, con el
          éxito y crecimiento de nuestro servicio ha surgido una nueva
          oportunidad de empleo para muchos jóvenes de la ciudad.
        </p>
      </div>
    </section>
  );
};

export default SobreNosotros;
