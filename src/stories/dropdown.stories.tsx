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
  onChangeFn: () => { console.log('test dropdown') },
}
