import * as React from "react";
import {Form} from "../Form/Form";
import {IDataItem} from "../../data/data";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {connect} from "react-redux";

import {
    actionAddItem,
} from "../../actions/main";

import "./create-item-form.scss";

const initialValues = {
    title: "",
    attributes: "",
    description: "",
}

interface ICreateItemFormProps {
    addItem(item: IDataItem): void;
}

export const CreateItemForm = (props: ICreateItemFormProps) => {
    return(
        <div className="create-item-form__wrapper">
            <h4>Добавить новый объект</h4>
            <Form initialValues={initialValues} onSubmit={({ values, resetForm }) => {
                if (values.attributes) {
                    values.attributes = values.attributes.split(";");
                }
                props.addItem(values);
                resetForm();
            }}>
                {({ controlDecorator }) => {
                    return(
                        <>
                            {controlDecorator({name: "title"}, <Input label="Заголовок" required={true} />)}
                            {controlDecorator({name: "attributes"}, <Input label="Пункты" suggestion="Пункты разделяйте ';' (точкой с запятой)" />)}
                            {controlDecorator({name: "description"}, <Input label="Описание" />)}
                            <Button type="submit">Добавить</Button>
                        </>
                    );
                }}
            </Form>
        </div>
    )
}

export const CreateItemFormContainer = connect(() => ({
}), dispatch => ({
    addItem: (item: IDataItem) => dispatch(actionAddItem(item)),
}))(CreateItemForm);