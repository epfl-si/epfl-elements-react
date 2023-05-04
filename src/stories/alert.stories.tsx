import type { StoryObj } from "@storybook/react";
import { Alert } from "../components/Alert";

const meta = {
  title: "Atoms/Alert",
  component: Alert,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    title: 'Success',
    message: 'used to confirm a completed task or the successful submission of a form',
    alertType: 'success',
    onCloseClick: () => {
        console.log('The success alert was dismissed')
    }
  },
};

export const Info: Story = {
    args: {
      title: 'Information',
      message: 'used to display an interesting yet non-critical information',
      alertType: 'info',
      onCloseClick: () => {
          console.log('The info alert was dismissed')
      }
    },
  };

export const Warning: Story = {
    args: {
      title: 'Warning',
      message: 'used for unexpected events, that people must pay attention',
      alertType: 'warning',
      onCloseClick: () => {
          console.log('The warning alert was dismissed')
      }
    },
  };

  export const Danger: Story = {
    args: {
      title: 'Danger',
      message: 'used for critical information: an error or the unavailability of a service',
      alertType: 'danger',
      onCloseClick: () => {
          console.log('The critical alert was dismissed')
      }
    },
  };
