import type { Meta, StoryObj } from '@storybook/react';
import React from "react";
import {Tabs} from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: 'Molecules/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Storybook reads the .displayName of function components, if present,
// to synthesize the JSX for its “show code” feature:
const tabDisplays = Tabs as any; // eslint-disable-line @typescript-eslint/no-explicit-any
tabDisplays.Tab.displayName = "Tabs.Tab";
tabDisplays.Tab.Title.displayName = "Tabs.Tab.Title";
tabDisplays.Tab.Content.displayName = "Tabs.Tab.Content";

export const Default: Story = {
  args: {
    children: [
      <Tabs.Tab id={"1"}>
        <Tabs.Tab.Title>
          test title 1
          <br />
          <small className="text-muted">Mauro Rossi 1</small>
        </Tabs.Tab.Title>
        <Tabs.Tab.Content>
          <strong>VPO-SI 1</strong>
          <br />
          <small className="text-muted">Caval, Ivo Steiner 1</small>
          <br />
          <small className="text-muted">Mauro Rossi 1</small>
        </Tabs.Tab.Content>
      </Tabs.Tab>,
      <Tabs.Tab id={"2"}>
        <Tabs.Tab.Title>
          test title 2
        </Tabs.Tab.Title>
        <Tabs.Tab.Content>
          <strong>VPO-SI 2</strong>
          <br />
          <small className="text-muted">Caval, Ivo Steiner 2</small>
          <br />
          <small className="text-muted">Mauro Rossi 2</small>
        </Tabs.Tab.Content>
      </Tabs.Tab>
    ]
  },
};
