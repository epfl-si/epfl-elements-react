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
    id: 'test_primary',
    labelAndvalue: 'test:test'
  }
};

export const Required: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    isRequired: true,
    labelAndvalue: 'test:test'
  }
};

export const Checked: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    isChecked: true,
    labelAndvalue: 'test:test'
  }
};

export const Readonly: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    isReadonly: true,
    labelAndvalue: 'test:test'
  }
};

export const NoLabel: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    labelAndvalue: ':test'
  }
};

export const NoValue: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    labelAndvalue: 'test'
  }
};