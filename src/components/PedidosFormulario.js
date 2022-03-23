import React from "react";
import ProductoList from "./common/ProductoList";
import "@styles/components/PedidosFormulario.scss";

const PedidosFormulario = () => {
  const [tipoPedido, setTipoPedido] = React.useState("Comida");
  const [negocio, setNegocio] = React.useState("");
  const [nombre, setNombre] = React.useState("");
  const [direccion, setDireccion] = React.useState("");
  const [productos, setProductos] = React.useState([
    {
      item: 1,
      count: 1,
      name: "",
    },
  ]);
  const addProducto = () => {
    setProductos([
      ...productos,
      { item: productos.length + 1, count: 1, name: "" },
    ]);
  };

  const replaceCantidad = (i, e) => {
    productos[i].count = e.target.value;
  };
  const replaceProducto = (i, e) => {
    productos[i].name = e.target.value;
  };

  const deleteProducto = () => {
    productos.length > 1 && setProductos(productos.slice(0, -1));
  };

  const productoToString = () => {
    let productosString = "";
    productos.forEach((producto) => {
      productosString += `${producto.count} ${producto.name}%0A`;
    });
    return productosString;
  };

  const msg = () => {
    return `Hola, quiero hacer un pedido en ${negocio}:%0A${productoToString()}A nombre de: *${nombre}*%0ADireccion: ${direccion}`;
  };

  const URL = () => {
    return `https://api.whatsapp.com/send?phone="+50499391712"&text=${msg()}&source=&data=`;
  };
  const enviar = () => {
    window.open(URL(), "_blank");
  };

  const sendMessage = () => {
    if (negocio === "") {
      return null;
    } else if (nombre === "") {
      return null;
    } else if (direccion === "") {
      return null;
    } else if (productos.some((productos) => productos.name === "")) {
      return null;
    } else {
      enviar();
    }
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
        <div className="form__fase-2--negocio">
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
            placeholder={
              (tipoPedido === "Comida" && "Ingresa aqui el restaurante") ||
              (tipoPedido === "Compras en supermercado, bodega o tienda" &&
                "Ingresa aquí el supermercado, bodega o tienda") ||
              (tipoPedido === "Pedido listo en una tienda" &&
                "Ingresa aquí la tienda") ||
              (tipoPedido === "Envió personalizado" &&
                "Escribe aquí la dirección")
            }
            onChange={(e) => setNegocio(e.target.value)}
          ></input>
        </div>
        <div className="form__fase-2--producto">
          {productos.map((producto) => (
            <div key={producto.item} className="producto-item">
              <input
                type="number"
                defaultValue="1"
                min="1"
                pattern="[0-9]*"
                onChange={(e) => {
                  replaceCantidad(producto.item - 1, e);
                }}
              ></input>
              <input
                type="text"
                placeholder="Ingresa un producto"
                required
                onChange={(e) => {
                  replaceProducto(producto.item - 1, e);
                }}
              ></input>
            </div>
          ))}
          <div className="add-delete__container">
            <button type="button" onClick={() => addProducto()}>
              agregar
            </button>
            <button
              type="button"
              onClick={() => {
                deleteProducto();
              }}
            >
              eliminar
            </button>
          </div>
        </div>
      </div>

      {/* //* Fase 3: */}
      <div className="form__fase-3">
        <label htmlFor="nombre">A nombre de quien ira el pedido?</label>
        <input
          type="text"
          id="nombre"
          placeholder="Ingresa aqui el nombre"
          onChange={(e) => setNombre(e.target.value)}
        ></input>
        <label htmlFor="direccion">Dirección</label>
        <input
          placeholder="Escribe aquí la dirección"
          id="direccion"
          onChange={(e) => setDireccion(e.target.value)}
        ></input>
      </div>
      <button
        placeholder="Escribe aquí la direccion"
        type="submit"
        onClick={() => {
          sendMessage();
        }}
      >
        Pedir
      </button>
    </form>
  );
};

export default PedidosFormulario;
