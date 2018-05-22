import * as React from "react";
import { storiesOf } from "@storybook/react";

import Button, { ButtonSize } from "../../src/clean/button";

storiesOf("Clean/Button", module)
  .add("normal with text", () => (
    <Button>Buffon</Button>
  ))
  .add("small with text", () => (
    <Button buttonSize={ButtonSize.Small}>Test button</Button>
  ))
  .add("large with text", () => (
    <Button buttonSize={ButtonSize.Large}>Test button</Button>
  ))
  .add("normal with text (primary)", () => (
    <Button primary>Test button</Button>
  ))
  .add("normal with text lotsa text (primary)", () => (
    <Button primary>Test button with a really long text option</Button>
  ))
  .add("small with text (primary)", () => (
    <Button primary buttonSize={ButtonSize.Small}>Test button</Button>
  ))
  .add("large with text (primary)", () => (
    <Button primary buttonSize={ButtonSize.Large}>Test button</Button>
  ))
  .add("normal with text custom color", () => (
    <Button rootColor="#4286f4">Test button</Button>
  ))
  .add("normal with text custom color (primary)", () => (
    <Button primary rootColor="#4286f4">Test button</Button>
  ));
