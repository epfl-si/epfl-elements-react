import type { StoryObj } from "@storybook/react";
import { Dropdown } from "../components/Forms/Dropdown"

const meta = {
  title: "Atoms/Dropdown",
  component: Dropdown,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
Default.args = {
  label: '>',
  options: [
    { option: 'Checkbox 1', active: true },
    { option: 'Checkbox 2' },
    { option: 'Checkbox 3' }
  ],
  onChangeFn: (value: String) => { console.log(value) },
}

export const NoActiveOption: Story = {}
NoActiveOption.args = {
  label: '>',
  options: [
    { option: 'Checkbox 1' },
    { option: 'Checkbox 2' },
    { option: 'Checkbox 3' }
  ],
  onChangeFn: (value: String) => { console.log(value) },
}

export const CustomPlacerholder: Story = {}
CustomPlacerholder.args = {
  label: '>',
  options: [
    { option: 'Checkbox 1' },
    { option: 'Checkbox 2' },
    { option: 'Checkbox 3' }
  ],
  placeholder: 'Select a checkbox label', 
  onChangeFn: (value: String) => { console.log(value) },
}