import React from "react";
import { Link } from "react-router-dom";
import "@styles/components/common/Button.scss";

const Button = (props) => {
  return (
    <React.Fragment>
      {props.routing ? (
        <Link to={props.link} className={`btn-primary ${props.className}`}>
          {props.text}
        </Link>
      ) : (
        <a href={props.link} className={`btn-primary ${props.className}`}>
          {props.text}
        </a>
      )}
    </React.Fragment>
  );
};

export default Button;
