import type { StoryObj } from "@storybook/react";
import { Tabset } from "../components/Tabset"
import { tabUpdateContents } from "../components/Tabset/helpers";

const meta = {
  title: "Molecules/Tabset",
  component: Tabset,
  tags: ["docsPage"]
};

const tab1 = {
  id: 'testtab1',
  isActive: true,
  label: 'Test Tab1',
  renderContent: () => <h3>Test Tab1 Content</h3>
}

const tab2 = {
  id: 'testtab2',
  isActive: false,
  label: 'Test Tab2',
  renderContent: () => <h3>Test Tab2 Content</h3>
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
Default.args = {
  tabs: [ tab1, tab2 ]
}

export const Updated: Story = {}
Updated.args = {
  tabs: [ tab1, tab2 ]
}

function setTabsFnTest(updatedTabContents: any) {
  Updated.args.tabs = [updatedTabContents, tab2]
}

tabUpdateContents({tab: tab1, tabContents: <h3>Test Tab1 Content Updated</h3>, setTabFn: setTabsFnTest})