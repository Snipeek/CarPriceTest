import {mainActions} from "../actions/main";
import {data, IDataItem} from "../data/data";

export enum mainMode {
    list = "list",
    grid = "grid",
}

export interface IStoreMain {
    mode: mainMode,
    items: IDataItem[],
}

const initialState: IStoreMain = {
    mode: mainMode.list,
    items: [...data.data],
};

export default function main(store = initialState, action: any): IStoreMain {

    switch (action.type) {
        case mainActions.changeMode:
            return Object.assign({}, store, {mode: action.mode});

        case mainActions.addTopItem:
            store.items.unshift( store.items[store.items.length - 1] );
            return Object.assign({}, store, { items: [...store.items] });

        case mainActions.removeTopItem:
            store.items.shift();
            return Object.assign({}, store, { items: [...store.items] });

        case mainActions.addBottomItem:
            store.items.push( store.items[0] );
            return Object.assign({}, store, { items: [...store.items] });

        case mainActions.removeBottomItem:
            store.items.pop();
            return Object.assign({}, store, { items: [...store.items] });

        case mainActions.addItem:
            store.items.push(action.item);
            return Object.assign({}, store, { items: [...store.items] });

        default:
            return store;
    }
}
