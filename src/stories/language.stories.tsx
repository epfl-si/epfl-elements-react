import type { StoryObj } from "@storybook/react";
import { Language } from "../components/navigations/language"

const meta = {
  title: "Atoms/Language",
  component: Language,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
Default.args = {
  enLink: 'test_en.html',
  frLink: 'test_fr.html',
  active: 'EN'
}
