import type { StoryObj } from "@storybook/react";
import { Button } from "../components/Forms/Button"

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
Default.args = {
  label: 'Test Button',
  onClickFn: () => window.alert('Test Click')
}
