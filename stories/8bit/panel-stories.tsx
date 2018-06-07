import * as React from "react";
import styled, { css } from 'react-emotion';
import { storiesOf } from "@storybook/react";

import { Panel, Toolbar, Button } from "../../src";
import { ElementSize, ItemAlign } from "../../src/common";

const StyledDiv = styled('div')`
  height: 50rem;
  width: 50%;
`;

const ToolbarComp = (
  <Toolbar title="Test Toolbar" rootColor="cyan"/>
);

const rootColor = "cyan";
const ToolbarCompWithButtons = (
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

const flexPanelCenterChildren = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

storiesOf("8Bit/Panel", module)
  .add("gray panel - no toolbar", () => (
    <StyledDiv>
      <Panel rootColor="lightgray" />
    </StyledDiv>
  ))
  .add("gray panel - with toolbar", () => (
    <StyledDiv>
      <Panel rootColor="lightgray" toolbar={ToolbarComp} />
    </StyledDiv>
  ))
  .add("gray panel - with toolbar and buttons", () => (
    <StyledDiv>
      <Panel rootColor="lightgray" toolbar={ToolbarCompWithButtons} />
    </StyledDiv>
  ))
  .add("gray panel - with toolbar and bbar", () => (
    <StyledDiv>
      <Panel rootColor="lightgray" toolbar={ToolbarComp} bottomBar={ToolbarCompWithButtons} />
    </StyledDiv>
  ))
  .add("gray panel - with child div", () => (
    <StyledDiv>
      <Panel rootColor="lightgray" className={flexPanelCenterChildren}>
        <div>
          TEST DIV
        </div>
      </Panel>
    </StyledDiv>
  ));
