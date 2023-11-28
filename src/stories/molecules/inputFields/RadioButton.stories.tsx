import type { Meta, StoryObj } from '@storybook/react';

import { RadioButton } from './RadioButton';
import React from "react";

const meta = {
  title: 'Molecules/Inputs/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    isRequired: false
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
    label_s: 'test1;test2;test3',
  }
};

export const inLine: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    label_s: 'test1;test2;test3',
    inLine: true
  }
};