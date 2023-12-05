import type { Meta, StoryObj } from '@storybook/react';

import { Teaser } from './Teaser';
import React from "react";

const meta = {
    title: 'Molecules/Teaser',
    component: Teaser,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Teaser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Test default',
        rightIcon: '#arrow-right',
        leftIcon: 'https://randomuser.me/api/portraits/men/3.jpg',
        actifText: true,
        teaserText: '5'
    },
};

export const ActiveWithoutRightIcon: Story = {
    args: {
        title: 'Test default',
        leftIcon: 'https://randomuser.me/api/portraits/men/3.jpg',
        actifText: true,
        teaserText: '5'
    },
};

export const Disabled: Story = {
    args: {
        title: 'Test default',
        rightIcon: '#plus-square',
        leftIcon: 'https://randomuser.me/api/portraits/men/3.jpg',
        actifText: false,
    },
};

export const WithoutRightButton: Story = {
    args: {
        title: 'Test default',
        leftIcon: 'https://randomuser.me/api/portraits/men/3.jpg',
        actifText: false,
        teaserText: '+'
    },
};

export const HrefTeaser: Story = {
    args: {
        title: 'Test default',
        leftIcon: 'https://randomuser.me/api/portraits/men/3.jpg',
        actifText: true,
        teaserText: '5',
        hrefTeaser: "https://www.epfl.ch/en/"
    },
};

export const HrefRightButton: Story = {
    args: {
        title: 'Test default',
        rightIcon: '#plus-square',
        leftIcon: 'https://randomuser.me/api/portraits/men/3.jpg',
        actifText: false,
        hrefRightIcon: "https://www.epfl.ch/en/"
    },
};

export const WithoutText: Story = {
    args: {
        leftIcon: 'https://randomuser.me/api/portraits/men/3.jpg',
        teaserText: '5',
        hrefTeaser: "https://www.epfl.ch/en/"
    },
};