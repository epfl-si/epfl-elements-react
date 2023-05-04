import type { StoryObj } from "@storybook/react";
import { Fullwidthteaser } from "../components/Fullwidthteaser";

const meta = {
  title: "Organisms/Fullwidthteaser",
  component: Fullwidthteaser,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
Default.args = {
  Fullwidthtype: 'fullwidth-teaser',
  srcImg: 'https://epfl-si.github.io/elements/images/styleguide/basic_page_teaser.jpg',
  titleMsg: 'Contact information',
  btnMsg: 'En savoir plus',
  footerMsg:'En savoir plus sur Tech Transfer',
  titleContent: 'Une équipe de chercheurs de l’EPFL et européenne a découvert une erreur dans la façon dont ont été estimées jusqu’ici les températures des océans, faisant potentiellement du réchauffement climatique actuel un évènement sans précédent ces cent derniers millions d’années.'
}

export const Horizontal: Story = {}
Horizontal.args = {
  Fullwidthtype: 'fullwidth-teaser fullwidth-teaser-horizontal',
  srcImg: 'https://epfl-si.github.io/elements/images/styleguide/basic_page_teaser.jpg',
  titleMsg: 'Contact information',
  btnMsg: 'En savoir plus',
  footerMsg:'En savoir plus sur Tech Transfer',
  titleContent: 'Une équipe de chercheurs de l’EPFL et européenne a découvert une erreur dans la façon dont ont été estimées jusqu’ici les températures des océans, faisant potentiellement du réchauffement climatique actuel un évènement sans précédent ces cent derniers millions d’années.'
}

export const LeftAlign: Story = {}
LeftAlign.args = {
  Fullwidthtype: 'fullwidth-teaser fullwidth-teaser-left',
  srcImg: 'https://epfl-si.github.io/elements/images/styleguide/basic_page_teaser.jpg',
  titleMsg: 'Contact information',
  btnMsg: 'En savoir plus',
  footerMsg:'En savoir plus sur Tech Transfer',
  titleContent: 'Une équipe de chercheurs de l’EPFL et européenne a découvert une erreur dans la façon dont ont été estimées jusqu’ici les températures des océans, faisant potentiellement du réchauffement climatique actuel un évènement sans précédent ces cent derniers millions d’années.'
}
