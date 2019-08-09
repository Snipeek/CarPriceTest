import * as React from "react";
import {mainMode} from "../../redusers/main";
import {connect} from "react-redux";
import {IRootState} from "../../redusers";
import classNames from "classnames";

import "./change-mode-controls.scss";
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

export const ChangeModeControls = (props: IChangeModeControlsProps) => {
  return(
    <div className="change-mode-controls__wrapper">
      <h4 className="change-mode-controls__title">Список объектов</h4>
      <div className="change-mode-controls__buttons">
      {Object.keys(content).map(name => {
          return(
              <Button
                  key={name}
                  className={classNames("change-mode-controls__button", { ["change-mode-controls__button_active"]: name === props.mode })}
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
}))(ChangeModeControls);
