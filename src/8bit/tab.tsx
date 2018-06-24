import * as React from "react";
import styled, { css } from "react-emotion";

import {
  ITabProps,
  disabledElement,
  getColor,
} from "../common";
import {
  getBackgroundColor,
  getForegroundColor,
  font,
} from "./common";
import VerticalAligner from "./vertical-aligner";

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
    box-shadow: 5px 5px 0px 0px rgba(71,71,71,1);
    background: ${getBackgroundColor(mainColor)};
    color: ${getForegroundColor(mainColor)};
    &:disabled {
      ${disabledElement};
    };
  `;

  return style;
};

const Tab = styled("div")`
  height: 100%;
`;

export default ({
  children,
  title,
}: ITabProps) => {
  return (
    <Tab>
      <VerticalAligner>
        {title}
      </VerticalAligner>
      {children}
    </Tab>
  );
};
