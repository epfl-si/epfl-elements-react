import type { StoryObj } from "@storybook/react";
import { Hero } from "../components/Hero";

const meta = {
  title: "Organisms/Hero",
  component: Hero,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
Default.args = {
  title: 'Hero Title',
  image: 'https://i.vimeocdn.com/video/1038164810.webp?mw=2500&mh=896&q=70',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
}
