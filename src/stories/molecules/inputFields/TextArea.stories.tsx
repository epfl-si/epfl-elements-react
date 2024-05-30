import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from './TextArea';
import React from "react";

const meta: Meta<typeof TextArea> = {
  title: 'Molecules/Inputs/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
  }
};

export const Required: Story = {
  ...Default,
  args: {
    ...Default.args,
    isRequired: true,
  }
};

export const Readonly: Story = {
  ...Default,
  args: {
    ...Default.args,
    isReadonly: true,
  }
};

export const WithLabel: Story = {
  ...Default,
  args: {
    ...Default.args,
    label: 'Test label',
  }
};

export const WithHelp: Story = {
  ...Default,
  args: {
    ...Default.args,
    help: 'Test label',
  }
};

export const WithPlaceholder: Story = {
  ...Default,
  args: {
    ...Default.args,
    placeholder: 'Test label',
  }
};
