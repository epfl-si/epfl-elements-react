import type { StoryObj } from "@storybook/react";
import { Switch } from "../components/Forms/Switch"

const meta = {
  title: "Atoms/Switch",
  component: Switch,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
Default.args = {
  id: 'testId1',
  label: '',
  onChangeCallback: () => {
    console.log('State should Change.')
  }
}

export const WithLabel: Story = {}
WithLabel.args = {
  id: 'testId2',
  label: 'Test Checkbox',
  onChangeCallback: () => {
    console.log('State should Change.')
  }
}

export const isChecked: Story = {}
isChecked.args = {
  id: 'testId3',
  label: 'Test Checkbox',
  isChecked: true,
  onChangeCallback: () => {
    console.log('State should Change.')
  }
}

export const WithCallback: Story = {}
WithCallback.args = {
  id: 'testId4',
  label: 'Test Checkbox',
  onChangeCallback: (value) => {
  console.log(`Value returned: ${value}`)
  }
}

export const WithLeftMargin: Story = {}
WithLeftMargin.args = {
  id: 'testId4',
  label: 'Test Checkbox',
  marginLeft: '10em'
}