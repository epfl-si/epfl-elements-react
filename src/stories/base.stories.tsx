import React from 'react'
import type { StoryObj } from "@storybook/react";
import { Base } from "../components/Base";

const meta = {
  title: "Pages/Base",
  component: Base,
  tags: ["docsPage"]
};

// Common Props across stories.
const breadcrumbItems = [
    { link: 'https://www.epfl.ch/schools/', anchor: 'Schools' },
    { link: 'https://sti.epfl.ch/', anchor: 'School of Engineering' },
    { link: '', anchor: 'Test App', active: true }
  ]
  const baseTitle = 'EPFL STI React Library'
  
  const user = {
    first_name: 'Juan',
    last_name: 'Convers',
    sciper: '00000',
    photo_url: 'https://avatars.githubusercontent.com/u/12231812'
  }
  

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const WithFeedback: Story = {
    args: {
        breadcrumbItems,
        baseTitle,
        title: 'Base Component - Default',
        feedBackEmail: 'mykompas_administrators@groupes.epfl.ch',
        asideMenuItems: [],
        user,
        children: <h4>Test Application</h4>
    }
  };


export const lightFooter: Story = {}
  lightFooter.args = {
    breadcrumbItems,
    baseTitle,
    useLightFooter: true,
    title: 'Base Component - Light footer',
    asideMenuItems: [],
    user,
    children: <h4>Test Application (light footer)</h4>
  }
  
  export const noAsideMenu: Story = {}
  noAsideMenu.args = {
    breadcrumbItems,
    baseTitle,
    user,
    title: 'Base Component - No aside Menu',
    children: <h4>Test Application (No aside Menu)</h4>
  }
  
  export const noAsideMenuNoFooter: Story = {}
  noAsideMenuNoFooter.args = {
    breadcrumbItems,
    showFooter: false,
    baseTitle,
    user,
    title: 'Base Component - No aside Menu & no footer',
    children: <h4>Test Application (No aside Menu & no footer)</h4>
  }
  
  export const containerFull: Story = {}
  const containerFullChildren = (
    <div className='container-full'>
      <h4>Test container full</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  
      </p>
    </div>
  )
  containerFull.args = {
    breadcrumbItems,
    baseTitle,
    user,
    title: 'Base Component - Container Full',
    children: containerFullChildren
  }
  
  export const containerFullPadding: Story = {}
  const containerFullPaddingChildren = (
    <div className='container-full' style={{ padding: '1em' }}>
      <h4>Test container full</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  
      </p>
    </div>
  )
  containerFullPadding.args = {
    breadcrumbItems,
    baseTitle,
    user,
    title: 'Base Component - Container Full with Padding',
    children: containerFullPaddingChildren
  }
  
  export const containerFluid: Story = {}
  const containerFluidChildren = (
    <div className='container-fluid'>
      <h4>Test container fluid</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  )
  containerFluid.args = {
    breadcrumbItems,
    baseTitle,
    user,
    title: 'Base Component - Container Fluid',
    children: containerFluidChildren
  }
  
  export const BetaView: Story = {}
  BetaView.args = {
    breadcrumbItems,
    baseTitle,
    feedBackEmail: 'mykompas_administrators@groupes.epfl.ch',
    isBeta: true,
    title: 'Base Component - Default',
    asideMenuItems: [],
    user,
    children: <h4>Test Application</h4>
  }
  
  export const CustomAvatarLogo: Story = {}
  CustomAvatarLogo.args = {
    breadcrumbItems,
    baseTitle,
    title: 'Base Component - Default',
    feedBackEmail: 'mykompas_administrators@groupes.epfl.ch',
    asideMenuItems: [],
    user,
    avatarLogoUrl: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
    avatarLogoAltText: 'white space placeholder',
    children: <h4>Test Application</h4>
  }
  
  export const CustomMainContainerClass: Story = {}
  CustomMainContainerClass.args = {
    breadcrumbItems,
    baseTitle,
    mainContainerClass: 'customClass',
    title: 'Base Component - Default - Custom Class',
    feedBackEmail: 'mykompas_administrators@groupes.epfl.ch',
    asideMenuItems: [],
    user,
    avatarLogoUrl: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
    avatarLogoAltText: 'white space placeholder',
    children: <h4>Test Application</h4>
  }
