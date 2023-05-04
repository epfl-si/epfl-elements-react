import type { StoryObj } from "@storybook/react";
import { Card } from "../components/Card"

const meta = {
  title: "Molecules/Card",
  component: Card,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

const MultipleCardsTemplate: Story = {
  render: ({ items, wrapperClass }: any) =>  
    <div className={wrapperClass}>
    {items.map((args: any) => <Card {...args} />)}
  </div>
}


const baseSampleCard = {
  picture: {
    src: 'https://epfl-si.github.io/elements/images/styleguide/event_teaser.png',
    title: 'Event placeholder',
    alt: 'event teaser image'
  },
  children: <p>This is a test card</p>
}

export const Default: Story = {}
Default.args = {...baseSampleCard}

export const WithLink: Story = {}
WithLink.args = {
  ...baseSampleCard,
  link: 'https://epfl-si.github.io/elements/#/molecules/card'
}

export const InCardDeck = {
  ...MultipleCardsTemplate,
  args: {items: [baseSampleCard, baseSampleCard, baseSampleCard, baseSampleCard], wrapperClass: 'card-deck'}
};

export const InMiniCardDeck = {
  ...MultipleCardsTemplate,
  args: {items: [baseSampleCard, baseSampleCard, baseSampleCard, baseSampleCard], wrapperClass: 'card-deck mini-cards'}
};

