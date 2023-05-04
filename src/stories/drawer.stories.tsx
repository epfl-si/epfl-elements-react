import type { StoryObj } from "@storybook/react";
import { Drawer } from "../components/Drawer"

const meta = {
  title: "Atoms/Drawer",
  component: Drawer,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
Default.args = {
  contents: {
    link: 'https://www.epfl.ch',
    anchor: 'Go to main site'
  }
}
