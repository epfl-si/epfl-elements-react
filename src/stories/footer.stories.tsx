import type { StoryObj } from "@storybook/react";
import { Footer } from "../components/Footer/Footer"

const meta = {
  title: "Organisms/Footer",
  component: Footer,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
