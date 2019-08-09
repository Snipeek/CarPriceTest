import * as React from "react";
import {IReactChildren} from "../../../types/ReactChildren";
import "./column.scss";

interface IColumnMediaParams {
    span?: number;
}

export interface IColumnProps extends IReactChildren {
    className?: string;
    span?: number;
    xs?: number | IColumnMediaParams;
    sm?: number | IColumnMediaParams;
    md?: number | IColumnMediaParams;
    style?: React.CSSProperties;
}

const classNameGenerator = (sizeBreakpoint: string, columnMedia: IColumnMediaParams): string => {
    let classes = "";
    const sizeBreakpointSuffix = sizeBreakpoint ? "-" + sizeBreakpoint : "";
    if (columnMedia.span !== undefined) {
        classes += ` col${sizeBreakpointSuffix}-${columnMedia.span} `;
    }
    return classes;
};

export const Column = (props: IColumnProps) => {
    let classes = "";
    if (props.xs) {
        const columnMedia = Number.isInteger(props.xs as number) ? {span: props.xs as number} : props.xs as IColumnMediaParams;
        classes += classNameGenerator("xs", columnMedia);
    }
    if (props.sm) {
        const columnMedia = Number.isInteger(props.sm as number) ? {span: props.sm as number} : props.sm as IColumnMediaParams;
        classes += classNameGenerator("sm", columnMedia);
    }
    if (props.md) {
        const columnMedia = Number.isInteger(props.md as number) ? {span: props.md as number} : props.md as IColumnMediaParams;
        classes += classNameGenerator("md", columnMedia);
    }
    if (classes.indexOf("col") === -1) {
        classes = classNameGenerator("", {span: props.span});
    }
    classes += classNameGenerator("", {span: props.span || 12});
    classes += " " +  props.className;

    return (<div className={classes} style={props.style}>{props.children}</div>);
};
