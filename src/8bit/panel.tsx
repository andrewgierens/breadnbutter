import * as React from "react";

import {
  IToolbarProps,
  disabledElement,
  getColor,
  preventSelection,
} from "../common";
import glamorous, { CSSProperties }  from "glamorous";
import {
  get2dOutline,
  getBackgroundColor,
  getForegroundColor,
  font,
} from "./common";

export const panelStyle = (
  rootColor: string = "black",
): CSSProperties => {
  const mainColor = getColor(null, rootColor);

  const style: CSSProperties = {
    "display": "flex",
    "position": "relative",
    "flex": 1,
    "fontFamily": font,
    "height": "100%",
    "width": "100%",
    "padding": "0.25rem",
    "boxShadow": "5px 5px 0px 0px rgba(71,71,71,1)",
    "background": getBackgroundColor(mainColor),
    "color": getForegroundColor(mainColor),
    ":disabled": disabledElement,
  };

  return style as CSSProperties;
};

export default ({
  disabled,
  rootColor,
}: IToolbarProps) => {
  const PanelContainer = glamorous.div(
    panelStyle(rootColor),
    get2dOutline(rootColor),
    preventSelection,
  );

  return (
    <PanelContainer disabled={disabled}>
    </PanelContainer>
  );
};
