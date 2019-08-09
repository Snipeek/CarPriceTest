import * as React from "react";
import {IReactChildren} from "../../../types/ReactChildren";
import classNames from "classnames";
import "./row.scss";

interface IRowProps extends IReactChildren {
    className?: string;
}

export const Row = (props: IRowProps) => {
    return (<div className={classNames("row", props.className)}>{props.children}</div>);
};
