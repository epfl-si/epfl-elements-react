import type { Meta, StoryObj } from '@storybook/react';

import { DebounceInput } from './DebounceInput';
import React from "react";

const meta: Meta<typeof DebounceInput> = {
  title: 'Molecules/Inputs/DebounceInput',
  component: DebounceInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Multiple: Story = {
  args: {
    placeholder: 'type somethings',
    onChange: onChangeValue
  }
};

function onChangeValue(value: string) {
  console.log(value);
}
