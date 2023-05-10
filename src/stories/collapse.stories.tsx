import type { StoryObj } from "@storybook/react";
import { Collapse } from "../components/Collapse"

const meta = {
  title: "Molecules/Collapse",
  component: Collapse,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
Default.args = {
  label: 'On the Origin of Species',
  idCollapse: 'collapseButton',
  text: ['Book by Charles Darwin, 1859 — On the Origin of Species, published on 24 November 1859, is a work of scientific literature by Charles Darwin which is considered to be the foundation of evolutionary biology.'],
  onClickFn: () => console.log("Collapse Button")
}

export const HeaderCollapseButton: Story = {}
HeaderCollapseButton.args = {
  complexHeader: true,
  headerTitle: 'Lorem ipsum dolor sit amet, consectetur adipising elit',
  headerListValues: ['Lorem ipsum', 'Dolor sit amet', 'Consectetur', 'Adipsing elit'],
  text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut magna facilisis, mollis sapien vel, consectetur sem. Curabitur dignissim sem nisl, at convallis tellus mollis at. Cras accumsan dui maximus mi suscipit faucibus.',
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim lectus metus, ut sollicitudin ipsum aliquam pellentesque. Donec nec erat tempor, laoreet lacus et, ultricies velit. Suspendisse eget eleifend diam. Integer quis vehicula nibh. Quisque viverra in dui sed blandit. Sed gravida porta leo, in rhoncus metus venenatis ut. Morbi tincidunt tincidunt faucibus.'
  ],
  idCollapse: 'headerCollapseButton',
  onClickFn: () => console.log("Collapse Header Button")
}

export const PartialCollapseButton: Story = {}
PartialCollapseButton.args = {
  partialCollapse:true,
  text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut magna facilisis, mollis sapien vel, consectetur sem. Curabitur dignissim sem nisl, at convallis tellus mollis at. Cras accumsan dui maximus mi suscipit faucibus.',
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dignissim lectus metus, ut sollicitudin ipsum aliquam pellentesque. Donec nec erat tempor, laoreet lacus et, ultricies velit. Suspendisse eget eleifend diam. Integer quis vehicula nibh. Quisque viverra in dui sed blandit. Sed gravida porta leo, in rhoncus metus venenatis ut. Morbi tincidunt tincidunt faucibus.',
      'Curabitur elementum sapien nec velit egestas consequat. Ut fermentum dolor eu purus efficitur rutrum ac at purus. Curabitur eu risus vel leo vehicula auctor. Aenean in velit nisi. Curabitur ultricies lacinia odio, sed egestas ex facilisis nec. Pellentesque et sagittis justo, id consequat odio. Nullam molestie sit amet eros quis consequat.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut magna facilisis, mollis sapien vel, consectetur sem. Curabitur dignissim sem nisl, at convallis tellus mollis at. Cras accumsan dui maximus mi suscipit faucibus.',
  ],
  textTitles: ['Mission','Travail en Cours'],
  idCollapse: 'biography-text',
  label: 'Show full biography',
  onClickFn: () => console.log("Partial Collapse Button")
}
