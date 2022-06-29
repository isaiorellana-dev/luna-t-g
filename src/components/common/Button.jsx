import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/components/common/Button.scss';

function Button(props) {
  return (
    <>
      {props.routing ? (
        <Link to={props.link} className={`btn-primary ${props.className}`}>
          {props.text}
        </Link>
      ) : (
        <a href={props.link} className={`btn-primary ${props.className}`}>
          {props.text}
        </a>
      )}
    </>
  );
}

export default Button;
