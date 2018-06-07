import * as React from "react";
import styled from 'react-emotion';

import {
  IPanelProps,
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
    "boxShadow": "5px 5px 0px 0px rgba(71,71,71,1)",
    "background": getBackgroundColor(mainColor),
    "color": getForegroundColor(mainColor),
    ":disabled": disabledElement,
  };

  return style as CSSProperties;
};

const ToolbarPanelContainer = styled('div')`
  height: 100%;
  width: 100%,;
`;

export default ({
  disabled,
  rootColor,
  toolbar,
  className,
  bottomBar,
  children,
}: IPanelProps) => {
  const PanelContainer = glamorous.div(
    panelStyle(rootColor),
    get2dOutline(rootColor),
    preventSelection,
  );

  return (
    <ToolbarPanelContainer>
      {toolbar}
      <PanelContainer disabled={disabled} className={className}>
      {children}
      </PanelContainer>
      {bottomBar}
    </ToolbarPanelContainer>
  );
};
