import React from "react";
import PedidosFormulario from "@components/PedidosFormulario";
import "@styles/pages/Pedidos.scss";

const Pedidos = () => {
  return (
    <div className="pedidos__main-container">
      <section>
        <div className="pedidos__form-container">
          <h1>Pedidos</h1>
          <PedidosFormulario />
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Pedidos;
