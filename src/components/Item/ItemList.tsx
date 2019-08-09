import {IDataItem} from "../../data/data";
import * as React from "react";

import "./item-list.scss";
import {Column} from "../Grid/Column";
import {Row} from "../Grid/Row";

export const ItemList = (props: IDataItem) => {
    return(
        <Column span={12}>
            <div className="item-list__wrapper">
                <Row>
                    <Column md={1}>
                        <div className="item-list__index">
                            {props.index}
                        </div>
                    </Column>
                    <Column md={3}>
                        <h5 className="item-list__title">
                            {props.title}
                        </h5>
                    </Column>
                    <Column sm={12} md={8}>
                    {props.attributes && props.attributes.length ? (
                        <ul className="item-list__attributes">
                            <Row>
                                {props.attributes.map((item, index) => (
                                    <Column sm={4}>
                                        <li className="item-list__attribute" key={item + index}>
                                            {item}
                                        </li>
                                    </Column>
                                ))}
                            </Row>
                        </ul>
                    ) : null}
                    </Column>
                </Row>
                <hr />
                <div className="item-list__attributes">
                    {props.description}
                </div>
            </div>
        </Column>
    );
}