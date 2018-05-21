import glamorous, { CSSProperties, GlamorousComponent } from "glamorous";
import * as Color from "color";

import "../fonts/press-start-2p.css";

// General Styles
import {
  preventSelection,
  IButtonProps,
  getColor,
  getFontSize,
  getPadding,
  ElementSize,
} from "../../common";

// 8 Bit Styles
import {
  font, getBackgroundColor, getForegroundColor, getClickable, get2dOutline,
} from "../common";

const buttonStyle = (props: IButtonProps): CSSProperties => {
  const {
    buttonSize = ElementSize.Normal,
    buttonType,
    rootColor,
  } = props;

  let mainColor = null;
  if (rootColor) { mainColor = Color(rootColor); }
  if (buttonType) { mainColor = Color(getColor(buttonType)); }

  if (!mainColor) {
    throw new Error("Unable to determine color");
  }

  const style = {
    display: "inline-block",
    position: "relative",
    textAlign: "center",
    cursor: "pointer",
    textDecoration: "none",
    fontFamily: font,
    fontSize: `${getFontSize(buttonSize)}rem`,
    background: getBackgroundColor(mainColor),
    color: getForegroundColor(mainColor),
    padding: `${getPadding(buttonSize)}rem`,
    ...getClickable(mainColor),
    ...get2dOutline(),
  };

  return style as CSSProperties;
};

const Button:
  GlamorousComponent<IButtonProps & React.HTMLProps<HTMLButtonElement>,
    IButtonProps> = glamorous.button<IButtonProps>(
  preventSelection,
  buttonStyle,
);

export default Button;
