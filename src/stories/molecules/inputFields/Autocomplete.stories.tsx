import type { Meta, StoryObj } from '@storybook/react';

import { Autocomplete } from './Autocomplete';
import React from "react";

const meta = {
  title: 'Molecules/Inputs/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
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
    ],
    selected:[
      {
        value: '1',
        label: 'label 1'
      }
    ],
    multiple: false
  }
};