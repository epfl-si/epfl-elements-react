import type { Preview } from "@storybook/react";

import React from "react";
import { MemoryRouter } from "react-router-dom";

import '../src/styles/overrides.css';

export const decorators = [
  (Story: any) => (
    <MemoryRouter initialEntries={['/']}>
      <Story />
    </MemoryRouter>
  ),
];


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
