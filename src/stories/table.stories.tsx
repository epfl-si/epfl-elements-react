import type { StoryObj } from "@storybook/react";
import { Table } from "../components/Table"

const meta = {
  title: "Molecules/Table",
  component: Table,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
Default.args = {
  title: 'Test Table',
  showRowTotals: true,
  data: [
    { link: 'https://www.epfl.ch/about/', anchor: 'About' },
    { link: 'https://www.epfl.ch/education', anchor: 'Education' },
    { link: 'https://www.epfl.ch/research', anchor: 'Research' },
    { link: 'https://www.epfl.ch/innovation/', anchor: 'Innovation' },
    { link: 'https://www.epfl.ch/schools/', anchor: 'Schools' },
    { link: 'https://www.epfl.ch/campus/', anchor: 'Campus' }
  ]
}

export const NoTitle: Story = {}
NoTitle.args = {
  showRowTotals: true,
  data: [
    { link: 'https://www.epfl.ch/about/', anchor: 'About' },
    { link: 'https://www.epfl.ch/education', anchor: 'Education' },
    { link: 'https://www.epfl.ch/research', anchor: 'Research' },
    { link: 'https://www.epfl.ch/innovation/', anchor: 'Innovation' },
    { link: 'https://www.epfl.ch/schools/', anchor: 'Schools' },
    { link: 'https://www.epfl.ch/campus/', anchor: 'Campus' }
  ]
}

export const NoTitleNoTotals: Story = {}
NoTitleNoTotals.args = {
  data: [
    { link: 'https://www.epfl.ch/about/', anchor: 'About' },
    { link: 'https://www.epfl.ch/education', anchor: 'Education' },
    { link: 'https://www.epfl.ch/research', anchor: 'Research' },
    { link: 'https://www.epfl.ch/innovation/', anchor: 'Innovation' },
    { link: 'https://www.epfl.ch/schools/', anchor: 'Schools' },
    { link: 'https://www.epfl.ch/campus/', anchor: 'Campus' }
  ]
}

export const CustomHeight: Story = {}
CustomHeight.args = {
  height: 200,
  data: [
    { link: 'https://www.epfl.ch/about/', anchor: 'About' },
    { link: 'https://www.epfl.ch/education', anchor: 'Education' },
    { link: 'https://www.epfl.ch/research', anchor: 'Research' },
    { link: 'https://www.epfl.ch/innovation/', anchor: 'Innovation' },
    { link: 'https://www.epfl.ch/schools/', anchor: 'Schools' },
    { link: 'https://www.epfl.ch/campus/', anchor: 'Campus' }
  ]
}

export const CustomHeightWidth: Story = {}
CustomHeightWidth.args = {
  height: 200,
  width: 400,
  data: [
    { link: 'https://www.epfl.ch/about/', anchor: 'About' },
    { link: 'https://www.epfl.ch/education', anchor: 'Education' },
    { link: 'https://www.epfl.ch/research', anchor: 'Research' },
    { link: 'https://www.epfl.ch/innovation/', anchor: 'Innovation' },
    { link: 'https://www.epfl.ch/schools/', anchor: 'Schools' },
    { link: 'https://www.epfl.ch/campus/', anchor: 'Campus' }
  ]
}

export const CustomSelectedColumns: Story = {}
CustomSelectedColumns.args = {
  showRowTotals: true,
  columns: ['anchor'],
  data: [
    { link: 'https://www.epfl.ch/about/', anchor: 'About' },
    { link: 'https://www.epfl.ch/education', anchor: 'Education' },
    { link: 'https://www.epfl.ch/research', anchor: 'Research' },
    { link: 'https://www.epfl.ch/innovation/', anchor: 'Innovation' },
    { link: 'https://www.epfl.ch/schools/', anchor: 'Schools' },
    { link: 'https://www.epfl.ch/campus/', anchor: 'Campus' }
  ]
}

export const CustomColumnsOrder: Story = {}
CustomColumnsOrder.args = {
  showRowTotals: true,
  columns: ['anchor', 'link'],
  data: [
    { link: 'https://www.epfl.ch/about/', anchor: 'About' },
    { link: 'https://www.epfl.ch/education', anchor: 'Education' },
    { link: 'https://www.epfl.ch/research', anchor: 'Research' },
    { link: 'https://www.epfl.ch/innovation/', anchor: 'Innovation' },
    { link: 'https://www.epfl.ch/schools/', anchor: 'Schools' },
    { link: 'https://www.epfl.ch/campus/', anchor: 'Campus' }
  ]
}

export const CustomColumnsLabels: Story = {}
CustomColumnsLabels.args = {
  showRowTotals: true,
  columnsLabels: ['EPFL Link', 'EPFL Anchor'],
  data: [
    { link: 'https://www.epfl.ch/about/', anchor: 'About' },
    { link: 'https://www.epfl.ch/education', anchor: 'Education' },
    { link: 'https://www.epfl.ch/research', anchor: 'Research' },
    { link: 'https://www.epfl.ch/innovation/', anchor: 'Innovation' },
    { link: 'https://www.epfl.ch/schools/', anchor: 'Schools' },
    { link: 'https://www.epfl.ch/campus/', anchor: 'Campus' }
  ]
}

export const HyperlinkColumnsLabels: Story = {}
HyperlinkColumnsLabels.args = {
  showRowTotals: true,
  columnsLabels: ['EPFL Link', 'EPFL Anchor'],
  hyperLinks: [{ column: 'anchor', link: 'link' }],
  data: [
    { link: 'https://www.epfl.ch/about/', anchor: 'About' },
    { link: 'https://www.epfl.ch/education', anchor: 'Education' },
    { link: 'https://www.epfl.ch/research', anchor: 'Research' },
    { link: 'https://www.epfl.ch/innovation/', anchor: 'Innovation' },
    { link: 'https://www.epfl.ch/schools/', anchor: 'Schools' },
    { link: 'https://www.epfl.ch/campus/', anchor: 'Campus' }
  ]
}

export const HyperlinkColumnsLabelsWithTarget: Story = {}
HyperlinkColumnsLabelsWithTarget.args = {
  showRowTotals: true,
  columnsLabels: ['EPFL Link', 'EPFL Anchor'],
  height: 300,
  hyperLinks: [{ column: 'anchor', link: 'link', target: 'myiframe' }],
  data: [
    { link: 'https://plan.epfl.ch/iframe?q=mea2395', anchor: 'Office ME 2395' },
    { link: 'https://plan.epfl.ch/iframe?q=med09418', anchor: 'Hall MED 94.18' }
  ]
}

export const HyperlinkColumnsLabelsWithOnClickAlert: Story = {}
HyperlinkColumnsLabelsWithOnClickAlert.args = {
  showRowTotals: true,
  columnsLabels: ['EPFL Link', 'EPFL Anchor'],
  height: 300,
  hyperLinks: [{ 
    column: 'anchor', 
    link: 'link', 
    onClick: () => window.alert("you clicked in the link")}],
  data: [
    { link: 'https://www.epfl.ch/about/', anchor: 'About' },
    { link: 'https://www.epfl.ch/education', anchor: 'Education' },
    { link: 'https://www.epfl.ch/research', anchor: 'Research' },
    { link: 'https://www.epfl.ch/innovation/', anchor: 'Innovation' },
    { link: 'https://www.epfl.ch/schools/', anchor: 'Schools' },
    { link: 'https://www.epfl.ch/campus/', anchor: 'Campus' }
  ]
}

export const tagsetColumns: Story = {}
tagsetColumns.args = {
  columnsLabels: ['EPFL Link', 'EPFL Anchor', 'Tagset1', 'Tagset2'],
  tagColumns: { columns: ['tags1', 'tags2'], separator: ',' },
  data: [
    { link: 'https://www.epfl.ch/about/', anchor: 'About', tags1: 'page,about', tags2: 'test1,test2'},
    { link: 'https://www.epfl.ch/education', anchor: 'Education', tags1: 'page,education', tags2: 'test1,test2,test3' },
    { link: 'https://www.epfl.ch/research', anchor: 'Research', tags1: 'page,research', tags2: 'test4' },
    { link: 'https://www.epfl.ch/innovation/', anchor: 'Innovation', tags1: 'page,innovation', tags2: 'test7,test8' },
    { link: 'https://www.epfl.ch/schools/', anchor: 'Schools', tags1: 'page,school' },
    { link: 'https://www.epfl.ch/campus/', anchor: 'Campus' }
  ]
}

export const tagsetColumnsAndHyperLinks: Story = {}
tagsetColumnsAndHyperLinks.args = {
  columnsLabels: ['EPFL Link', 'EPFL Anchor', 'Tagset1', 'Tagset2'],
  tagColumns: { columns: ['tags1', 'tags2'], separator: ',' },
  hyperLinks: [{ column: 'anchor', link: 'link' }],
  data: [
    { link: 'https://www.epfl.ch/about/', anchor: 'About', tags1: 'page,about', tags2: 'test1,test2'},
    { link: 'https://www.epfl.ch/education', anchor: 'Education', tags1: 'page,education', tags2: 'test1,test2,test3' },
    { link: 'https://www.epfl.ch/research', anchor: 'Research', tags1: 'page,research', tags2: 'test4' },
    { link: 'https://www.epfl.ch/innovation/', anchor: 'Innovation', tags1: 'page,innovation', tags2: 'test7,test8' },
    { link: 'https://www.epfl.ch/schools/', anchor: 'Schools', tags1: 'page,school' },
    { link: 'https://www.epfl.ch/campus/', anchor: 'Campus' }
  ]
}
