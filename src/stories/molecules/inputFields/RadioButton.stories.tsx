import type { Meta, StoryObj } from '@storybook/react';

import { RadioButton } from './RadioButton';
import React from "react";

const meta: Meta<typeof RadioButton> = {
  title: 'Molecules/Inputs/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {onChange: {action: 'changed'}}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    isRequired: false,
    labelAndvalue: 'test1:test1v'
  }
};

export const Required: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    isRequired: true,
    labelAndvalue: 'test1:test1v'
  }
};

export const Checked: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    isChecked: true,
    labelAndvalue: 'test1:test1v'
  }
};

export const Readonly: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    isReadonly: true,
    labelAndvalue: 'test1:test1v'
  }
};

export const NoLabel: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    labelAndvalue: ':test1v'
  }
};

export const NoValue: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    labelAndvalue: 'test1'
  }
};

export const inLine: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    labelAndvalue: 'test1:test1v;test2:test2v;test3:test3v',
    inLine: true
  }
};