import glamorous, { CSSProperties, GlamorousComponent } from "glamorous";

import preventSelection from "../../common/prevent-selection";
import borderWithColor from "../common/border-with-color";
import fontSizes from "../common/font-sizes";

export enum ButtonSize {
  Small = "small",
  Normal = "normal",
  Large = "large",
}

export interface IButtonProps {
  rootColor?: string;
  highlightColor?: string;
  buttonSize?: ButtonSize;
  primary?: boolean;
}

export const buttonStyle = (props: IButtonProps): CSSProperties => {
  const {
    rootColor = "#e06377",
    highlightColor = "white",
    buttonSize = ButtonSize.Normal,
    primary = false,
  } = props;

  // Some sizing
  let padding = "0.65rem";
  let minWidth = "8rem";

  if (buttonSize === ButtonSize.Large) { padding = "0.75rem"; }
  if (buttonSize === ButtonSize.Small) { padding = "0.5rem"; }

  if (buttonSize === ButtonSize.Large) { minWidth = "10rem"; }
  if (buttonSize === ButtonSize.Small) { minWidth = "6rem"; }

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
    "color": color,
    "backgroundColor": backgroundColor,
    "border": border,
    "borderRadius": "0.2rem",
    "cursor": "pointer",
    "display": "inline-block",
    "textAlign": "center",
    "transition": "0.3s",
    ...preventSelection,
    "fontSize": fontSizes[buttonSize],
    "minWidth": minWidth,
    "padding": padding,
    ":focus": {
       outline: 0,
    },
    ":hover": hover,
    ":active": active,
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
