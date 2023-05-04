import type { StoryObj } from "@storybook/react";
import { Breadcrumbs } from "../components/Breadcrumbs"

const meta = {
  title: "Molecules/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
Default.args = {
  items: [
    { link: 'https://www.epfl.ch/schools/', anchor: 'Schools' },
    { link: 'https://sti.epfl.ch/', anchor: 'School of Engineering' },
    { link: '', active: true, anchor: 'Test link' }]
}
