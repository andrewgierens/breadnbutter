// General Styles
import * as React from "react";
import {
  IToolbarProps,
  disabledElement,
  getColor,
} from "../../common";
import glamorous, { CSSProperties } from "glamorous";
import {
  getBackgroundColor,
  getForegroundColor,
  font,
  get2dOutline,
} from "../common/index";

// height/width in rem
export const toolbarStyle = (height?: number, width?: number, rootColor: string = "black"): CSSProperties => {
  const mainColor = getColor(undefined, rootColor);

  const style = {
    "display": "flex",
    "fontFamily": font,
    "background": getBackgroundColor(mainColor),
    "color": getForegroundColor(mainColor),
    ":disabled": disabledElement,
    "height": "",
    "width": "",
  };

  if (height) {
    style.height = `${height}rem`;
  }

  if (width) {
    style.width = `${width}rem`;
  }

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
    get2dOutline(),
    toolbarStyle(height, width, rootColor),
  );
  const ToolbarTitle = glamorous.span({
    flexGrow: 1,
    textAlign: "center",
    padding: "1rem",
  });

  return (
    <ToolbarContainer disabled={disabled}>
      <ToolbarTitle>{title}</ToolbarTitle>
    </ToolbarContainer>
  );
};
