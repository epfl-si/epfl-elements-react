import type { Meta, StoryObj } from '@storybook/react';
import { ResponsiveTabs, ResponsiveTabsProps } from './ResponsiveTabs';
import React from "react";

const meta: Meta<React.FC<ResponsiveTabsProps>> = {
  title: 'Molecules/ResponsiveTabs',
  component: ResponsiveTabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Storybook reads the .displayName of function components, if present,
// to synthesize the JSX for its “show code” feature:
const tabDisplays = ResponsiveTabs as any; // eslint-disable-line @typescript-eslint/no-explicit-any
tabDisplays.Tab.displayName = "ResponsiveTabs.Tab";
tabDisplays.Tab.Title.displayName = "ResponsiveTabs.Tab.Title";
tabDisplays.Tab.Content.displayName = "ResponsiveTabs.Tab.Content";


export const Default : Story = {
  args: {
    children: [
      <ResponsiveTabs.Tab id={"1"}>
        <ResponsiveTabs.Tab.Title>
          test title 1
          <br />
          <small className="text-muted">Mauro Rossi 1</small>
          <br />
          <small className="text-muted">Mauro Rossi 2</small>
          <br />
          <small className="text-muted">Mauro Rossi 3</small>
          <br />
          <small className="text-muted">Mauro Rossi 4</small>
        </ResponsiveTabs.Tab.Title>
        <ResponsiveTabs.Tab.Content>
          <strong>VPO-SI 1</strong>
          <br />
          <small className="text-muted">Caval, Ivo Steiner 1</small>
          <br />
          <small className="text-muted">Mauro Rossi 1</small>
        </ResponsiveTabs.Tab.Content>
      </ResponsiveTabs.Tab>,
      <ResponsiveTabs.Tab id={"2"}>
        <ResponsiveTabs.Tab.Title>
          test title 2
        </ResponsiveTabs.Tab.Title>
        <ResponsiveTabs.Tab.Content>
          <strong>VPO-SI 2</strong>
          <br />
          <small className="text-muted">Caval, Ivo Steiner 2</small>
          <br />
          <small className="text-muted">Mauro Rossi 2</small>
        </ResponsiveTabs.Tab.Content>
      </ResponsiveTabs.Tab>
    ]
  }
};
