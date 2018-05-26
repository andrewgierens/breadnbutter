import * as React from "react";
import { storiesOf } from "@storybook/react";

import Toolbar from "../../src/8bit/toolbar";

storiesOf("8Bit/Toolbar", module)
  .add("toolbar with text only", () => (
    <Toolbar title="Test Toolbar" rootColor="green"></Toolbar>
  ))
  .add("toolbar with text only. custom width", () => (
    <Toolbar title="Test Toolbar" rootColor="blue" width={60}></Toolbar>
  ))
  .add("toolbar with text only. custom height", () => (
    <Toolbar title="Test Toolbar" rootColor="blue" height={15}></Toolbar>
  ));
