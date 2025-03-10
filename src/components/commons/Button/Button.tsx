import React, { ReactElement } from "react";
import "./style.scss";

type Props = {
  children: React.ReactNode;
  prefix?: ReactElement;
  outlet?: boolean;
  className?: string;
  style?: {
    [key: string]: string | number;
  };
};

const Button = ({ prefix, outlet, style, children }: Props) => {
  return (
    <button className={`button ${outlet && "outlet"}`} style={style}>
      {prefix && React.cloneElement(prefix, { className: "prefix" })}
      <span>{children}</span>
    </button>
  );
};

export default Button;
