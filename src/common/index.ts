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

export const getColor = (type: ElementType): string => {
  switch (type) {
    case ElementType.Danger:
      return "#fe432f";
    case ElementType.Info:
      return "#52bbf4";
    case ElementType.Link:
      return "#ffab00";
    case ElementType.Primary:
      return "#ff85cb";
    case ElementType.Success:
      return "#b1eb02";
  }

  throw Error(`Invalid ElementType ${type}`);
};

export interface IButtonProps {
  buttonSize?: ElementSize;
  buttonType?: ElementType;
  rootColor?: string;
  disabled?: boolean;
  loading?: boolean;
}

export const getFontSize = (size: ElementSize): number => {
  switch (size) {
    case ElementSize.Large:
      return 1;
    case ElementSize.Normal:
      return 0.95;
    case ElementSize.Small:
      return 0.7;
  }

  throw new Error(`Invalid ElementSize ${size}`);
};

export const getPadding = (size: ElementSize): number => {
  switch (size) {
    case ElementSize.Large:
      return 1.5;
    case ElementSize.Normal:
      return 1.25;
    case ElementSize.Small:
      return 1;
  }

  throw new Error(`Invalid ElementSize ${size}`);
};

export const preventSelection = {
  "-khtml-user-select": "none",
  "-moz-user-select": "none",
  "-ms-user-select": "none",
  "-webkit-touch-callout": "none",
  "-webkit-user-select": "none",
};
