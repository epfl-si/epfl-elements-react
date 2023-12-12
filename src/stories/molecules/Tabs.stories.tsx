import type { Meta, StoryObj } from '@storybook/react';
import React from "react";
import {Tabs} from "./Tabs";
import featherIcons from "epfl-elements/dist/icons/feather-sprite.svg";

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

export const Default: Story = {
  args: {
    items: [
      { title: "1",
        tabContent: <div>
          <svg key="icon" className="icon" aria-hidden="true">
            <use xlinkHref={`${featherIcons}#save`} />
          </svg>
          <svg key="icon" className="icon" aria-hidden="true">
            <use xlinkHref={`${featherIcons}#save`} />
          </svg>
          <svg key="icon" className="icon" aria-hidden="true">
            <use xlinkHref={`${featherIcons}#save`} />
          </svg>
        </div>,
        content: <div>
          <strong>VPO-SI 1</strong>
          <br />
          <small className="text-muted">Caval, Ivo Steiner 1</small>
          <br />
          <small className="text-muted">Mauro Rossi 1</small>
        </div> },
      { title: "2",
        tabContent: <div></div>,
        content: <div>
          <strong>VPO-SI 2</strong>
          <br />
          <small className="text-muted">Caval, Ivo Steiner 2</small>
          <br />
          <small className="text-muted">Mauro Rossi 2</small>
        </div> },
      { title: "3",
        tabContent: <div></div>,
        content: <div>
          <strong>VPO-SI 3</strong>
          <br />
          <small className="text-muted">Caval, Ivo Steiner 3</small>
          <br />
          <small className="text-muted">Mauro Rossi 3</small>
        </div> },
    ]
  },
};
