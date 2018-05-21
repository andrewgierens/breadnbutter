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
