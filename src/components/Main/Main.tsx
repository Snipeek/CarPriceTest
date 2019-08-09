import * as React from "react";
import { ChangeControlsContainer } from "../ChangeControls/ChangeControls";
import { ChangeModeControlsContainer} from "../ChangeModeControls/ChangeModeControls";
import {CreateItemFormContainer} from "../CreateItemForm/CreateItemForm";
import {ItemsContainer} from "../Items/Items";
import {Container} from "../Grid/Container";

export const Main = () => {
  return(
    <Container>
      <ChangeControlsContainer />
      <hr />
      <ChangeModeControlsContainer />
      <hr />
      <ItemsContainer />
      <hr />
      <CreateItemFormContainer />
      <hr />
    </Container>
  );
};
