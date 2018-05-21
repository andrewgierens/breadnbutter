export declare enum ElementType {
    Primary = 0,
    Link = 1,
    Info = 2,
    Success = 3,
    Danger = 4,
}
export declare enum ElementSize {
    Small = "small",
    Normal = "normal",
    Large = "large",
}
export declare const getColor: (type: ElementType) => string;
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
