import type { StoryObj } from "@storybook/react";
import { Tagset } from "../components/Tagset"

import { TagsetProps } from "../components/Tagset";

const meta = {
  title: "Molecules/Tagset",
  component: Tagset,
  tags: ["docsPage"]
};

const testTags = [
  { label: 'Tag1', value: 'tag1' },
  { label: 'Tag2', value: 'tag2' },
  { label: 'Tag3', value: 'tag3' },
  { label: 'Tag4', value: 'tag4' },
  { label: 'Tag5', value: 'tag5' },
  { label: 'Tag6', value: 'tag6' },
  { label: 'Tag7', value: 'tag7' },
  { label: 'Tag8', value: 'tag8' }
]


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
Default.args = {
  tags: testTags,
  callbackFn: (tagset: TagsetProps) => console.log(tagset)
}

export const EmptySet : Story = {}
EmptySet.args = {
  tags: [],
  callbackFn: (tagset: TagsetProps) => console.log(tagset)
}

export const CustomAddLabel : Story = {}
CustomAddLabel.args = {
  tags: testTags.slice(0, 4),
  addLabel: 'Add an amazing new tag',
  callbackFn: (tagset: TagsetProps) => console.log(tagset)
}

export const CustomTagSpacing : Story = {}
CustomTagSpacing.args = {
  tags: testTags,
  tagSpacing: '30px',
  callbackFn: (tagset: TagsetProps) => console.log(tagset)
}

export const DisableEdit : Story = {}
DisableEdit.args = {
  tags: testTags,
  disableEdit: true,
  callbackFn: (tagset: TagsetProps) => console.log(tagset)
}

export const AddNewOnTop : Story = {}
AddNewOnTop.args = {
  tags: testTags,
  addNewPosition: 'top',
  callbackFn: (tagset: TagsetProps) => console.log(tagset)
}

export const ShowInColumns : Story = {}
ShowInColumns.args = {
  tags: testTags,
  showInColumns: true,
  callbackFn: (tagset: TagsetProps) => console.log(tagset)
}
