import * as React from "react";
import { IIconProps, getFontSize } from "../common/index";
import styled from "react-emotion";

const Icon = ({ icon, size }: IIconProps) => {

  let I = styled("span")`
    vertical-align: middle;
    display: inline-block;
  `;

  if (size) {
    const fontSize = getFontSize(size) * 1.5;

    I = styled(I)`
      font-size: ${fontSize}rem;
      margin-right: 1rem;
    `;
  }

  return (
    <I className={`fas fa-${icon}`} ></I>
  );
};

export default Icon;
