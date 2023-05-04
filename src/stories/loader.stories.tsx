import type { StoryObj } from "@storybook/react";
import { Loader } from "../components/Loader"

const meta = {
  title: "Atoms/Loader",
  component: Loader,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}

export const CustomMessage: Story = {}
CustomMessage.args = {
  message: 'Loader passing a custom message'
}
