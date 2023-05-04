import type { StoryObj } from "@storybook/react";
import { Tag } from "../components/Tag"

const meta = {
  title: "Atoms/Tag",
  component: Tag,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
Default.args = {
  label: 'Wikipedia',
}

export const TagPlain : Story = {}
TagPlain.args = {
  label: 'Wikipedia',
  className: 'tag-plain'
}

export const TagLight : Story = {}
TagLight.args = {
  label: 'Wikipedia',
  className: 'tag-light'
}

export const PrimaryWithLink : Story = {}
PrimaryWithLink.args = {
  href: 'http://wikipedia.com',
  label: 'Wikipedia'
}

export const SecondaryWithLink : Story = {}
SecondaryWithLink.args = {
  href: 'http://wikipedia.com',
  label: 'Wikipedia',
  className: 'tag-secondary'
}

export const SmallPrimaryWithLink : Story = {}
SmallPrimaryWithLink.args = {
  href: 'http://wikipedia.com',
  label: 'Wikipedia'
}

export const SmallSecondaryWithLink : Story = {}
SmallSecondaryWithLink.args = {
  href: 'http://wikipedia.com',
  label: 'Wikipedia',
  className: 'tag-secondary'
}

export const Removable : Story = {}
Removable.args = {
  label: 'Wikipedia',
  removable: true
}

export const RemovableWithCallback : Story = {}
RemovableWithCallback.args = {
  label: 'Wikipedia',
  removable: true,
  removeCallback: (e: any) => window.alert(`${e} tag removed`)
}
