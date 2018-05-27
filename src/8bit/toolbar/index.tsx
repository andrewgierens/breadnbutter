// General Styles
import * as React from "react";
import {
  IToolbarProps,
  // disabledElement,
  getColor,
  getPadding,
  getToolFontSize,
  ElementSize,
  ToolbarItemAlign,
  IToolbarItemProps,
} from "../../common";
import glamorous, { CSSProperties } from "glamorous";
import {
  getBackgroundColor,
  getForegroundColor,
  font,
  get2dOutline,
} from "../common/index";

export const VerticalAligner = ({ children }: any) => {
  const Aligner = glamorous.div({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirention: "column",
    height: "100%",
    width: "100%",
  });

  const Filler = glamorous.div({
    flex: 1,
  });

  return (
    <Aligner>
      <Filler />
        {children}
      <Filler />
    </Aligner>
  );
};

const potato = () => {
  alert("things");
};

export const ToolbarItem = (props: IToolbarItemProps) => {
  const { children } = props;
  const ToolbarItemContainer = glamorous.div({
    "display": "inline-block",
    "fontSize": `${getToolFontSize(ElementSize.Normal)}rem`,
    "height": "100%",
    "padding": getPadding(ElementSize.Normal),
    ":hover": {
      backgroundColor: "blue",
    },
  });

  return (
    <ToolbarItemContainer onClick={() => {
      debugger;
      potato();
    }}>
      <VerticalAligner>
        {children}
      </VerticalAligner>
    </ToolbarItemContainer>
  );
};

// height/width in rem
export const toolbarStyle = (
  rootColor: string = "black",
): CSSProperties => {
  const mainColor = getColor(null, rootColor);

  const style: CSSProperties = {
    display: "flex",
    position: "relative",
    flex: 1,
    fontFamily: font,
    background: getBackgroundColor(mainColor),
    color: getForegroundColor(mainColor),
    // ":disabled": disabledElement,
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
  );

  const ToolbarTitle = glamorous.span({
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: `${getPadding(ElementSize.Normal)}rem`,
  });

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
    <ToolbarTitle>
      {title}
    </ToolbarTitle>
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
