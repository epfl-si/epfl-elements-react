import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './Dropdown';
import React from "react";

const meta: Meta<typeof Dropdown> = {
  title: 'Molecules/Inputs/Dropdown',
  component: Dropdown,
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
    label: 'Click me',
    id: 'dropdown',
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

export const NoLabel: Story = {
  args: {
    id: 'dropdown',
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

export const Multiple: Story = {
  args: {
    label: 'Click me',
    id: 'dropdown',
    multiple: true,
    visibleItems: 4,
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

export const ReadOnly: Story = {
  args: {
    isReadonly: true,
    label: 'Click me',
    id: 'dropdown',
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