import * as React from "react";
import * as Color from "color";

import {
  IToolbarProps,
  disabledElement,
  getColor,
  getToolFontSize,
  ElementSize,
  ToolbarItemAlign,
  IToolbarItemProps,
  preventSelection,
} from "../../common";
import glamorous, { CSSProperties } from "glamorous";
import {
  getBackgroundColor,
  getForegroundColor,
  font,
  get2dOutline,
} from "../common/index";

export const VerticalAligner = ({ children }: any) => {
  const alignerCss: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirention: "column",
    height: "100%",
    width: "100%",
  };
  const Aligner = glamorous.div(alignerCss);

  return (
    <Aligner>
      {children}
    </Aligner>
  );
};

export const ToolbarItem = (props: IToolbarItemProps) => {
  const {
    children,
    // onClick,
    rootColor,
   } = props;

  if (!rootColor) {
    throw new Error(`rootColor cannot be null`);
  }

  const rootColorAsColor = Color(rootColor);
  const highlightColor = rootColorAsColor.isDark
    ? Color("white").alpha(0.2)
    : Color("black").alpha(0.2);

  const hoverColor = highlightColor.alpha(0.6);

  const toolbarContainerStyle: CSSProperties = {
    display: "inline-block",
    fontSize: `${getToolFontSize(ElementSize.Normal)}rem`,
    height: "100%",
  };
  const ToolbarItemContainer = glamorous.div(toolbarContainerStyle);

  const padding = 0.5;
  const ClickableArea = glamorous.div({
    "flex": 1,
    "backgroundColor": highlightColor.hsl().string(),
    "padding": `${padding}rem`,
    "margin": `${padding}rem`,
    ":hover": {
      backgroundColor: hoverColor.lighten(0.5).hsl().string(),
    },
    "cursor": "pointer",
  }, preventSelection);

  return (
    <ToolbarItemContainer>
      <VerticalAligner>
        <ClickableArea>
          {children}
        </ClickableArea>
      </VerticalAligner>
    </ToolbarItemContainer>
  );
};

// Toolbar Comp
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
    throw new Error("Invalid toolbar item");
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
        {toolbarItems.filter((c) => c.props.align === ToolbarItemAlign.Left)}
      </LeftContainer>
      {titleEl}
      <RightContainer>
        {toolbarItems.filter((c) => c.props.align === ToolbarItemAlign.Right )}
      </RightContainer>
    </ToolbarContainer>
  );
};
