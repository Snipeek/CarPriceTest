import * as React from "react";
import {mainMode} from "../../redusers/main";
import {connect} from "react-redux";
import {IRootState} from "../../redusers";
import {IDataItem} from "../../data/data";
import {Item} from "../Item/Item";
import {Row} from "../Grid/Row";

interface IItemsProps {
    mode: mainMode;
    items: IDataItem[];
}

export const Items = (props: IItemsProps) => {
    const items = [...props.items];
    return (
        <div className="items__wrapper">
            {items && items.length ? (
                <Row>
                    {items.map((item, index) => (
                        <Item
                            data={item}
                            mode={props.mode}
                            index={index+1}
                            key={item.title + index}
                        />
                    ))}
                </Row>
            ) : "Упс.. Элементы кончились, добавьте новый.."}
        </div>
    )
};

export const ItemsContainer = connect((state: IRootState) => ({
    mode: state.main.mode,
    items: state.main.items,
}))(Items);
