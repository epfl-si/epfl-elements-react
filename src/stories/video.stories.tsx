import type { StoryObj } from "@storybook/react";
import { Video } from "../components/Video"

const meta = {
  title: "Atoms/Video",
  component: Video,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
Default.args = {
  src: 'https://www.youtube.com/embed/eIefuuUnLvc?rel=0',
  frameborder: 10,
  allow:'autoplay; encrypted-media; fullscreen'
}

export const VideoWithoutAutoplay : Story = {}
VideoWithoutAutoplay.args = {
  src: 'https://www.youtube.com/embed/eIefuuUnLvc?rel=0',
  frameborder: 10,
  allow:'encrypted-media; fullscreen'
}

export const VideoWithoutBorder : Story = {}
VideoWithoutBorder.args = {
  src: 'https://www.youtube.com/embed/eIefuuUnLvc?rel=0',
  frameborder: 0,
  allow:'autoplay; encrypted-media; fullscreen'
}
