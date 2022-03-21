import { React, Fragment } from "react";
import ServiciosCard from "@components/ServiciosCard";
import chavito from "@img/chavito.png";
import Button from "@components/common/Button";
import "@styles/pages/Servicios.scss";
const Servicios = () => {
  return (
    <Fragment>
      <section>
        <h1>Nuestros Servicios:</h1>
        <div className="servicios__first-container">
          <ServiciosCard
            titulo="Comida"
            text="Te llevamos tu comida hasta la puerta de tu casa ya sea que tengas 
            un pedido listo o nosotros mismos lo hacemos por ti, nos especializamos en cuidar 
            la calidad y presentación de tus pedidos, además de seguridad brindamos
             rapidez para que tu comida llegue como recién salida de la cocina y puedas
              disfrutarla al máximo, para hacer uso de nuestro servicio solo hace falta
               tener hambre y nosotros hacemos el resto."
            img={chavito}
          />
          <ServiciosCard
            titulo="Envíos"
            text="Llevamos tus pedidos hasta su destino, de manera rápida y segura,
            hacemos realidad un método efectivo para que puedas enviar tus productos
            o paquetería sin ningún tipo de preocupación, nos especializamos en la 
            seguridad del producto hasta que llegue a su consumidor final, puedes 
            utilizar nuestro servicio como cliente y vendedor, para realizar un 
            envío solo hace falta un paquete y un destino, nosotros hacemos el resto."
            img={chavito}
          />
          <ServiciosCard
            titulo="Compras"
            text="Realizamos tus compras de todo tipo, te ofrecemos un servicio de 
            calidad y confianza para realizar tus compras en supermercado, bodegas, 
            farmacias, ferreterías y tiendas de todo tipo, somos tu mejor opción para 
            que no salgas de casa y realices tus compras de una manera fácil y segura,
             para realizar una compra solo hace falta una lista de productos y nosotros 
             hacemos el resto."
            img={chavito}
          />
          <ServiciosCard
            titulo="Transacciones Bancarias"
            text="Si necesitas realizar un deposito o tramite bancario que no necesite 
            de tu presencia, te ahorramos esas largas filas y hacemos tus tramites, 
            nos comprometemos a velar por la seguridad de tus documentos, brindamos 
            un servicio profesional y serio.."
            img={chavito}
          />
        </div>
      </section>
      <section className="servicios__second-container">
        <div>
          <h2>Horarios</h2>
          <p>
            De Lunes a Domingo de 9 A.M a 9 P.M
          </p>
        </div>
        <div>
          <h2>¿Qué esperas?</h2>
          <Button
            className="MainBanner__button"
            text="Llama Ya!!"
            link="tel:+504 9450-4185"
            routing={false}
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Servicios;
