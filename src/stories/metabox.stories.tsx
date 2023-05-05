import type { StoryObj } from "@storybook/react";
import { Metabox } from "../components/Metabox"

const meta = {
  title: "Molecules/Metabox",
  component: Metabox,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
Default.args = {
  eventTitle: 'Event Information',
  metaboxDetails: [
      {
          key: 'Date',
          value: '13.01.2018 - 12:00 → 13:30',
          link: ''
          
      },
      {
          key: 'Category',
          value: 'Technologie',
          link: ''
      },
      {
          key:'With',
          value:'Prof Mohamed Bentires-Alj',
          link: ''
      },
      {
          key: 'Place',
          value: 'SV 2811',
          link: 'https://plan.epfl.ch/?room=SV2811'
      },
      {
          key: 'Price',
          value: 'Free Access',
          link: ''
      },
      {
          key: 'Contact',
          value: 'John Doe',
          link: '#'
      }
  ],
  organizer:[
      {
          label: 'Organized by',
          link: '#',
          srcImage: 'https://randomuser.me/api/portraits/men/1.jpg',
          altImage: 'Julien Richard-Foy',
          personName: 'Julien Richard-Foy',
      },
  ],
  onClickFn: () => console.log("Action Button Metabox"),
  labelButton: 'Action'
}

export const MetaboxWithMissingData: Story = {}
MetaboxWithMissingData.args = {
  eventTitle: 'Event Information',
  metaboxDetails: [
      {
          key: 'Date',
          value: '13.01.2018 - 12:00 → 13:30',
          link: ''
      },
      {
          key: 'Category',
          value: 'Technologie',
          link: ''
      },
      {
          key: '',
          value: 'Prof Mohamed Bentires-Alj',
          link: ''
      },
      {
          key: 'Place',
          value: '',
          link: 'https://plan.epfl.ch/?room=SV2811'
      },
      {
          key: '',
          value: '',
          link: ''
      },
  ],
  organizer:[
      {
          label: 'Organized by',
          altImage: 'Julien Richard-Foy',
          srcImage: 'https://randomuser.me/api/portraits/men/1.jpg',
          personName: 'Julien Richard-Foy',
          link: ''
      },
  ],
  onClickFn: () => console.log("Action Button Metabox"),
  labelButton: 'Action'
}

export const MetaboxWithoutDetails: Story = {}
MetaboxWithoutDetails.args = {
  eventTitle: 'Event Information',
  organizer:[
      {
          label: 'Organized by',
          link: '#',
          srcImage: 'https://randomuser.me/api/portraits/men/1.jpg',
          altImage: 'Julien Richard-Foy',
          personName: 'Julien Richard-Foy',
      },
  ],
  onClickFn: () => console.log("Action Button Metabox"),
  labelButton: 'Action'
}