import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import React from "react";

const meta: Meta<typeof Badge> = {
    title: 'Molecules/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Test default',
        bedge: '9',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        icon: "#arrow-right",
    },
};
