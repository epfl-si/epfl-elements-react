import type { Preview } from "@storybook/react";
import 'epfl-elements/dist/css/elements.css';
import 'epfl-elements/dist/css/vendors.css';
import './storybook.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    }
  },
};

export default preview;
