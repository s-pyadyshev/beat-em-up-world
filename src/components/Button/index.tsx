import React from "react";
import "./style.scss";

const Button = (props: any) => {
  const { children, onClick } = props;

  return (
    <button onClick={onClick} className="button">
      <span>{children}</span>
    </button>
  );
};

export default Button;
