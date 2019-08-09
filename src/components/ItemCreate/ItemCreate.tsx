import * as React from "react";
import {Form} from "../Form/Form";
import {IDataItem} from "../../data/data";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import {connect} from "react-redux";
import * as Yup from "yup";


import {
    actionAddItem,
} from "../../actions/main";

import "./item-create.scss";

const initialValues = {
    title: "",
    attributes: "",
    description: "",
}

interface IItemCreateProps {
    addItem(item: IDataItem): void;
}

const validationSchema = Yup.object().shape({
    title: Yup.string().required("Заполните обязательное поле"),
    attributes: Yup.string(),
    description: Yup.string(),
});

export const ItemCreate = (props: IItemCreateProps) => {
    return(
        <div className="item-create__wrapper">
            <h4>Добавить новый объект</h4>
            <Form initialValues={initialValues} validationSchema={validationSchema} onSubmit={({ values, resetForm }) => {
                if (values.attributes) {
                    values.attributes = values.attributes.split(";");
                    values.attributes = values.attributes.filter((item: string) => item && item.length);
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
}))(ItemCreate);