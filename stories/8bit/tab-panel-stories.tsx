import * as React from "react";
import { storiesOf } from "@storybook/react";

import { TabPanel, Tab } from "../../src";

const rootColor = "cyan";

storiesOf("8Bit/TabPanel", module)
  .add("gray tab panel - two tabs", () => (
    <TabPanel rootColor="lightgray">
      <Tab rootColor={rootColor} title={"TEST"} />
      <Tab rootColor={rootColor} title={"TEST2"}/>
    </TabPanel>
  ));
