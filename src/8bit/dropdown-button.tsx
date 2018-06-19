import * as React from "react";
import styled from "react-emotion";
import { IDropdownButtonProps } from "../common/index";
import Button from "./button";
import Icon from "./icon";

const DropdownButton = ({ children, ...buttonProps }: IDropdownButtonProps) => {
  const Aligner = styled("div")`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
  `;

  const PrimaryButton = styled(Button)`
    flex: 1;
    height: 100%;
  `;

  const Dropdown = styled(Button)`
    margin-left: -1rem;
    height: 100%;
  `;

  return (
    <Aligner>
      <PrimaryButton {...buttonProps}>
        {children}
      </PrimaryButton>
      <Dropdown rootColor="yellow">
        <Icon icon="caret-down" />
      </Dropdown>
    </Aligner>
  );
};

export default DropdownButton;
