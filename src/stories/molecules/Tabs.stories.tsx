import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import React from "react";

const meta = {
  title: 'Molecules/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { title: "1", content: <div className="">
          <strong>VPO-SI</strong>
          <br />
          <small className="text-muted">Cosec: 33333333333333333333333 Caval, Ivo Steiner</small>
          <br />
          <small className="text-muted">Prof: fghfghfghfh Ciccio</small>
        </div> },
      { title: "2", content: <div className="">
          <strong>VPO-SI</strong>
          <br />
          <small className="text-muted">Cosec: 1111111111111 Caval, Ivo Steiner</small>
          <br />
          <small className="text-muted">Prof: trzrtzrtzrtz Ciccio</small>
        </div> },
      { title: "3", content: <div className="">
          <strong>VPO-SI</strong>
          <br />
          <small className="text-muted">Cosec: 2222222222222222222222 Caval, Ivo Steiner</small>
          <br />
          <small className="text-muted">Prof: xcvxcvxcvxcv Ciccio</small>
        </div> },
    ]
  },
};