import glamorous, { CSSProperties, GlamorousComponent } from "glamorous";
import * as Color from "color";

import "../fonts/press-start-2p.css";

import {
  preventSelection,
  IButtonProps,
  getColor,
  getFontSize,
  getPadding,
  ElementSize,
} from "../../common";

const buttonStyle = (props: IButtonProps): CSSProperties => {
  const {
    buttonSize = ElementSize.Normal,
    buttonType,
    rootColor,
  } = props;
  const style = {
    display: "",
    position: "",
    textAlign: "",
    cursor: "",
    textDecoration: "",
    fontFamily: "",
    fontSize: "",
    color: "",
    background: "",
    padding: "",
    boxShadow: "",
  };

  // Some random stuff
  style.display = "inline-block";
  style.position = "relative";
  style.textAlign = "center";
  style.cursor = "pointer";
  style.textDecoration = "none";

  // Button sizing
  let mainColor = null;
  if (rootColor) { mainColor = Color(rootColor); }
  if (buttonType) { mainColor = Color(getColor(buttonType)); }

  if (!mainColor) {
    throw new Error("Unable to determine color");
  }

  style.fontFamily = "'Press Start 2P', cursive";
  style.fontSize = `${getFontSize(buttonSize)}rem`;
  style.background = mainColor.hex().toString();
  style.color = mainColor.isDark() ? "white" : "black";
  style.padding = `${getPadding(buttonSize)}rem`;

  // Fancy fancy, with the fancy schmancy
  const shadowWidth = 0.2;
  const shadowColor = mainColor.darken(0.25).hex().toString();
  style.boxShadow = `inset -${shadowWidth}rem -${shadowWidth}rem 0px 0px ${shadowColor}`;

  // Hova
  const hoverAndFocus = {
    boxShadow: `inset -${shadowWidth * 1.5}rem -${shadowWidth * 1.5}rem 0px 0px ${shadowColor}`,
    outline: 0,
  };

  style[":hover"] = {
    ...hoverAndFocus,
    background: mainColor.darken(0.075).hex().toString(),
  };
  style[":focus"] = hoverAndFocus;
  style[":active"] = {
    boxShadow: `inset ${shadowWidth}rem ${shadowWidth}rem 0px 0px ${shadowColor}`,
  };

  const outlineWidth = 0.25;

  const beforeAfter = {
    content: " ",
    position: "absolute",
    width: "100%",
    height: "100%",
    boxSizing: "content-box",
  };

  const before = {
    top: `-${outlineWidth}rem`,
    left: 0,
    borderTop: `${outlineWidth}rem black solid`,
    borderBottom: `${outlineWidth}rem black solid`,
  };

  const after = {
    left: `-${outlineWidth}rem`,
    top: 0,
    borderLeft: `${outlineWidth}rem black solid`,
    borderRight: `${outlineWidth}rem black solid`,
  };

  style[":after"] = {
    ...beforeAfter,
    ...after,
  };

  style[":before"] = {
    ...beforeAfter,
    ...before,
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
