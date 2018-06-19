import * as React from "react";
import styled from "react-emotion";
import { IDropdownButtonProps, ElementSize } from "../common/index";
import Button from "./button";
import Icon from "./icon";

const DropdownButton = ({ children, ...buttonProps }: IDropdownButtonProps) => {
  const Aligner = styled("div")`
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `;

  const StyledButton = styled(Button)`
    flex: 1;
  `;

  const Dropdown = styled(Button)`
    margin-left: -1rem;
  `;

  return (
    <Aligner>
      <StyledButton {...buttonProps}>
        {children}
      </StyledButton>
      <Dropdown rootColor="yellow">
        <Icon icon="caret-down" size={ElementSize.Normal} />
      </Dropdown>
    </Aligner>
  );
};

export default DropdownButton;
