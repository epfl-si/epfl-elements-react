import type { StoryObj } from "@storybook/react";
import { CheckboxGroup } from "../components/Forms/CheckboxGroup"

const meta = {
  title: "Molecules/CheckboxGroup",
  component: CheckboxGroup,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
Default.args = {
  title: 'Test Checkbox Group',
  options: ['Checkbox 1', 'Checkbox 2', 'Checkbox 3'],
  onChangeFn: (e: string) => { console.log(e) }
}

export const OptionsUnchecked: Story = {}
OptionsUnchecked.args = {
  title: 'Test Checkbox Group',
  options: ['Checkbox 1', 'Checkbox 2', 'Checkbox 3'],
  unchecked: ['Checkbox 3'],
  onChangeFn: (e: string) => { console.log(e) }
}

export const SmallWrapperClass: Story = {}
SmallWrapperClass.args = {
  title: 'Test Checkbox Group',
  options: ['Checkbox 1', 'Checkbox 2', 'Checkbox 3'],
  wrapperClass: 'checkboxgroup-wrapper-small',
  onChangeFn: (e: string) => { console.log(e) }
}

export const NoPaddingWrapperClass: Story = {}
NoPaddingWrapperClass.args = {
  title: 'Test Checkbox Group',
  options: ['Checkbox 1', 'Checkbox 2', 'Checkbox 3'],
  wrapperClass: 'checkboxgroup-wrapper-no-padding',
  onChangeFn: (e: string) => { console.log(e) }
}

export const LongVerticalGroup: Story = {}
LongVerticalGroup.args = {
  title: 'Test Checkbox Group',
  options: Array.from(Array(40).keys()).map((x, i) => `Checkbox ${i}`),
  containerClass: 'checkbox-container-no-max-height',
  onChangeFn: (e: string) => { console.log(e) }
}

export const LongHorizontalGroup: Story = {}
LongHorizontalGroup.args = {
  title: 'Test Checkbox Group',
  options: Array.from(Array(10).keys()).map((x, i) => `Checkbox with a really long label here ${i}`),
  containerClass: 'checkbox-container-no-max-height',
  onChangeFn: (e: string) => { console.log(e) }
}


