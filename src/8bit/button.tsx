import * as React from "react";
import styled, { css } from "react-emotion";

import "./fonts/press-start-2p.css";

// General Styles
import {
  preventSelection,
  IButtonProps,
  getColor,
  getFontSize,
  getPadding,
  ElementSize,
  disabledElement,
} from "../common";

// 8 Bit Styles
import {
  font,
  getBackgroundColor,
  getForegroundColor,
  getClickable,
  get2dOutline,
} from "./common";

const buttonStyle = ({
  buttonSize = ElementSize.Normal,
  buttonType,
  rootColor,
  disabled,
  loading,
}: IButtonProps): string => {
  const mainColor = getColor(buttonType, rootColor);
  return css`
    display: inline-block;
    position: relative;
    text-align: center;
    text-decoration: none;
    border: none;
    font-family: ${font};
    margin: 0.5rem;
    font-size: ${getFontSize(buttonSize) }rem;
    background: ${getBackgroundColor(mainColor)};
    color: ${getForegroundColor(mainColor)};
    padding: ${getPadding(buttonSize)}rem;
    ${(disabled ? {} : getClickable(mainColor))};
    ${get2dOutline()};
    ${(loading ? { disabledElement } : {})};
    &:disabled {
      ${disabledElement};
    }
  `;
};

const Button = ({children, onClick, ...props}: IButtonProps) => {
  const StyledButton = styled('button')`
    ${preventSelection};
    ${buttonStyle(props)};
  `;

  return (
    <StyledButton onClick={() => onClick && onClick()} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
