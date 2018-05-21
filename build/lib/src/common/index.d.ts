/// <reference types="color" />
import * as Color from "color";
export declare enum ElementType {
    Primary = 1,
    Link = 2,
    Info = 3,
    Success = 4,
    Danger = 5,
}
export declare enum ElementSize {
    Small = "small",
    Normal = "normal",
    Large = "large",
}
export declare const getColor: (type?: ElementType | undefined, rootColor?: string | undefined) => Color;
export interface IButtonProps {
    buttonSize?: ElementSize;
    buttonType?: ElementType;
    rootColor?: string;
    disabled?: boolean;
    loading?: boolean;
}
export declare const getFontSize: (size: ElementSize) => number;
export declare const getPadding: (size: ElementSize) => number;
export declare const preventSelection: {
    "-khtml-user-select": string;
    "-moz-user-select": string;
    "-ms-user-select": string;
    "-webkit-touch-callout": string;
    "-webkit-user-select": string;
};
export declare const disabledElement: {
    opacity: number;
    cursor: string;
};
export declare const loadingElement: {};
