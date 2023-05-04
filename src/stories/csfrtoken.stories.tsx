import type { StoryObj } from "@storybook/react";
// @ts-ignore
import { CsfrToken } from "../components/Forms/Csfrtoken"

const meta = {
  title: "Atoms/CsfrToken",
  component: CsfrToken,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {}
