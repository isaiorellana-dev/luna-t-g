import React from "react";
import PedidosFormulario from "@components/PedidosFormulario";

const Pedidos = () => {
  return (
    <div className="pedidos__main-container">
      <h1>Pedidos</h1>
      <section>
        <div className="pedidos__form-container">
          <PedidosFormulario />
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Pedidos;
