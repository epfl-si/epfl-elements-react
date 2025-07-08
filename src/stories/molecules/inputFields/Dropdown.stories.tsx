import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './Dropdown';
import React from "react";

const meta: Meta<typeof Dropdown> = {
  title: 'Molecules/Inputs/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Click me',
    id: 'dropdown',
    suggestions: [
      {
        value: '1',
        label: 'label 1'
      },
      {
        value: '2',
        label: 'label 2'
      },
      {
        value: '3',
        label: 'label 3'
      }
    ]
  }
};

export const NoLabel: Story = {
  args: {
    id: 'dropdown',
    suggestions: [
      {
        value: '1',
        label: 'label 1'
      },
      {
        value: '2',
        label: 'label 2'
      },
      {
        value: '3',
        label: 'label 3'
      }
    ]
  }
};

export const Multiple: Story = {
  ...Default,
  args: {
    ...Default.args,
    multiple: true,
    visibleItems: 4
  }
};

export const ReadOnly: Story = {
  ...Default,
  args: {
    ...Default.args,
    isReadonly: true,
  }
};
