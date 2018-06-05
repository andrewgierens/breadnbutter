import * as React from "react";

import {
  IToolbarProps,
  disabledElement,
  getColor,
  ItemAlign,
  preventSelection,
} from "../common";
import glamorous, { CSSProperties } from "glamorous";
import {
  getBackgroundColor,
  getForegroundColor,
  font,
  get2dOutline,
} from "./common";
import VerticalAligner from "./vertical-aligner";

export const toolbarStyle = (
  rootColor: string = "black",
): CSSProperties => {
  const mainColor = getColor(null, rootColor);

  const style: CSSProperties = {
    "display": "flex",
    "position": "relative",
    "flex": 1,
    "fontFamily": font,
    "minHeight": "3rem",
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
  title,
  children,
}: IToolbarProps) => {
  const ToolbarContainer = glamorous.div(
    toolbarStyle(rootColor),
    get2dOutline(rootColor),
    preventSelection,
  );

  const LeftContainer = glamorous.div({
    flex: 1,
    textAlign: "left",
  });

  const RightContainer = glamorous.div({
    flex: 1,
    textAlign: "right",
  });

  let toolbarItems = [];

  if (children && Array.isArray(children)) {
    toolbarItems = children;
  }

  if (children && !Array.isArray(children)) {
    toolbarItems.push(children);
  }

  if (toolbarItems.some((tbi) => tbi.props.align === undefined)) {
    throw new Error("Invalid toolbar item. No align (ItemAlign) prop defined");
  }

  const titleEl = title ? (
    <div>
      <VerticalAligner>
        {title}
      </VerticalAligner>
    </div>
  ) : undefined;

  return (
    <ToolbarContainer disabled={disabled}>
      <LeftContainer>
        {toolbarItems.filter((c) => c.props.align === ItemAlign.Left)}
      </LeftContainer>
      {titleEl}
      <RightContainer>
        {toolbarItems.filter((c) => c.props.align === ItemAlign.Right )}
      </RightContainer>
    </ToolbarContainer>
  );
};
