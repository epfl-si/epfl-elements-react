import type { StoryObj } from "@storybook/react";
import { MainMenu } from "../components/navigations/mainMenu";

const meta = {
  title: "Molecules/MainMenu",
  component: MainMenu,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
Default.args = {
  mainMenuStructure : [
      {
          heading:'À propos',
          link: 'https://www.epfl.ch/about/fr/',
          menus: [
              { 
                  heading:'Présidence',
                  link:'https://www.epfl.ch/about/presidency/fr/accueil/'
              }, 
              {
                  heading: 'Présentation',
                  link:'https://www.epfl.ch/about/overview/fr/presentation/',
                  menus: [
                      
                      {
                          heading:'Histoire de l\'EPFL',
                          link:'https://www.epfl.ch/about/overview/fr/histoire/'
                      },
                      {
                          heading:'Statistiques Institutionnelles',
                          link:'https://www.epfl.ch/about/overview/fr/statistiques-institutionnelles/',
                          currentItem : true,
                          menus: [
                              {
                                  heading:'Statistiques Rankings',
                                  link:'https://www.epfl.ch/about/overview/fr/statistiques-institutionnelles/statistiques-rankings/',
                                  menus: [
                                      {
                                          heading:'Glossaire Rankings',
                                          link: 'https://www.epfl.ch/about/overview/fr/statistiques-institutionnelles/statistiques-rankings/glossaire-rankings/',
                                          
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          heading: 'Identité',
                          link: 'https://www.epfl.ch/about/overview/fr/identite/'
                      }
                  ]
              },
              
          ]
      },
      {
          heading: 'Education',
          link: 'https://www.epfl.ch/education/fr/',
          menus: [

              {
                  heading: 'Bachelor',
                  link: 'https://www.epfl.ch/education/bachelor/fr/'
              },
              {
                  heading: 'Master',
                  link: 'https://www.epfl.ch/education/master/fr/'
              },
              {
                  heading: 'Doctorat',
                  link: 'https://www.epfl.ch/education/doctorat/fr/'
              },
          ]
      },
      {
          heading: 'Recherche',
          link: 'https://www.epfl.ch/recherche/fr/',
      },
      {
          heading: 'Innovation',
          link: 'https://www.epfl.ch/innovation/fr/',
      }
  ] 
}

export const MenuWithoutCurrentItem: Story = {}
MenuWithoutCurrentItem.args = {
  mainMenuStructure : [
      {
          heading:'À propos',
          link: 'https://www.epfl.ch/about/fr/',
          menus: [
              { 
                  heading:'Présidence',
                  link:'https://www.epfl.ch/about/presidency/fr/accueil/'
              }, 
              {
                  heading: 'Présentation',
                  link:'https://www.epfl.ch/about/overview/fr/presentation/',
                  menus: [
                      
                      {
                          heading:'Histoire de l\'EPFL',
                          link:'https://www.epfl.ch/about/overview/fr/histoire/'
                      },
                      {
                          heading:'Statistiques Institutionnelles',
                          link:'https://www.epfl.ch/about/overview/fr/statistiques-institutionnelles/',
                          menus: [
                              {
                                  heading:'Statistiques Rankings',
                                  link:'https://www.epfl.ch/about/overview/fr/statistiques-institutionnelles/statistiques-rankings/',
                                  menus: [
                                      {
                                          heading:'Glossaire Rankings',
                                          link: 'https://www.epfl.ch/about/overview/fr/statistiques-institutionnelles/statistiques-rankings/glossaire-rankings/',
                                          
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          heading: 'Identité',
                          link: 'https://www.epfl.ch/about/overview/fr/identite/'
                      }
                  ]
              },
              
          ]
      },
      {
          heading: 'Education',
          link: 'https://www.epfl.ch/education/fr/',
          menus: [

              {
                  heading: 'Bachelor',
                  link: 'https://www.epfl.ch/education/bachelor/fr/'
              },
              {
                  heading: 'Master',
                  link: 'https://www.epfl.ch/education/master/fr/'
              },
              {
                  heading: 'Doctorat',
                  link: 'https://www.epfl.ch/education/doctorat/fr/'
              },
          ]
      },
      {
          heading: 'Recherche',
          link: 'https://www.epfl.ch/recherche/fr/',
      },
      {
          heading: 'Innovation',
          link: 'https://www.epfl.ch/innovation/fr/',
      }
  ] 
}

export const MenuWithTwoCurrentItems: Story = {}
MenuWithTwoCurrentItems.args = {
  mainMenuStructure : [
      {
          heading:'À propos',
          link: 'https://www.epfl.ch/about/fr/',
          menus: [
              { 
                  heading:'Présidence',
                  link:'https://www.epfl.ch/about/presidency/fr/accueil/'
              }, 
              {
                  heading: 'Présentation',
                  link:'https://www.epfl.ch/about/overview/fr/presentation/',
                  menus: [
                      
                      {
                          heading:'Histoire de l\'EPFL',
                          link:'https://www.epfl.ch/about/overview/fr/histoire/'
                      },
                      {
                          heading:'Statistiques Institutionnelles',
                          link:'https://www.epfl.ch/about/overview/fr/statistiques-institutionnelles/',
                          menus: [
                              {
                                  heading:'Statistiques Rankings',
                                  link:'https://www.epfl.ch/about/overview/fr/statistiques-institutionnelles/statistiques-rankings/',
                                  menus: [
                                      {
                                          heading:'Glossaire Rankings',
                                          link: 'https://www.epfl.ch/about/overview/fr/statistiques-institutionnelles/statistiques-rankings/glossaire-rankings/',
                                          currentItem: true
                                          
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          heading: 'Identité',
                          link: 'https://www.epfl.ch/about/overview/fr/identite/'
                      }
                  ]
              },
              
          ]
      },
      {
          heading: 'Education',
          link: 'https://www.epfl.ch/education/fr/',
          menus: [

              {
                  heading: 'Bachelor',
                  link: 'https://www.epfl.ch/education/bachelor/fr/',
                  currentItem: true
              },
              {
                  heading: 'Master',
                  link: 'https://www.epfl.ch/education/master/fr/'
              },
              {
                  heading: 'Doctorat',
                  link: 'https://www.epfl.ch/education/doctorat/fr/'
              },
          ]
      },
      {
          heading: 'Recherche',
          link: 'https://www.epfl.ch/recherche/fr/',
      },
      {
          heading: 'Innovation',
          link: 'https://www.epfl.ch/innovation/fr/',
      }
  ] 
}