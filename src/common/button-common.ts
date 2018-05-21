import { ElementType } from ".";

export enum ButtonSize {
  Small = "small",
  Normal = "normal",
  Large = "large",
}

export interface IButtonProps {
  buttonSize: ButtonSize;
  type?: ElementType;
  color: string;
  disabled?: boolean;
  loading?: boolean;
}

export const getFontSize = (size: ButtonSize): number => {
  switch (size) {
    case ButtonSize.Large:
      return 1;
    case ButtonSize.Normal:
      return 0.95;
    case ButtonSize.Small:
      return 0.7;
  }

  throw new Error(`Invalid ButtonSize ${size}`);
};

export const getPadding = (size: ButtonSize): number => {
  switch (size) {
    case ButtonSize.Large:
      return 1.5;
    case ButtonSize.Normal:
      return 1.25;
    case ButtonSize.Small:
      return 1;
  }

  throw new Error(`Invalid ButtonSize ${size}`);
};
