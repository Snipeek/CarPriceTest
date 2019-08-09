import * as React from "react";
import {mainMode} from "../../redusers/main";
import {connect} from "react-redux";
import {IRootState} from "../../redusers";
import classNames from "classnames";

import "./title.scss";
import {Button} from "../Button/Button";
import {actionChangeMode} from "../../actions/main";

interface IChangeModeControlsProps {
  mode: mainMode;

  changeMode(mode: mainMode): void;
}

const content = {
  [mainMode.list]: {
    name: "Список",
    icon: "",
  },
  [mainMode.grid]: {
    name: "Плитка",
    icon: "",
  },
};

export const Title = (props: IChangeModeControlsProps) => {
  return(
    <div className="title__wrapper">
      <h4 className="title__title">Список объектов</h4>
      <div className="title__buttons">
      {Object.keys(content).map(name => {
          return(
              <Button
                  key={name}
                  className={classNames("title__button", { ["title__button_active"]: name === props.mode })}
                  onClick={() => props.changeMode(name as mainMode)}
              >
                {content[name as mainMode].name}
              </Button>
          );
        }
      )}
      </div>
    </div>
  );
};

export const ChangeModeControlsContainer = connect((state: IRootState) => ({
  mode: state.main.mode,
}), dispatch => ({
  changeMode: (mode: mainMode) => dispatch(actionChangeMode(mode)),
}))(Title);
