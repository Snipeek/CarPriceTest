import * as React from "react";
import {IDataItem} from "../../data/data";
import {mainMode} from "../../redusers/main";
import {ItemList} from "./ItemList";
import {ItemGrid} from "./ItemGrid";

interface IItem {
    data: IDataItem;
    mode: mainMode;
    index: number;
}

export const Item = (props: IItem) => {
    switch (props.mode) {
        case mainMode.grid:
            return <ItemGrid {...props.data} index={props.index}/>;
        case mainMode.list:
        default:
            return <ItemList {...props.data} index={props.index}/>;
    }
}

