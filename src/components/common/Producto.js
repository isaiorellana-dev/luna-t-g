import React from "react";

const ProductoList = (props) => {
  const renderFunc = props.render;

  return <div>{props.productos.map(renderFunc)}</div>;
};

export default ProductoList;
