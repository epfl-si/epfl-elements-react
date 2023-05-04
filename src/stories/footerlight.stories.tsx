import type { StoryObj } from "@storybook/react";
import { FooterLight } from "../components/Footer/FooterLight"

const meta = {
  title: "Organisms/FooterLight",
  component: FooterLight,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
