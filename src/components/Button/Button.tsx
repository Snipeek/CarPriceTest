import * as React from "react";
import classNames from "classnames";

import "./button.scss";

interface IButtonProps {
  children: React.ReactChild | React.ReactChildren;
  className?: string;
  type?: string;
  disable?: boolean;

  onClick?(args: any): any;
}

export const Button = (props: IButtonProps) => {
  return(
    <button type={props.type} onClick={props.onClick} className={classNames("button", { ["button_disable"]: props.disable }, props.className)}>{props.children}</button>
  )
};