import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, children, className = '', ...props }) => {
  return (
    <Link to={to} className={`tmf-button ${className}`} {...props}>
      {children}
    </Link>
  );
};

export default Button;
