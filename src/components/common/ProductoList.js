import React from "react";

const ProductoList = (props) => {
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

  const stringifyProductos = () => {
    return productos.map((producto) => {
      return ` ${producto.count} ${producto.name}${
        producto.count > 1 ? "s" : ""
      }`;
    });
  };

  const msg = () => {
    return `Hola, hagame el siguiente pedido por favor${stringifyProductos()}`;
  };
  console.log(msg());

  const URL = () => {
    return `https://api.whatsapp.com/send?phone="+50499391712"&text=${msg()}&source=&data=`;
  };
  const enviar = () => {
    window.open(URL(), "_blank");
  };

  console.table(productos);
  return (
    <div>
      <h1>ProductoList</h1>
      {productos.map((producto) => (
        <div key={producto.item}>
          <input
            type="number"
            defaultValue="1"
            onChange={(e) => {
              replaceCantidad(producto.item - 1, e);
              console.table(productos);
            }}
          ></input>
          <input
            type="text"
            placeholder="ingresa un producto"
            onChange={(e) => {
              replaceProducto(producto.item - 1, e);
              console.log(msg());
              console.table(productos);
            }}
          ></input>
        </div>
      ))}
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
      <button
        type="button"
        onClick={() => {
          enviar();
        }}
      >
        enviar
      </button>
    </div>
  );
};

export default ProductoList;
