import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import React from "react";

const meta = {
    title: 'Molecules/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Test default',
        icon: '#trash-2',
        children: [
            <div>
                <strong>VPO-SI</strong>
                <br />
                <small className="text-muted">Cosec: Tonfio Caval, Ivo Steiner</small>
                <br />
                <small className="text-muted">Prof: Lorezo Ciccio</small>
            </div>
        ]
    },
};
