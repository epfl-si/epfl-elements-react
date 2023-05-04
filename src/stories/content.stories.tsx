import type { StoryObj } from "@storybook/react";
import { Content } from "../components/Content"

const meta = {
  title: "Organisms/Content",
  component: Content,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
Default.args = {
  children: <h3>Test content children</h3>
}
