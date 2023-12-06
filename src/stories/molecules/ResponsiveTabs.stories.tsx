import type { Meta, StoryObj } from '@storybook/react';
import { ResponsiveTabs } from './ResponsiveTabs';
import React from "react";

const meta = {
  title: 'Molecules/ResponsiveTabs',
  component: ResponsiveTabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ResponsiveTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { title: "1", content: <div>
          <strong>VPO-SI 1</strong>
          <br />
          <small className="text-muted">Caval, Ivo Steiner 1</small>
          <br />
          <small className="text-muted">Mauro Rossi 1</small>
        </div> },
      { title: "2", content: <div>
          <strong>VPO-SI 2</strong>
          <br />
          <small className="text-muted">Caval, Ivo Steiner 2</small>
          <br />
          <small className="text-muted">Mauro Rossi 2</small>
        </div> },
      { title: "3", content: <div>
          <strong>VPO-SI 3</strong>
          <br />
          <small className="text-muted">Caval, Ivo Steiner 3</small>
          <br />
          <small className="text-muted">Mauro Rossi 3</small>
        </div> },
    ]
  },
};