import type { StoryObj } from "@storybook/react";
import { Error } from "../components/Error"

const meta = {
  title: "Molecules/Error",
  component: Error,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const status404: Story = {
  args: {
    error: {
      status: 404,
      message: 'Oops the page can not be found'
    }
  }
}

export const status403: Story = {
  args: {
    error: {
      status: 403,
      message: 'Forbidden. Please contact the admin'
    }
  }
}

export const status503: Story = {
  args: {
    error: {
      status: 503,
      message: 'Server error. Please try again or contact the admin.'
    }
  }
}

