import React from "react";
import { storiesOf } from "@storybook/react";

import { Link } from "../../src/clean/link";

storiesOf("Clean/Link", module)
  .add("link to googz", () => (
    <Link target="_blank" href="http://www.google.com">Googz</Link>
  ));
