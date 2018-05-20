import glamarous, { GlamorousComponent } from "glamorous";

import preventSelection from "../../common/prevent-selection";
import { buttonStyle, IButtonProps } from "../button";

export const Link:
  GlamorousComponent<IButtonProps & React.HTMLProps<HTMLAnchorElement>,
    IButtonProps> = glamarous.a<IButtonProps>(
  preventSelection,
  buttonStyle, {
  fontFamily: "sans-serif",
  textDecoration: "none",
});
