import * as React from "react";
import styled, { css } from 'react-emotion';

import {
  IToolbarProps,
  disabledElement,
  getColor,
  ItemAlign,
  preventSelection,
} from "../common";
import {
  getBackgroundColor,
  getForegroundColor,
  font,
  get2dOutline,
} from "./common";
import VerticalAligner from "./vertical-aligner";

export const toolbarStyle = (
  rootColor: string = "black",
): string => {
  const mainColor = getColor(null, rootColor);

  const style = css`
    display: flex;
    position: relative;
    flex: 1;
    fontFamily: ${font};
    minHeight: 3rem;
    padding: 0.25rem;
    boxShadow: 5px 5px 0px 0px rgba(71,71,71,1);
    background: ${getBackgroundColor(mainColor)};
    color: ${getForegroundColor(mainColor)};
    &:disabled: {
      ${disabledElement};
    };
  `;

  return style;
};

export default ({
  disabled,
  rootColor,
  title,
  children,
}: IToolbarProps) => {
  const ToolbarContainer = styled('div')`
    ${toolbarStyle(rootColor)};
    ${get2dOutline(rootColor)};
    ${preventSelection};
  `;

  const LeftContainer = styled('div')`
    flex: 1;
    text-align: left;
  `;

  const RightContainer = styled('div')`
    flex: 1;
    text-align: right;
  `;

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

  // TODO: Took out disabled={disabled}
  // Maybe apply this to the children instead??
  return (
    <ToolbarContainer>
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
