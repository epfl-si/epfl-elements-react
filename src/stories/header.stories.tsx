import type { StoryObj } from "@storybook/react";
import { Header } from "../components/Header";

const meta = {
  title: "Organisms/Header",
  component: Header,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
Default.args = {
  topMenuItems: [
    { link: 'https://www.epfl.ch/about/', anchor: 'About' },
    { link: 'https://www.epfl.ch/education', anchor: 'Education' },
    { link: 'https://www.epfl.ch/research', anchor: 'Research' },
    { link: 'https://www.epfl.ch/innovation/', anchor: 'Innovation' },
    { link: 'https://www.epfl.ch/schools/', anchor: 'Schools', active: true },
    { link: 'https://www.epfl.ch/campus/', anchor: 'Campus' }
  ],
  drawerContents: {
    link: 'https://www.epfl.ch',
    anchor: 'Go to main site'
  },
  user: {
    first_name: 'Juan',
    last_name: 'Convers',
    sciper: '00000',
    photo_url: 'https://avatars.githubusercontent.com/u/12231812'
  },
  logOutUrl: 'https://tequila.epfl.ch/logout'
}

export const CustomAvatarLogo: Story = {}
CustomAvatarLogo.args = {
  topMenuItems: [
    { link: 'https://www.epfl.ch/about/', anchor: 'About' },
    { link: 'https://www.epfl.ch/education', anchor: 'Education' },
    { link: 'https://www.epfl.ch/research', anchor: 'Research' },
    { link: 'https://www.epfl.ch/innovation/', anchor: 'Innovation' },
    { link: 'https://www.epfl.ch/schools/', anchor: 'Schools', active: true },
    { link: 'https://www.epfl.ch/campus/', anchor: 'Campus' }
  ],
  drawerContents: {
    link: 'https://www.epfl.ch',
    anchor: 'Go to main site'
  },
  user: {
    first_name: 'Juan',
    last_name: 'Convers',
    sciper: '00000',
    photo_url: 'https://avatars.githubusercontent.com/u/12231812'
  },
  logOutUrl: 'https://tequila.epfl.ch/logout',
  avatarLogoUrl: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
  avatarLogoAltText: 'white space placeholder'
}
