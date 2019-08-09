import {applyMiddleware, combineReducers, createStore, Reducer} from "redux";
import main, {IStoreMain} from "./main";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

export interface IRootState {
    main: IStoreMain;
}

function createRootReducer(): Reducer<IRootState> {
    return combineReducers({
        main,
    });
}

export const createAppStore = () => {
    return createStore(createRootReducer(), composeWithDevTools(applyMiddleware(thunk)));
};
