import type { StoryObj } from "@storybook/react";
import { Range } from "../components/Forms/Range"

const meta = {
  title: "Atoms/Range",
  component: Range,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    minInput: 1,
    maxInput: 10,
    defaultValue: 3,
    setInput: 1,
    label: 'Range Slider : ',
    labelValue: 'Value : '
  }
}
