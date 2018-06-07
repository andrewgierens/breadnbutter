import * as React from "react";
import styled, { css } from 'react-emotion';

import {
  IPanelProps,
  disabledElement,
  getColor,
  preventSelection,
} from "../common";
import {
  get2dOutline,
  getBackgroundColor,
  getForegroundColor,
  font,
} from "./common";

export const panelStyle = (
  rootColor: string = "black",
): string => {
  const mainColor = getColor(null, rootColor);

  const style = css`
    display: flex;
    position: relative;
    flex: 1;
    font-family: ${font};
    height: 100%;
    width: 100%;
    box-shadow: 5px 5px 0px 0px rgba(71,71,71,1);
    background: ${getBackgroundColor(mainColor)};
    color: ${getForegroundColor(mainColor)};
    &:disabled {
      ${disabledElement};
    };
  `;

  return style;
};

const ToolbarPanelContainer = styled('div')`
  height: 100%;
  width: 100%;
`;

export default ({
  disabled,
  rootColor,
  toolbar,
  className,
  bottomBar,
  children,
}: IPanelProps) => {
  const PanelContainer = styled('div')`
    ${panelStyle(rootColor)};
    ${get2dOutline(rootColor)};
    ${preventSelection};
  `;

  // TODO: Commented out disabled={disabled} 
  return (
    <ToolbarPanelContainer>
      {toolbar}
      <PanelContainer className={className}>
      {children}
      </PanelContainer>
      {bottomBar}
    </ToolbarPanelContainer>
  );
};
