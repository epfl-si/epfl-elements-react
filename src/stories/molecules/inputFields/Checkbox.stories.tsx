import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';
import React from "react";

const meta = {
  title: 'Molecules/Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary'
  }
};

export const Required: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    isRequired: true
  }
};

export const Checked: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    isChecked: true
  }
};

export const Readonly: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    isReadonly: true
  }
};

export const Label: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    label: 'Test Help'
  }
};