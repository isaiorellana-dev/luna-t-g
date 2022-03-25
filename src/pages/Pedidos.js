import React from "react";
import PedidosFormulario from "@components/PedidosFormulario";
import PedidosMockup from "@components/PedidosMockup";
import "@styles/pages/Pedidos.scss";

const Pedidos = () => {
  return (
    <div className="pedidos__main-container">
      <section>
        <div className="pedidos__form-container">
          <h1>Pedidos</h1>
          <PedidosFormulario />
          <p>
            Para realizar un pedido, solo debes llenar el formulario y enviarlo,
            te generara un mensaje de WhatsApp con todo los datos que
            necesitamos para realizar el envió.
          </p>
        </div>
      </section>
      <section className="pedidos__mockup-container">
        <PedidosMockup />
      </section>
    </div>
  );
};

export default Pedidos;
