import * as Color from "color";
import { css } from "emotion";

export enum ElementType {
  Primary = 1,
  Link = 2,
  Info = 3,
  Success = 4,
  Danger = 5,
}

export enum ElementSize {
  Small = "small",
  Normal = "normal",
  Large = "large",
}

export const getColor = (
  type?: ElementType | null,
  rootColor?: string | null,
): Color => {
  let colorAsString = null;

  if (type) {
    switch (type) {
      case ElementType.Danger:
        colorAsString = "#fe432f";
        break;
      case ElementType.Info:
        colorAsString = "#52bbf4";
        break;
      case ElementType.Link:
        colorAsString = "#ffab00";
        break;
      case ElementType.Primary:
        colorAsString = "#ff85cb";
        break;
      case ElementType.Success:
        colorAsString = "#b1eb02";
        break;
    }
  }

  if (rootColor) {
    colorAsString = rootColor;
  }

  if (!colorAsString) {
    throw new Error("Unbale to determine color");
  }

  const colorAsColor = Color(colorAsString);

  if (!colorAsColor) {
    throw Error(`Unbale to determine color (${type}|${rootColor})`);
  }

  return colorAsColor;
};

export interface IElementBase {
  disabled?: boolean;
  loading?: boolean;
  rootColor?: string;
  align?: ItemAlign;
}

export interface IIconProps {
  icon: string;
  size: ElementSize;
}

export interface IButtonProps extends IElementBase {
  buttonSize?: ElementSize;
  buttonType?: ElementType;
  children?: any;
  onClick?: () => void;
}

export enum ItemAlign {
  Left = 1,
  Right = 2,
}

export interface IPanelProps extends IElementBase {
  toolbar?: any;
  bottomBar?: any;
  children?: any;
  className?: any;
}

export interface IToolbarProps extends IElementBase {
  title?: string;
  children?: any;
}

export interface IDropdownButtonProps extends IButtonProps {
  dropIcon?: string;
}

export const getFontSize = (size: ElementSize): number => {
  switch (size) {
    case ElementSize.Large:
      return 1.5;
    case ElementSize.Normal:
      return 1;
    case ElementSize.Small:
      return 0.75;
  }

  throw new Error(`Invalid ElementSize ${size}`);
};

export const getPadding = (size: ElementSize): number => {
  switch (size) {
    case ElementSize.Large:
      return 1.75;
    case ElementSize.Normal:
      return 1.25;
    case ElementSize.Small:
      return 1;
  }

  throw new Error(`Invalid ElementSize ${size}`);
};

export const preventSelection = css`
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
`;

export const disabledElement = {
  opacity: 0.65,
  cursor: "not-allowed",
};

export const loadingElement = {

};
