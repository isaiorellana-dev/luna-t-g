import React from "react";

const ProductoList = () => {
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
    return `%0A${productoToString()}`;
  };

  const URL = () => {
    return `https://api.whatsapp.com/send?phone="+50499391712"&text=${msg()}&source=&data=`;
  };
  const enviar = () => {
    window.open(URL(), "_blank");
  };

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
            }}
          ></input>
          <input
            type="text"
            placeholder="ingresa un producto"
            onChange={(e) => {
              replaceProducto(producto.item - 1, e);
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
    </div>
  );
};

export default ProductoList;
