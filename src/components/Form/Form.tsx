import * as React from "react";
import {ReactChild} from "react";
import * as _ from "lodash";

export interface IFormRenderProps<Values> {
    values: Values;

    resetForm(): any;

    controlDecorator(config: IControlDecoratorConfig, component: any): any;
}

export interface IFormProps<Values> {
    initialValues: Values;
    onSubmit?(args: any): any;

    children(params: IFormRenderProps<Values>): ReactChild | ReactChild[] | null;
}

export interface IControlDecoratorConfig {
    name: string;
}

interface IFromState<Values> {
    values: Values;
}

export class Form<Values> extends React.Component<IFormProps<Values>, IFromState<Values>> {

    public static defaultProps = {
        initialValues: {},
    };

    public constructor(props: IFormProps<Values>) {
        super(props);
        this.state = {
            values: Object.assign({}, props.initialValues),
        };
    }

    public componentWillUpdate(nextProps: IFormProps<Values>) {
        if (!_.isEqual(this.props.initialValues, nextProps.initialValues)) {
            this.setState({
                values: Object.assign({}, nextProps.initialValues),
            });
        }

    }

    public render() {
        return (
            <form noValidate={true} onSubmit={this.onSubmit} className="form">
                {this.props.children({
                    values: this.state.values,
                    resetForm: this.resetForm,
                    controlDecorator: this.controlDecorator,
                })}
            </form>
        );
    }

    public submitForm = (): Values => {
        if (this.props.onSubmit) {
            this.props.onSubmit({
                values: Object.assign({}, this.state.values),
                resetForm: this.resetForm(),
            });
        }
        return this.state.values;
    }

    public resetForm = () => {
        this.setState({values: Object.assign({}, this.props.initialValues)});
    }

    private onSubmit = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        this.submitForm();
    }

    private handleChange = (e: React.ChangeEvent<any>) => {
        const values: Values = Object.assign({}, this.state.values, { [e.target.name]: e.target.value });
        this.setState({
            values,
        });
    }

    private controlDecorator = (config: IControlDecoratorConfig, component: any): any => {
        return React.cloneElement(component, {
            onChange: this.handleChange,
            name: config.name,
            value: this.state.values[config.name],
            ...component.props,
        });
    }
}
