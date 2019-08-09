import * as React from "react";
import {ReactChild} from "react";
import * as _ from "lodash";
import {ObjectSchema} from "yup";

export interface IFormRenderProps<Values> {
    values: Values;

    resetForm(): any;

    controlDecorator(config: IControlDecoratorConfig, component: any): any;
}

export interface IFormProps<Values> {
    initialValues: Values;
    validationSchema?: ObjectSchema<{}>;
    onSubmit(args: any): any;

    children(params: IFormRenderProps<Values>): ReactChild | ReactChild[] | null;
}

type stateErrors<Values> = {
    [K in keyof Values]?: string;
};


export interface IControlDecoratorConfig {
    name: string;
}

interface IFromState<Values> {
    values: Values;
    errors: stateErrors<Values>;
}

export class Form<Values> extends React.Component<IFormProps<Values>, IFromState<Values>> {

    public static defaultProps = {
        initialValues: {},
    };

    public constructor(props: IFormProps<Values>) {
        super(props);
        this.state = {
            values: Object.assign({}, props.initialValues),
            errors: {},
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

    public submitForm = () => {
        const errors = this.formValidation();

        if (Object.keys(errors).length) {
            this.setState({ errors });
            return;
        }

        this.props.onSubmit({
            values: Object.assign({}, this.state.values),
            resetForm: this.resetForm,
        });
    }

    private formValidation = () => {
        const errors: stateErrors<Values> = {};

        if (this.props.validationSchema) {
            try {
                this.props.validationSchema.validateSync(this.state.values, {abortEarly: false});
            } catch (ValidationErrors) {
                ValidationErrors.inner.forEach((validateError: any) => {
                    const name = validateError.path;
                    if (name) {
                        errors[name as keyof Values] = validateError.message;
                    }
                });
            }
        }

        return errors;
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
        if (this.state.errors[e.target.name as keyof Values]) {
            delete this.state.errors[e.target.name as keyof Values];
        }
        this.setState({
            values,
        });
    }

    private controlDecorator = (config: IControlDecoratorConfig, component: any): any => {
        return React.cloneElement(component, {
            onChange: this.handleChange,
            name: config.name,
            value: this.state.values[config.name as keyof Values],
            error: this.state.errors[config.name as keyof Values] || undefined,
            ...component.props,
        });
    }
}
