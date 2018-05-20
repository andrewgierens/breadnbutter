import React from "react";
import glamorous, { CSSProperties, GlamorousComponent } from "glamorous";

import preventSelection from "../../common/prevent-selection";
import borderWithColor from "../common/border-with-color";
import fontSizes from "../common/font-sizes";

export interface IButtonProps {
  rootColor?: string;
  highlightColor?: string;
  size?: string;
  primary?: boolean;
}

export const buttonStyle = (props: IButtonProps): CSSProperties => {
  const {
    rootColor = "#e06377",
    highlightColor = "white",
    size = "normal",
    primary = false,
  } = props;

  // Some sizing
  let padding = "0.65rem";
  let minWidth = "8rem";

  if (size === "large") { padding = "0.75rem"; }
  if (size === "small") { padding = "0.5rem"; }

  if (size === "large") { minWidth = "10rem"; }
  if (size === "small") { minWidth = "6rem"; }

  // Some coloring
  let color = rootColor;
  let backgroundColor = highlightColor;
  let border = borderWithColor(color);

  if (primary) {
    color = backgroundColor;
    backgroundColor = rootColor;
    border = borderWithColor(backgroundColor);
  }

  // On hover, we laugh bruz!
  const hover = {
    backgroundColor: color,
    border: "",
    color: backgroundColor,
  };

  if (primary) {
    hover.border = borderWithColor(backgroundColor);
  } else {
    hover.border = borderWithColor(color);
  }

  // On click, we fly bruz
  const active = {
    backgroundColor: "",
    color: "",
  };

  if (primary) {
    active.backgroundColor = backgroundColor;
    active.color = backgroundColor;
  } else {
    active.backgroundColor = color;
    active.color = color;
  }

  const retVal: CSSProperties = {
    ":active": active,
    ":focus": {
       outline: 0,
    },
    ":hover": hover,
    "color": color,
    "backgroundColor": backgroundColor,
    "border": border,
    "borderRadius": "0.2rem",
    "cursor": "pointer",
    "display": "inline-block",
    "textAlign": "center",
    "transition": "0.3s",
    ...preventSelection,
    "fontSize": fontSizes[size],
    "minWidth": minWidth,
    "padding": padding,
  };

  return retVal;
};

const Button:
  GlamorousComponent<IButtonProps & React.HTMLProps<HTMLButtonElement>,
    IButtonProps> = glamorous.button<IButtonProps>(
  preventSelection,
  buttonStyle,
);

export default Button;
