import type { Meta, StoryObj } from '@storybook/react';

import { Autocomplete } from './Autocomplete';
import React from "react";

const meta: Meta<typeof Autocomplete> = {
  title: 'Molecules/Inputs/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Multiple: Story = {
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
    multiple: true
  }
};



export const single: Story = {
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
    itemValue: {
      value: '1',
      label: 'label 1'
    },
    multiple: false
  }
};