import React, { ReactElement } from "react";
import "./style.scss";

type Props = {
  prefix?: ReactElement;
  title: string;
  outlet?: boolean;
  style?: {
    [key: string]: string | number;
  };
};

const Button = ({ prefix, title, outlet, style }: Props) => {
  return (
    <button className={`button ${outlet && "outlet"}`} style={style}>
      {prefix && React.cloneElement(prefix, { className: "prefix" })}
      <span>{title}</span>
    </button>
  );
};

export default Button;
