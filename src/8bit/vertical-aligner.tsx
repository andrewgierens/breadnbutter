import * as React from "react";
import { ItemAlign } from "../common/index";
import styled, { css } from "react-emotion";

const VerticalAligner = ({ align, children }: any) => {
  let alignItems = "center";
  if (align && align === ItemAlign.Left) {
    alignItems = "flex-start";
  }

  if (align && align === ItemAlign.Right) {
    alignItems = "flex-end";
  }

  const alignerCss: string = css`
    display: flex;
    align-items: ${alignItems};
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
  `;

  const Aligner = styled("div")`
    ${alignerCss};
  `;

  return (
    <Aligner>
      {children}
    </Aligner>
  );
};

export default VerticalAligner;
