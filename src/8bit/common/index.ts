import * as Color from "color";
import { CSSProperties } from "glamorous";

// Some consties
const shadowWidth = 0.2;
const outlineWidth = 0.25;

export const font = "'Press Start 2P', cursive";

export const getBackgroundColor = (rootColor: Color): string => {
  return rootColor.hex().toString();
};

export const getForegroundColor = (rootColor: Color): string => {
  return rootColor.isDark() ? "white" : "black";
};

export const getClickable = (rootColor: Color): CSSProperties => {
  const shadowColor = rootColor.darken(0.25).hex().toString();

  const hoverAndFocus = {
    boxShadow: `inset -${shadowWidth * 1.5}rem -${shadowWidth * 1.5}rem 0px 0px ${shadowColor}`,
    outline: 0,
  };

  return {
    "cursor": "pointer",
    "boxShadow": `inset -${shadowWidth}rem -${shadowWidth}rem 0px 0px ${shadowColor}`,
    ":hover": {
      ...hoverAndFocus,
      background: rootColor.darken(0.075).hex().toString(),
    },
    ":focus": hoverAndFocus,
    ":active": {
      boxShadow: `inset ${shadowWidth}rem ${shadowWidth}rem 0px 0px ${shadowColor}`,
    },
  };
};

export const get2dOutline = (rootColor: string = "white"): CSSProperties => {
  const beforeAfter = {
    content: " ",
    position: "absolute",
    width: "100%",
    height: "100%",
    boxSizing: "content-box",
  };

  const mainColor = Color(rootColor);
  const borderColor = mainColor.isLight ? "black" : "white";

  const before = {
    top: `-${outlineWidth}rem`,
    left: "0",
    borderTop: `${outlineWidth}rem ${borderColor} solid`,
    borderBottom: `${outlineWidth}rem ${borderColor} solid`,
  };

  const after = {
    left: `-${outlineWidth}rem`,
    top: "0",
    borderLeft: `${outlineWidth}rem ${borderColor} solid`,
    borderRight: `${outlineWidth}rem ${borderColor} solid`,
  };

  const style = {
    ":after": {
      ...beforeAfter,
      ...after,
    },
    ":before": {
      ...beforeAfter,
      ...before,
    },
  };

  return style as CSSProperties;
};
