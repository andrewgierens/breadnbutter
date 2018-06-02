import * as React from "react";
import { storiesOf } from "@storybook/react";

import Toolbar, { ToolbarItem } from "../../src/8bit/toolbar";
import { ToolbarItemAlign } from "../../src/common";

storiesOf("8Bit/Toolbar", module)
  .add("green toolbar with text only", () => (
    <Toolbar title="Test Toolbar" rootColor="green"></Toolbar>
  ))
  .add("cyan toolbar with text only", () => (
    <Toolbar title="Test Toolbar" rootColor="cyan"></Toolbar>
  ))
  .add("Red toolbar with some tbar items", () => {
    const rootColor = "purple";
    return (
      <Toolbar title="Tools" rootColor={rootColor}>
        <ToolbarItem
          onClick={() => {
            alert("testing the button");
          }}
          align={ToolbarItemAlign.Left}
          rootColor={rootColor}>
          Click Meh!
        </ToolbarItem>
        <ToolbarItem
          onClick={() => {
            alert("testing the button");
          }}
          align={ToolbarItemAlign.Right}
          rootColor={rootColor}>
          Click Me. Plz!
        </ToolbarItem>
      </Toolbar>
    );
  });
