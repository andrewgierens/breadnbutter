import * as React from "react";
import { storiesOf } from "@storybook/react";

import Toolbar from "../../src/8bit/toolbar";

storiesOf("8Bit/Toolbar", module)
  .add("toolbar with text only", () => (
    <Toolbar title="Test Toolbar" rootColor="green"></Toolbar>
  ));
