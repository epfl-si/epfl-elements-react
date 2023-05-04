import type { StoryObj } from "@storybook/react";
import { Asidemenu } from "../components/navigations/asidemenu";

const meta = {
  title: "Atoms/Asidemenu",
  component: Asidemenu,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // @ts-ignore
  args: {
    isHome: true,
    isLoading: false,
    menuItems: [{
      heading: 'Mock Main Section',
      menus: [
        { anchor: 'Hello', link: '/' },
        { anchor: 'HelloTabs', link: '/hellotabs' },
        { anchor: 'HelloVisualizations', link: '/hellovisualizations' }
      ]
    }],
    homeAnchor: 'Home'
  }
}

export const UsingLinks: Story = {
    // @ts-ignore
    args: {
      isHome: true,
      isLoading: false,
      menuItems: [{
        heading: 'Mock Main Section',
        menus: [
          { anchor: 'Hello', link: '/' },
          { anchor: 'HelloTabs', link: '/hellotabs' },
          { anchor: 'HelloVisualizations', link: '/hellovisualizations' }
        ]
      }],
      homeAnchor: 'Home'
    }
}

export const WithFeedbackLink: Story = {
      // @ts-ignore
  args: {
    isHome: true,
    isLoading: false,
    menuItems: [{
      heading: 'Mock Main Section',
      menus: [
        { anchor: 'Hello', link: '/' },
        { anchor: 'HelloTabs', link: '/hellotabs' },
        { anchor: 'HelloVisualizations', link: '/hellovisualizations' }
      ]
    }],
    homeAnchor: 'Home',
    feedBackEmail: 'mykompas_administrators@groupes.epfl.ch'
  }
}

