import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';
import React from "react";

const meta: Meta<typeof Text> = {
  title: 'Molecules/Inputs/Text',
  component: Text,
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
    type: 'text'
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

export const Password: Story = {
  ...Default,
  args: {
    ...Default.args,
    type: 'password'
  }
};

export const Email: Story = {
  ...Default,
  args: {
    ...Default.args,
    type: 'email'
  }
};

export const Telephone: Story = {
  ...Default,
  args: {
    ...Default.args,
    type: 'tel'
  }
};

export const Url: Story = {
  ...Default,
  args: {
    ...Default.args,
    type: 'url'
  }
};
