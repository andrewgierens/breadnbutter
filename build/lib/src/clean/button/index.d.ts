/// <reference types="react" />
import { CSSProperties, GlamorousComponent } from "glamorous";
export interface IButtonProps {
    rootColor?: string;
    highlightColor?: string;
    size?: string;
    primary?: boolean;
}
export declare const buttonStyle: (props: IButtonProps) => CSSProperties;
declare const Button: GlamorousComponent<IButtonProps & React.HTMLProps<HTMLButtonElement>, IButtonProps>;
export default Button;
