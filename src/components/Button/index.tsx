import React from "react";
import cn from "classnames";
import "./style.scss";

type ButtonType = {
  active?: boolean;
  children?: JSX.Element | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: string;
  props?: React.PropsWithChildren;
};

const Button = ({ active, children, onClick, icon, ...props }: ButtonType) => {
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
