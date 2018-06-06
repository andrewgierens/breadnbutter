import * as React from "react";
import styled from 'react-emotion';
import { storiesOf } from "@storybook/react";

import { Panel } from "../../src/8bit";

const StyledDiv = styled('div')`
  height: 25rem;
  width: 25rem;
`;

storiesOf("8Bit/Panel", module)
  .add("green panel", () => (
    <StyledDiv><Panel rootColor="lightgray"></Panel></StyledDiv>
));
