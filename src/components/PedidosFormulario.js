import React from "react";
import ProductoList from "./common/ProductoList";
import "@styles/components/PedidosFormulario.scss";

const PedidosFormulario = () => {
  const [tipoPedido, setTipoPedido] = React.useState("Comida");
  const [negocio, setNegocio] = React.useState("");
  const [producto, setProducto] = React.useState(["hola"]);
  const [cantidadItem, setCantidadItem] = React.useState([1]);
  const [updateProducto, setUpdateProducto] = React.useState(false);

  const [productos, setProductos] = React.useState([
    {
      item: 1,
    },
  ]);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === "producto") {
      setProducto(...producto, value);
    } else if (name === "cantidad") {
      setCantidadItem(value);
    } else if (name === "negocio") {
      setNegocio(value);
    }
  };

  // console.table(productos);
  // console.table(producto);
  const msg = () => {
    return `Hola, quiero hacer un pedido de ${tipoPedido} en ${negocio} voy a querer ${cantidadItem} ${producto}, por favor. Aguante la Xavineta!`;
  };
  // console.log(msg());

  const URL = `https://api.whatsapp.com/send?phone="+50499391712"&text=${msg()}&source=&data=`;
  const enviar = () => {
    window.open(URL, "_blank");
  };

  return (
    <form>
      {/* //* Fase 1: */}
      <div className="form__fase-1">
        <label htmlFor="tipo-de-pedido">Selecciona el tipo de Pedido</label>
        <select
          name="tipo-de-pedido"
          id="tipo-de-pedido"
          required
          onChange={(e) => setTipoPedido(e.target.value)}
        >
          <option>Comida</option>
          <option>Compras en supermercado, bodega o tienda</option>
          <option>Pedido listo en una tienda</option>
          <option id="select-1647884067556-3">Envió personalizado</option>
        </select>
        <button type="button">Continuar</button>
      </div>
      {/* //* Fase 2: */}
      <div className="form__fase-2">
        <label htmlFor="negocio">
          {(tipoPedido === "Comida" && "Restaurante") ||
            (tipoPedido === "Compras en supermercado, bodega o tienda" &&
              "Supermercado, bodega o tienda") ||
            (tipoPedido === "Pedido listo en una tienda" && "Tienda") ||
            (tipoPedido === "Envió personalizado" &&
              "¿Donde quieres que recojan tu envió?")}
        </label>
        <input
          id="negocio"
          required
          onChange={(e) => setNegocio(e.target.value)}
        ></input>
        <ProductoList />
      </div>

      {/* //* Fase 3: */}
      <div className="form__fase-3">
        <label htmlFor="nombre">A nombre de quien ira el pedido?</label>
        <input type="text" id="nombre" placeholder="Nombre"></input>
        <label htmlFor="direccion">Dirección</label>
        <input id="direccion"></input>
      </div>
      <button>Pedir</button>
    </form>
  );
};

export default PedidosFormulario;
