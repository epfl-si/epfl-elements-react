import type { Meta, StoryObj } from '@storybook/react';

import { Teaser } from './Teaser';
import React from "react";

const meta: Meta<typeof Teaser> = {
    title: 'Molecules/Teaser',
    component: Teaser,
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
        rightIcon: '#arrow-right',
        leftIcon: 'https://randomuser.me/api/portraits/men/1.jpg',
        actifText: true,
        teaserText: '5'
    },
};

export const ActiveWithoutRightIcon: Story = {
    args: {
        title: 'Test default',
        leftIcon: 'https://randomuser.me/api/portraits/men/1.jpg',
        actifText: true,
        teaserText: '5'
    },
};

export const Disabled: Story = {
    args: {
        title: 'Test default',
        rightIcon: '#plus-square',
        leftIcon: 'https://randomuser.me/api/portraits/men/1.jpg',
        actifText: false,
    },
};

export const WithoutRightButton: Story = {
    args: {
        title: 'Test default',
        leftIcon: 'https://randomuser.me/api/portraits/men/1.jpg',
        actifText: false,
        teaserText: '+'
    },
};

export const WithoutText: Story = {
    args: {
        leftIcon: 'https://randomuser.me/api/portraits/men/1.jpg',
        teaserText: '5',
    },
};
