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
    options: {
      storySort: {
          method: 'alphabetical',
          order: ['Documentation', 'Atoms', 'Molecules', 'Organisms', 'Content-Types', 'Pages'],
          locales: 'en-US',
      },
    },
  },
};

export default preview;
