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
  args: {
    isRequired: true,
    name: 'test_Name',
    id: 'test_primary',
    type: 'text'
  }
};

export const Readonly: Story = {
  args: {
    isReadonly: true,
    name: 'test_Name',
    id: 'test_primary',
    type: 'text'
  }
};

export const WithLabel: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    label: 'Test label',
    type: 'text'
  }
};

export const WithHelp: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    help: 'Test label',
    type: 'text'
  }
};

export const WithPlaceholder: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    placeholder: 'Test label',
    type: 'text'
  }
};

export const Password: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    type: 'password'
  }
};

export const Email: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    type: 'email'
  }
};

export const Telephone: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    type: 'tel'
  }
};

export const Url: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    type: 'url'
  }
};
