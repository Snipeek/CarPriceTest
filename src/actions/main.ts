import {mainMode} from "../redusers/main";
import {IDataItem} from "../data/data";

export enum mainActions {
    changeMode = "changeMode",
    addItem = "addItem",
    addTopItem = "addTopItem",
    removeTopItem = "removeTopItem",
    addBottomItem = "addBottomItem",
    removeBottomItem = "removeBottomItem",
}

export const actionChangeMode = (mode: mainMode) => {
    return {
        type: mainActions.changeMode,
        mode,
    };
};

export const actionAddItem = (item: IDataItem) => {
    return {
        type: mainActions.addItem,
        item,
    };
};

export const actionAddTopItem = () => {
    return {
        type: mainActions.addTopItem,
    };
};

export const actionRemoveTopItem = () => {
    return {
        type: mainActions.removeTopItem,
    };
};

export const actionAddBottomItem = () => {
    return {
        type: mainActions.addBottomItem,
    };
};

export const actionRemoveBottomItem = () => {
    return {
        type: mainActions.removeBottomItem,
    };
};