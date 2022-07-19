import React from "react";
import cn from "classnames";
import "./style.scss";

const Button = ({ active, children, onClick, icon, ...props }: any) => {
  return (
    <button
      onClick={onClick}
      className={cn({
        button: true,
        "button--active": active,
      })}
      {...props}
    >
      <span>{children}</span>
      {icon ? (
        <svg className="button__icon">
          <use xlinkHref={`/images/sprite.svg#${icon}`} />
        </svg>
      ) : null}
    </button>
  );
};

export default Button;
