import * as React from "react";
import styled from "react-emotion";

import {
  ITabPanelProps,
  disabledElement,
  getColor,
} from "../common";
import {
  getBackgroundColor,
  getForegroundColor,
  font,
} from "./common";

export default ({
  children,
  rootColor,
}: ITabPanelProps) => {

  const mainColor = getColor(null, rootColor);
  const TabPanelContainer = styled("div")`
    display: flex;
    flex: 1;
    font-family: ${font};
    padding: 1rem;
    box-shadow: 5px 5px 0px 0px rgba(71,71,71,1);
    background: ${getBackgroundColor(mainColor)};
    color: ${getForegroundColor(mainColor)};
    &:disabled {
      ${disabledElement};
    };
  `;

  return (
    <TabPanelContainer>
      {children}
    </TabPanelContainer>
  );
};
