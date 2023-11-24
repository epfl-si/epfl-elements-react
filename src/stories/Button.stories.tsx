import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import featherIcons from "epfl-elements/dist/icons/feather-sprite.svg";
import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render() {
    return <Button>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref={`${featherIcons}#save`} />
      </svg>
      <span style={{ marginLeft: '5px' }}>Label</span>
    </Button>
  }
};

export const Secondary: Story = {
  args: {
    primary: false,
    children: [
      <svg key="icon" className="icon" aria-hidden="true">
        <use xlinkHref={`${featherIcons}#save`} />
      </svg>,
      <span key="label" style={{ marginLeft: '5px' }}>Secondary</span>,
    ]
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: [
      <svg key="icon" className="icon" aria-hidden="true">
        <use xlinkHref={`${featherIcons}#save`} />
      </svg>,
      <span key="label" style={{ marginLeft: '5px' }}>Large</span>,
    ]
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: [
      <svg key="icon" className="icon" aria-hidden="true">
        <use xlinkHref={`${featherIcons}#save`} />
      </svg>,
      <span key="label" style={{ marginLeft: '5px' }}>Small</span>,
    ]
  },
};



export const Icon: Story = {
  args: {
    size: 'icon',
    iconName: '#save'
  },
};
