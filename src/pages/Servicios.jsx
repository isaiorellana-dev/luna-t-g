import { React, Fragment, useState } from 'react';
import ServiciosCard from '@components/ServiciosCard';
import rellenoUno from '@img/relleno-1.png';
import rellenoDos from '@img/relleno-2.png';
import rellenoTres from '@img/relleno-3.png';
import rellenoCuatro from '@img/relleno-4.png';
import transes from '@img/guillermo-mochila-300.png';
import transesLow from '@img/guillermo-mochila-190.png';
import comidaCard from '@img/comida-card-400.jpg';
import comidaCardLow from '@img/comida-card-300.jpg';
import superCard from '@img/supermercado-card-400.jpg';
import superCardLow from '@img/supermercado-card-300.jpg';
import envioCard from '@img/envio-card-400.jpg';
import envioCardLow from '@img/envio-card-300.jpg';
import Button from '@components/common/Button';
import '@styles/pages/Servicios.scss';

function Servicios() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

  const isMobile = (size) => {
    if (windowWidth < size) {
      return true;
    }
    return false;
  };
  return (
    <>
      <section>
        <h1>Nuestros Servicios:</h1>
        <div className="servicios__first-container">
          <ServiciosCard
            titulo="Comida"
            text="Te llevamos tu comida hasta la puerta de tu casa ya sea que tengas un pedido listo o nosotros mismos lo hacemos por ti, nos especializamos en cuidar la calidad y presentación de tus pedidos, además de seguridad brindamos rapidez para que tu comida llegue como recién salida de la cocina y puedas disfrutarla al máximo, para hacer uso de nuestro servicio solo hace falta tener hambre y nosotros hacemos el resto."
            img={isMobile(380) || !isMobile(750) ? comidaCardLow : comidaCard}
          />
          {!isMobile(750) && (
            <img src={rellenoUno} className="img-relleno" alt="luna-to-go" />
          )}
          <ServiciosCard
            titulo="Envíos"
            text="Llevamos tus pedidos hasta su destino, de manera rápida y segura, hacemos realidad un método efectivo para que puedas enviar tus productos o paquetería sin ningún tipo de preocupación, nos especializamos en la seguridad del producto hasta que llegue a su consumidor final, puedes utilizar nuestro servicio como cliente y vendedor, para realizar un envío solo hace falta un paquete y un destino, nosotros hacemos el resto."
            img={isMobile(380) || !isMobile(750) ? envioCardLow : envioCard}
          />
          {!isMobile(750) && (
            <img src={rellenoTres} className="img-relleno" alt="luna-to-go" />
          )}
          <ServiciosCard
            titulo="Compras"
            text="Realizamos tus compras de todo tipo, te ofrecemos un servicio de calidad y confianza para realizar tus compras en supermercado, bodegas, farmacias, ferreterías y tiendas de todo tipo, somos tu mejor opción para que no salgas de casa y realices tus compras de una manera fácil y segura, para realizar una compra solo hace falta una lista de productos y nosotros hacemos el resto."
            img={isMobile(380) || !isMobile(750) ? superCardLow : superCard}
          />
          {!isMobile(750) && (
            <img src={rellenoDos} className="img-relleno" alt="luna-to-go" />
          )}
          {!isMobile(750) && (
            <img
              src={rellenoCuatro}
              className="img-relleno"
              id="relleno-4"
              alt="luna-to-go"
            />
          )}
          <ServiciosCard
            titulo="Transacciones Bancarias"
            text="Si necesitas realizar un deposito o tramite bancario que no necesite de tu presencia, te ahorramos esas largas filas y hacemos tus tramites, nos comprometemos a velar por la seguridad de tus documentos, brindamos un servicio profesional y serio."
            img={isMobile(380) || !isMobile(750) ? transesLow : transes}
            clase="servicios__card--transacciones"
          />
        </div>
      </section>
      <section className="servicios__second-container">
        <div>
          <h2>Horarios</h2>
          <p>De Lunes a Domingo de 8 A.M a 9:30 P.M</p>
        </div>
        <div>
          <h2>¿Qué esperas?</h2>
          <Button
            className="MainBanner__button"
            text="Pide Ya!!"
            link="/Pedidos"
            routing
          />
        </div>
      </section>
    </>
  );
}

export default Servicios;
