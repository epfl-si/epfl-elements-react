import type { Preview } from "@storybook/react";
import 'epfl-elements/dist/css/elements.css';
import 'epfl-elements/dist/css/vendors.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
