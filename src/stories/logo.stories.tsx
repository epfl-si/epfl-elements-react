import type { StoryObj } from "@storybook/react";
import { Logo } from "../components/Logo";

const meta = {
  title: "Atoms/Logo",
  component: Logo,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLogo: Story = {
  args: {}
};