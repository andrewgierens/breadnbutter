import * as React from "react";
import { IIconProps } from "../common/index";
import styled from "react-emotion";

const Icon = ({ icon }: IIconProps) => {
  // const fontSize = getFontSize(size) * 1.5;
//
    /* font-size: ${fontSize}rem; */
    /* margin-right: 1rem; */

  const I = styled("span")`
    vertical-align: middle;
    display: inline-block;
  `;

  return (
    <I className={`fas fa-${icon}`} ></I>
  );
};

export default Icon;
