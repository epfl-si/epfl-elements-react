import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from './TextArea';
import React from "react";

const meta: Meta<typeof TextArea> = {
  title: 'Molecules/Inputs/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
  }
};

export const Required: Story = {
  args: {
    isRequired: true,
    name: 'test_Name',
    id: 'test_primary',
  }
};

export const Readonly: Story = {
  args: {
    isReadonly: true,
    name: 'test_Name',
    id: 'test_primary',
  }
};

export const WithLabel: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    label: 'Test label',
  }
};

export const WithHelp: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    help: 'Test label',
  }
};

export const WithPlaceholder: Story = {
  args: {
    name: 'test_Name',
    id: 'test_primary',
    placeholder: 'Test label',
  }
};