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
  argTypes: {onChange: {action: 'changed'}}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [{
      label: 'label 1',
      value: 'value 1',
      id: 'test_primary',
    }]
  }
};

export const Required: Story = {
  args: {
    isRequired: true,
    items: [{
      label: 'label 1',
      value: 'value 1',
      id: 'test_primary',
    }]
  }
};

export const Checked: Story = {
  args: {
    isChecked: true,
    items: [{
      label: 'label 1',
      value: 'value 1',
      id: 'test_primary',
    }]
  }
};

export const Readonly: Story = {
  args: {
    isReadonly: true,
    items: [{
      label: 'label 1',
      value: 'value 1',
      id: 'test_primary',
    }]
  }
};

export const NoLabel: Story = {
  args: {
    items: [{
      value: 'value 1',
      id: 'test_primary',
    }]
  }
};

export const Miltiple: Story = {
  args: {
    items: [{
      label: 'label 1',
      value: 'value 1',
      id: 'test_primary',
    },{
      label: 'label 2',
      value: 'value 2',
      id: 'test_primary',
    }]
  }
};