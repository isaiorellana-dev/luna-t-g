import React from "react";
import ProductoList from "./common/ProductoList";
import "@styles/components/PedidosFormulario.scss";

const PedidosFormulario = () => {
  const [fase, setFase] = React.useState(1);
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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <button
        className={fase === 1 ? "fase-inactiva" : "volver-btn"}
        onClick={() => {
          (fase === 3 && setFase(2)) || (fase === 2 && setFase(1));
        }}
      >
        Volver
      </button>
      {/* //* Fase 1: */}
      <div
        className={`form__fase-1 ${
          fase === 1 ? "fase-activa" : "fase-inactiva"
        }`}
      >
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
        <button
          type="button"
          onClick={() => {
            setFase(2);
          }}
        >
          Continuar
        </button>
      </div>
      {/* //* Fase 2: */}
      <div
        className={`form__fase-2 ${
          fase === 2 ? "fase-activa" : "fase-inactiva"
        }`}
      >
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
      <div
        className={`form__fase-3 ${
          fase === 3 ? "fase-activa" : "fase-inactiva"
        }`}
      >
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
        type="submit"
        onClick={() => {
          if (negocio === "") {
            return null;
          } else if (productos.some((productos) => productos.name === "")) {
            return null;
          } else if (productos.some((productos) => productos.count < 1)) {
            return null;
          } else if (fase === 2) {
            setFase(3);
          } else if (nombre === "") {
            return alert("Por favor ingrese su nombre");
          } else if (direccion === "") {
            return alert("Por favor ingrese su dirección");
          } else {
            enviar();
          }
        }}
        className={`${
          fase === 1 ? "fase-inactiva" : undefined
        } button-continuar `}
      >
        {(fase === 3 && "Pedir") || (fase === 2 && "Continuar")}
      </button>
    </form>
  );
};

export default PedidosFormulario;
