// General Styles
import * as React from "react";
import {
  IToolbarProps,
  disabledElement,
  getColor,
  getPadding,
  ElementSize,
  ToolbarItemAlign,
  IToolbarItemProps,
} from "../../common";
import glamorous, { CSSProperties } from "glamorous";
import {
  getBackgroundColor,
  getForegroundColor,
  font,
  get2dOutline,
} from "../common/index";

// height/width in rem
export const toolbarStyle = (
  rootColor: string = "black",
): CSSProperties => {
  const mainColor = getColor(null, rootColor);

  const style: CSSProperties = {
    "display": "flex",
    "position": "relative",
    "flex": 1,
    "fontFamily": font,
    "background": getBackgroundColor(mainColor),
    "color": getForegroundColor(mainColor),
    ":disabled": disabledElement,
  };

  return style as CSSProperties;
};

export class ToolbarItem extends React.PureComponent<IToolbarItemProps> {
  public align: ToolbarItemAlign;
  constructor(props: IToolbarItemProps) {
    super(props);
    this.align = props.align;
  }

  public render() {
    const { children, onClick } = this.props;
    const ToolbarItemContainer = glamorous.span();

    return (
      <ToolbarItemContainer onClick={onClick}>
        {children}
      </ToolbarItemContainer>
    );
  }
}

export default ({
  disabled,
  rootColor,
  title,
  children,
}: IToolbarProps) => {
  const ToolbarContainer = glamorous.div(
    toolbarStyle(rootColor),
    get2dOutline(),
  );

  const ToolbarTitle = glamorous.span({
    flex: 1,
    textAlign: "center",
    padding: `${getPadding(ElementSize.Normal)}rem`,
  });

  const LeftContainer = glamorous.span();
  const RightContainer = glamorous.span();

  const toolbarItems = children ? children as ToolbarItem[] : null;

  const titleEl = title ? (
    <ToolbarTitle>
      {title}
    </ToolbarTitle>
  ) : undefined;

  return (
    <ToolbarContainer disabled={disabled}>
      <LeftContainer>
        {toolbarItems && toolbarItems.filter((c) => c.align === ToolbarItemAlign.Left)}
      </LeftContainer>
      {titleEl}
      <RightContainer>
        {toolbarItems && toolbarItems.filter((c) => c.align === ToolbarItemAlign.Right )}
      </RightContainer>
    </ToolbarContainer>
  );
};
