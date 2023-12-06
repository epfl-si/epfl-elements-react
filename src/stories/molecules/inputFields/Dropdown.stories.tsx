import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './Dropdown';
import React from "react";

const meta = {
  title: 'Molecules/Inputs/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Click me',
    items: [
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