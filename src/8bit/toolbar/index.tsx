// General Styles
import * as React from "react";
import {
  IToolbarProps,
  disabledElement,
  getColor,
  getPadding,
  ElementSize,
} from "../../common";
import glamorous, { CSSProperties } from "glamorous";
import {
  getBackgroundColor,
  getForegroundColor,
  font,
  get2dOutline,
} from "../common/index";

// height/width in rem
export const toolbarStyle = (
  rootColor: string = "black",
): CSSProperties => {
  const mainColor = getColor(null, rootColor);

  const style: CSSProperties = {
    "display": "flex",
    "position": "relative",
    "flex": 1,
    "fontFamily": font,
    "background": getBackgroundColor(mainColor),
    "color": getForegroundColor(mainColor),
    ":disabled": disabledElement,
  };

  return style as CSSProperties;
};

export default ({
  disabled,
  height,
  rootColor,
  title,
  width,
}: IToolbarProps) => {
  const ToolbarContainer = glamorous.div(
    toolbarStyle(rootColor),
    get2dOutline(),
  );
  const ToolbarTitle = glamorous.span({
    flex: 1,
    textAlign: "center",
    padding: `${getPadding(ElementSize.Normal)}rem`,
  });

  return (
    <ToolbarContainer disabled={disabled}>
      <ToolbarTitle>{title}</ToolbarTitle>
    </ToolbarContainer>
  );
};
