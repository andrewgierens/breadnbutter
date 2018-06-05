import * as React from "react";
import glamorous, { CSSProperties } from "glamorous";
import { ItemAlign } from "../common/index";

const VerticalAligner = ({ align, children }: any) => {
  const alignerCss: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  };

  if (align && align === ItemAlign.Left) {
    alignerCss.alignItems = "flex-start";
  }

  if (align && align === ItemAlign.Right) {
    alignerCss.alignItems = "flex-end";
  }

  const Aligner = glamorous.div(alignerCss);

  return (
    <Aligner>
      {children}
    </Aligner>
  );
};

export default VerticalAligner;
