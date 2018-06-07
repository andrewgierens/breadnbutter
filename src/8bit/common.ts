import * as Color from "color";
import { css } from "emotion";

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

export const getClickable = (rootColor: Color): string => {
  const shadowColor = rootColor.darken(0.25).hex().toString();

  const hoverAndFocus = css`
    box-shadow: inset -${ shadowWidth * 1.5 }rem -${shadowWidth * 1.5}rem 0px 0px ${shadowColor};
    outline: 0;
  `;

  return css`
    cursor: pointer;
    box-shadow: inset -${shadowWidth}rem -${shadowWidth}rem 0px 0px ${shadowColor};
    &:hover {
      ${hoverAndFocus};
      background: ${rootColor.darken(0.075).hex().toString()};
    };
    &:focus {
      ${hoverAndFocus};
    };
    &:active {
      box-shadow: inset ${shadowWidth}rem ${shadowWidth}rem 0px 0px ${shadowColor};
    };
  `;
};

export const get2dOutline = (rootColor: string = "white"): string => {
  const beforeAfter = css`
    content: ' ';
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
  `;

  const mainColor = Color(rootColor);
  const borderColor = mainColor.isLight ? "black" : "white";

  const before = css`
    top: -${outlineWidth}rem;
    left: 0;
    border-top: ${outlineWidth}rem ${borderColor} solid;
    border-bottom: ${outlineWidth}rem ${borderColor} solid;
    pointer-events: none;
  `;

  const after = css`
    left: -${outlineWidth}rem;
    top: 0;
    border-left: ${outlineWidth}rem ${borderColor} solid;
    border-right: ${outlineWidth}rem ${borderColor} solid;
    pointer-events: none;
  `;

  const style = css`
    &:after {
      ${beforeAfter};
      ${after};
    };
    &:before {
      ${beforeAfter};
      ${before};
    };
  `;

  return style;
};
