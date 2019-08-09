import * as React from "react";
import "./input.scss";
import classNames from "classnames";

interface IInputProps {
    value?: string | number;
    placeholder?: string;
    label?: string | number;
    name?: string;
    required?: boolean;
    error?: string;

    suggestion?: string;

    onChange?(args: any): any;
}

export const Input = (props: IInputProps) => {
    const isError = props.error && props.error.length;
    return(
        <div className="input__wrapper">
            <label>
                <span className={classNames("input__label", { ["input__label_error"]: isError})}>{props.label} {props.required ? "*" : null}</span>
                <input onChange={props.onChange} className="input__input" name={props.name} value={props.value} placeholder={props.placeholder} />
                {isError ? <span className="input__error">{props.error}</span> : null}
                {props.suggestion && props.suggestion.length ? <span className="input__suggestion">* {props.suggestion}</span> : null}
            </label>
        </div>
    );
}