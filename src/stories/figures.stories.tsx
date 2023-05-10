import type { StoryObj } from "@storybook/react";
import { Figures } from "../components/Figures"

const meta = {
  title: "Atoms/Figures",
  component: Figures,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
Default.args = {
  figCaption: "Figure Caption",
  src: "https://via.placeholder.com/380x214.jpg",
  mediaSources: [
      {
          srcSet: 'https://via.placeholder.com/380x214.jpg 1x,https://via.placeholder.com/760x428.jpg 2x',
          media: '(min-width: 1140px)' 
      },
      {
          srcSet: 'https://via.placeholder.com/380x214.jpg 1x,https://via.placeholder.com/760x428.jpg 2x',
          media: '(min-width: 960px)'
      },
      {
          srcSet: 'https://via.placeholder.com/320x180.jpg 1x,https://via.placeholder.com/640x360.jpg 2x',
          media: '(min-width: 720px)'
      },
      {
          srcSet: 'https://via.placeholder.com/720x405.jpg 1x,https://via.placeholder.com/1440x810.jpg 2x',
          media: '(min-width: 541)'
      },
      {
          srcSet: 'https://via.placeholder.com/540x304.jpg 1x,https://via.placeholder.com/1080x608.jpg 2x',
          media: '(max-width: 540)'
      },
  ],
  alt: "Image"
}

export const MediaSourcesWithoutMediaAndSrcSet: Story = {}
MediaSourcesWithoutMediaAndSrcSet.args = {
  figCaption: "Figure Caption",
  src: "https://via.placeholder.com/380x214.jpg",
  mediaSources: [
      {
          srcSet: 'https://via.placeholder.com/380x214.jpg 1x,https://via.placeholder.com/760x428.jpg 2x',
          media: '(min-width: 1140px)' 
      },
      {
          srcSet: 'https://via.placeholder.com/380x214.jpg 1x,https://via.placeholder.com/760x428.jpg 2x',
          media: '(min-width: 960px)'
      },
      {
          srcSet: 'https://via.placeholder.com/320x180.jpg 1x,https://via.placeholder.com/640x360.jpg 2x',
          media: '(min-width: 720px)'
      },
      {
          srcSet: '',
          media: '(min-width: 541)'
      },
      {
          srcSet: 'https://via.placeholder.com/540x304.jpg 1x,https://via.placeholder.com/1080x608.jpg 2x',
          media: ''
      },
  ],
  alt: "Image"
}
