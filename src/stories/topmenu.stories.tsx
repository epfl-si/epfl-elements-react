import type { StoryObj } from "@storybook/react";
import { Topmenu } from "../components/navigations/topmenu";

const meta = {
  title: "Atoms/Topmenu",
  component: Topmenu,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;


const HeaderTemplate: Story = {
  render: ({ menuItems }: any) =>  
  <header role='banner' className='header'>
  <Topmenu menuItems={menuItems} />
  </header>
}

export const InCardDeck = {
  ...HeaderTemplate,
  args: { menuItems: [
        { link: 'https://www.epfl.ch/about/', anchor: 'About' },
        { link: 'https://www.epfl.ch/education', anchor: 'Education' },
        { link: 'https://www.epfl.ch/research', anchor: 'Research' },
        { link: 'https://www.epfl.ch/innovation/', anchor: 'Innovation' },
        { link: 'https://www.epfl.ch/schools/', anchor: 'Schools', active: true },
        { link: 'https://www.epfl.ch/campus/', anchor: 'Campus' }
      ]}
  }
  
  export const emptyArray = {
    ...HeaderTemplate,
    args: {}
  }


// Default.args = {
//   menuItems: [
//     { link: 'https://www.epfl.ch/about/', anchor: 'About' },
//     { link: 'https://www.epfl.ch/education', anchor: 'Education' },
//     { link: 'https://www.epfl.ch/research', anchor: 'Research' },
//     { link: 'https://www.epfl.ch/innovation/', anchor: 'Innovation' },
//     { link: 'https://www.epfl.ch/schools/', anchor: 'Schools', active: true },
//     { link: 'https://www.epfl.ch/campus/', anchor: 'Campus' }
//   ]
// }

// export const DefaultWithFalseActive: Story = {}
// DefaultWithFalseActive.args = {
//   menuItems: [
//     { link: 'https://www.epfl.ch/about/', anchor: 'About', active: false },
//     { link: 'https://www.epfl.ch/education', anchor: 'Education', active: false  },
//     { link: 'https://www.epfl.ch/research', anchor: 'Research', active: false  },
//     { link: 'https://www.epfl.ch/innovation/', anchor: 'Innovation', active: false  },
//     { link: 'https://www.epfl.ch/schools/', anchor: 'Schools', active: true },
//     { link: 'https://www.epfl.ch/campus/', anchor: 'Campus', active: false  }
//   ]
// }
