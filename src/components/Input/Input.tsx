import * as React from "react";
import "./input.scss";

interface IInputProps {
    value?: string | number;
    placeholder?: string;
    label?: string | number;
    name?: string;
    required?: boolean;

    suggestion?: string;

    onChange?(args: any): any;
}

export const Input = (props: IInputProps) => {
    return(
        <div className="input__wrapper">
            <label>
                <span className="input__label">{props.label} {props.required ? "*" : null}</span>
                <input onChange={props.onChange} className="input__input" name={props.name} value={props.value} placeholder={props.placeholder} />
                {props.suggestion && props.suggestion.length ? <span className="input__suggestion">* {props.suggestion}</span> : null}
            </label>
        </div>
    );
}