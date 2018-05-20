/// <reference types="react" />
import { CSSProperties, GlamorousComponent } from "glamorous";
export declare enum ButtonSize {
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
export declare const buttonStyle: (props: IButtonProps) => CSSProperties;
declare const Button: GlamorousComponent<IButtonProps & React.HTMLProps<HTMLButtonElement>, IButtonProps>;
export default Button;
