import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';
import React from "react";

const meta: Meta<typeof Checkbox> = {
  title: 'Molecules/Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [{
      label: 'label 1',
      value: 'value 1',
      id: 'test_primary'
    }],
    name: 'test',
  }
};

export const Required: Story = {
  ...Default,
  args: {
    ...Default.args,
    isRequired: true,
  }
};

export const Checked: Story = {
  args: {
    items: [{
      label: 'label 1',
      value: 'value 1',
      id: 'test_primary',
      isChecked: true
    }],
    name: 'test',
  }
};

export const Readonly: Story = {
  ...Default,
  args: {
    ...Default.args,
    isReadonly: true,
  }
};

export const NoLabel: Story = {
  args: {
    items: [{
      value: 'value 1',
      id: 'test_primary',
    }],
    name: 'test',
  }
};

export const Miltiple: Story = {
  args: {
    items: [{
      label: 'label 1',
      value: 'value 1',
      id: 'test_primary',
      isChecked : true
    },{
      label: 'label 2',
      value: 'value 2',
      id: 'test_primary',
    }],
    name: 'test',
  }
};

export const inLine: Story = {
  ...Miltiple,
  args: {
    ...Miltiple.args,
    inLine: true,
  }
};
