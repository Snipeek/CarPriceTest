import { Button } from "../Button/Button";
import * as React from "react";

import "./change-controls.scss";
import {connect} from "react-redux";
import {mainMode} from "../../redusers/main";
import {
    actionAddBottomItem,
    actionAddTopItem,
    actionChangeMode,
    actionRemoveBottomItem,
    actionRemoveTopItem
} from "../../actions/main";
import {Row} from "../Grid/Row";
import {Column} from "../Grid/Column";
import {IRootState} from "../../redusers";
import {IDataItem} from "../../data/data";

interface IChangeControlsProps {
    items: IDataItem[];
    addTopItem(): void;
    removeTopItem(): void;
    addBottomItem(): void;
    removeBottomItem(): void;
}

export const ChangeControls = (props: IChangeControlsProps) => {

  const buttonProps = {
      className: "change-controls__button",
      disable: !(props.items && props.items.length),
  };

  return(
    <div className="change-controls">
        <Row>
            <Column md={6}>
                <Button {...buttonProps} onClick={props.addTopItem}>Добавить в начало</Button>
            </Column>
            <Column md={6}>
                <Button {...buttonProps} onClick={props.addBottomItem}>Добавить в конец</Button>
            </Column>
            <Column md={6}>
                <Button {...buttonProps} onClick={props.removeTopItem}>Удалить первый</Button>
            </Column>
            <Column md={6}>
                <Button {...buttonProps} onClick={props.removeBottomItem}>Удалить последний</Button>
            </Column>
        </Row>
    </div>
  );
}


export const ChangeControlsContainer = connect((store: IRootState) => ({
    items: store.main.items,
}), dispatch => ({
    changeMode: (mode: mainMode) => dispatch(actionChangeMode(mode)),
    addTopItem: () => dispatch(actionAddTopItem()),
    removeTopItem: () => dispatch(actionRemoveTopItem()),
    addBottomItem: () => dispatch(actionAddBottomItem()),
    removeBottomItem: () => dispatch(actionRemoveBottomItem()),
}))(ChangeControls);
