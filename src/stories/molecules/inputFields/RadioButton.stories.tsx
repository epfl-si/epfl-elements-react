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
    isRequired: false,
    items: [{
      label: 'label 1',
      value: 'value 1',
      id: 'test_primary'
    }],
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
  ...Default,
  args: {
    ...Default.args,
    items: [{
      label: 'label 1',
      value: 'value 1',
      id: 'test_primary',
      isChecked: true
    }],
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
  ...Default,
  args: {
    ...Default.args,
    items: [{
      value: 'value 1',
      id: 'test_primary'
    }],
  }
};

export const inLine: Story = {
  ...Default,
  args: {
    ...Default.args,
    inLine: true,
    items: [{
      label: 'label 1',
      value: 'value 1',
      id: 'test_primary 1'
    },{
      label: 'label 2',
      value: 'value 2',
      id: 'test_primary 2'
    },{
      label: 'label 3',
      value: 'value 3',
      id: 'test_primary 3'
    }],
  }
};
