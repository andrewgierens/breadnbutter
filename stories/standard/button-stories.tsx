import { storiesOf } from "@storybook/react";
import React from "react";

import Button from "../../src/clean/button";

storiesOf("Clean/Button", module)
  .add("normal with text", () => (
    <Button>Buffon</Button>
  ))
  .add("small with text", () => (
    <Button size="small">Test button</Button>
  ))
  .add("large with text", () => (
    <Button size="large">Test button</Button>
  ))
  .add("normal with text (primary)", () => (
    <Button primary>Test button</Button>
  ))
  .add("normal with text lotsa text (primary)", () => (
    <Button primary>Test button with a really long text option</Button>
  ))
  .add("small with text (primary)", () => (
    <Button primary size="small">Test button</Button>
  ))
  .add("large with text (primary)", () => (
    <Button primary size="large">Test button</Button>
  ))
  .add("normal with text custom color", () => (
    <Button rootColor="#4286f4" size="normal">Test button</Button>
  ))
  .add("normal with text custom color (primary)", () => (
    <Button primary rootColor="#4286f4" size="normal">Test button</Button>
  ));
