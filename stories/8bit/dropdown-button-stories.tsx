import * as React from "react";
import { storiesOf } from "@storybook/react";

import { DropdownButton } from "../../src";
import { ElementSize, ElementType } from "../../src/common";

storiesOf("8Bit/DropdownButton", module)
  .add("normal with text", () => (
    <DropdownButton buttonSize={ElementSize.Normal} buttonType={ElementType.Primary}>
      Normal Primary
    </DropdownButton>
  ));
