import type { StoryObj } from "@storybook/react";
import { FilterBox } from "../components/Filterbox"

import countries from './testData.json'


const meta = {
  title: "Molecules/FilterBox",
  component: FilterBox,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
Default.args = {
  data: countries,
  filterFields: ['continent', 'iso', 'currencycode'],
  updateFn: (x) => console.log(x) 
}

export const CustomLabels: Story = {}
CustomLabels.args = {
  data: countries,
  filterFields: ['continent', 'iso', 'currencycode'],
  filterLabels: ['Continent', 'ISO2 Code', 'Currency'],
  updateFn: (x: Callback) => console.log(x) 
}

export const MediumCheckboxLabels: Story = {}
MediumCheckboxLabels.args = {
  data: countries,
  filterFields: ['continent', 'iso', 'currencycode'],
  filterLabels: ['Continent', 'ISO2 Code', 'Currency'],
  updateFn: (x: Callback) => console.log(x),
  checkboxLabelClass: 'checkbox-label-md'
}

export const BigCheckboxLabels: Story = {}
BigCheckboxLabels.args = {
  data: countries,
  filterFields: ['continent', 'iso', 'currencycode'],
  filterLabels: ['Continent', 'ISO2 Code', 'Currency'],
  updateFn: (x: Callback) => console.log(x),
  checkboxLabelClass: 'checkbox-label-bg'
}


export const DisabledOptions: Story = {}
DisabledOptions.args = {
  data: countries,
  filterFields: ['continent', 'iso', 'currencycode'],
  filterLabels: ['Continent', 'ISO2 Code', 'Currency'],
  disabledOptions: {'continent': ['NA', 'SA']},
  updateFn: (x) => console.log(x) 
}

export const SearchBox: Story = {}
SearchBox.args = {
  data: countries,
  filterFields: ['continent', 'iso', 'currencycode'],
  searchbox: {label: 'Search', fields: ['continent', 'currencycode']},
  updateFn: (x) => console.log(x) 
}

export const OnlySearchBox: Story = {}
OnlySearchBox.args = {
  data: countries,
  searchbox: {label: 'Search', fields: ['continent', 'currencycode']},
  updateFn: (x) => console.log(x) 
}
