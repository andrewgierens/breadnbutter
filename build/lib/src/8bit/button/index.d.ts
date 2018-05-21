/// <reference types="react" />
import { GlamorousComponent } from "glamorous";
import "../fonts/press-start-2p.css";
declare const Button: GlamorousComponent<Pick<{
    theme: object;
}, never> & React.HTMLProps<HTMLButtonElement>, {
    theme: object;
}>;
export default Button;
