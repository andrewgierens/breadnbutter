import glamarous, { GlamorousComponent } from "glamorous";

import { preventSelection } from "../../common";
import { buttonStyle, IButtonProps } from "../button";

const Link:
  GlamorousComponent<IButtonProps & React.HTMLProps<HTMLAnchorElement>,
    IButtonProps> = glamarous.a<IButtonProps>(
  preventSelection,
  buttonStyle, {
  fontFamily: "sans-serif",
  textDecoration: "none",
});

export default Link;
