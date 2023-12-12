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
  args: {
    name: 'test_Name',
    isRequired: true,
    items: [{
      label: 'label 1',
      value: 'value 1',
      id: 'test_primary'
    }],
  }
};

export const Checked: Story = {
  args: {
    name: 'test_Name',
    items: [{
      label: 'label 1',
      value: 'value 1',
      id: 'test_primary',
      isChecked: true
    }],
  }
};

export const Readonly: Story = {
  args: {
    name: 'test_Name',
    isReadonly: true,
    items: [{
      label: 'label 1',
      value: 'value 1',
      id: 'test_primary'
    }],
  }
};

export const NoLabel: Story = {
  args: {
    name: 'test_Name',
    items: [{
      value: 'value 1',
      id: 'test_primary'
    }],
  }
};

export const inLine: Story = {
  args: {
    name: 'test_Name',
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