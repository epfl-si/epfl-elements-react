import type { StoryObj } from "@storybook/react";
import { ExternalLink } from "../components/Links"

const meta = {
  title: "Atoms/ExternalLink",
  component: ExternalLink,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
Default.args = {
  href: 'http://wikipedia.com',
  children:  <b>Wikipedia</b>
}
