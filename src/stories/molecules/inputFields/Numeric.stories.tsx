import type { Meta, StoryObj } from '@storybook/react';

import { Numeric } from './Numeric';
import React from "react";

const meta = {
  title: 'Molecules/Inputs/Numeric',
  component: Numeric,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Numeric>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary'
  }
};

export const Required: Story = {
  args: {
    isRequired: true,
    name: 'test_Name',
    id: 'test_primary'
  }
};

export const Readonly: Story = {
  args: {
    isReadonly: true,
    name: 'test_Name',
    id: 'test_primary'
  }
};

export const WithLabel: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    label: 'Test label'
  }
};

export const WithHelp: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    help: 'Test label'
  }
};

export const WithPlaceholder: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    placeholder: 'Test label'
  }
};