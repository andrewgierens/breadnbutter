import * as React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../../src/8bit/button";

storiesOf("8Bit/Button", module)
  .add("normal with text (primary)", () => (
    <Button type="primary">Normal Primary</Button>
  ))
  .add("small with text (link)", () => (
    <Button buttonSize="small" type="link" >Small Link</Button>
  ))
  .add("large with text (info)", () => (
    <Button buttonSize="large" type="info">Large Info</Button>
  ))
  .add("normal with text (success)", () => (
    <Button buttonSize="normal" type="success">Yay. Success.</Button>
  ))
  .add("small with text (danger)", () => (
    <Button buttonSize="small" type="danger">Eeep. Dangja!</Button>
  ))
  .add("small with text (purple)", () => (
    <Button buttonSize="small" color="purple">Who da purp?</Button>
  ));
