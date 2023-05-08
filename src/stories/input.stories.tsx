import type { StoryObj } from "@storybook/react";
import { Input } from "../components/Forms/Input"

const meta = {
  title: "Atoms/Input",
  component: Input,
  tags: ["docsPage"]
};

type Callback = () => void;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
Default.args = {
  placeholder: 'Test Placeholder',
  onChangeFn: (e: Callback) => { console.log(e) }
}

export const Number: Story = {}
Number.args = {
  type: 'number',
  onChangeFn: (e: Callback) => { console.log(e) }
}

export const DateType: Story = {}
DateType.args = {
  type: 'date',
  onChangeFn: (e: Callback) => { console.log(e) }
}

export const MonthType: Story = {}
MonthType.args = {
  type: 'month',
  onChangeFn: (e: Callback) => { console.log(e) }
}

