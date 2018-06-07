import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Button, Toolbar } from "../../src";
import { ElementSize, ItemAlign } from "../../src/common";

storiesOf("8Bit/Toolbar", module)
  .add("green toolbar with text only", () => (
    <Toolbar title="Test Toolbar" rootColor="green"></Toolbar>
  ))
  .add("cyan toolbar with text only", () => (
    <Toolbar title="Test Toolbar" rootColor="cyan">
    </Toolbar>
  ))
  .add("Red toolbar with some tbar items", () => {
    const rootColor = "yellow";
    return (
      <Toolbar title="Tools" rootColor={rootColor}>
        <Button
          buttonSize={ElementSize.Small}
          rootColor="cyan"
          align={ItemAlign.Left}
          >
          Click Meh!
        </Button>
        <Button
          buttonSize={ElementSize.Small}
          rootColor="cyan"
          align={ItemAlign.Left}
          >
          Don't click meh!
        </Button>
        <Button
          buttonSize={ElementSize.Small}
          rootColor="red"
          align={ItemAlign.Right}
          >
          Click Me. Plz!
        </Button>
      </Toolbar>
    );
  });
