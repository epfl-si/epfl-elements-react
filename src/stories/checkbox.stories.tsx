import type { StoryObj } from "@storybook/react";
import { Checkbox } from "../components/Forms/Checkbox"

const meta = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

let isSelectedFlag = true

export const Default: Story = {}
Default.args = {
  label: 'Test Checkbox',
  isSelected: isSelectedFlag,
  onCheckboxChange: () => {
  console.log('State should Change.')
    isSelectedFlag = !isSelectedFlag
  }
}
