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
  .add("cyan toolbar with no text", () => (
    <Toolbar>
      <ToolbarItem align={ToolbarItemAlign.Left}></ToolbarItem>
    </Toolbar>
  ));
