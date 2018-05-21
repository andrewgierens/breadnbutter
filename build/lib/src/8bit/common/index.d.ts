/// <reference types="color" />
import * as Color from "color";
import { CSSProperties } from "glamorous";
export declare const font = "'Press Start 2P', cursive";
export declare const getBackgroundColor: (rootColor: Color) => string;
export declare const getForegroundColor: (rootColor: Color) => string;
export declare const getClickable: (rootColor: Color) => CSSProperties;
export declare const get2dOutline: () => CSSProperties;
