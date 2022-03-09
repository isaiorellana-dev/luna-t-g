import React from "react";
import { Link } from "react-router-dom";
import "@styles/components/common/Button.scss";

const Button = (props) => {
  return (
    <Link to={props.link} className={`btn-primary ${props.className}`}>
      {props.text}
    </Link>
  );
};

export default Button;
