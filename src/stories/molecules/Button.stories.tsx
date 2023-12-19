import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import React from 'react';
import { Button } from './Button';
import featherIcons from 'epfl-elements/dist/icons/feather-sprite.svg';

const meta: Meta<typeof Button> = {
  title: 'Molecules/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick : {action: 'clicked'},
    label: { type: 'string' },
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Click me'
  },
  render(args) {
    const label = args.label;
    delete args.label;   // Otherwise, Storybook will show the nonexisting
    // prop in the “Show code” area.
    return <Button {...args}>
      <svg key="icon" className="icon" aria-hidden="true">
        <use xlinkHref={`${featherIcons}#save`} />
      </svg>
      <span key="label" style={{ marginLeft: '5px' }}>{label}</span>
    </Button>;
  }
};

export const Secondary: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    primary: false
  }
};

export const Large: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    size: 'large',
  },
};

export const Small: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    size: 'small',
  },
};

export const Icon: Story = {
  args: {
    size: 'icon',
    iconName: '#save'
  },
};
