import {IDataItem} from "../../data/data";
import * as React from "react";

import "./item-grid.scss";
import {Column} from "../Grid/Column";

export const ItemGrid = (props: IDataItem) => {
    return(
        <Column xs={12} sm={6} md={4}>
            <div className="item-grid__wrapper">
                <div className="item-grid__head">
                    <h5 className="item-grid__title">
                        {props.title}
                    </h5>
                    <div className="item-grid__index">
                        {props.index}
                    </div>
                </div>
                <hr />
                <div className="item-grid__body">
                    {props.attributes && props.attributes.length ? (
                        <ul className="item-grid__attributes">
                            {props.attributes.map((item, index) => (
                                <li className="item-grid__attribute" key={item + index}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </div>
                <hr />
                <div className="item-grid__attributes">
                    {props.description}
                </div>
            </div>
        </Column>
    );
}