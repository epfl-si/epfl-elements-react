import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import React from "react";

const meta = {
    title: 'Molecules/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Test default',
        border: 'none',
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        icon: "#arrow-right",
        fontWeight: 'normal'
    },
};