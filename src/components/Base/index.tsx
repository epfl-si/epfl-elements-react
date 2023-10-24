import { Alert }from '../Alert'
import { Header } from '../Header'
import { Asidemenu } from '../navigations/asidemenu'
// import { MainMenu } from '../navigations/mainMenu'
import { Breadcrumbs } from '../Breadcrumbs'
import { Content } from '../Content'
import { Footer } from '../Footer/Footer'
import { FooterLight } from '../Footer/FooterLight'

import setPageTitle from '../utils/setPageTitle'

// Props import
import { DrawerInnerProps } from '../Drawer'
import { BreadcrumbsItemProps } from '../Breadcrumbs'
import { TopmenuInnerProps } from '../navigations/topmenu'
import { AsidemenuItemsProps } from '../navigations/asidemenu'
// import { MenuItemProps } from '../navigations/mainMenu'

type BaseProps = {
  feedBackEmail?: string;
  homeAnchor?: string;
  homeLink?: string;
  isHome?: boolean;
  isBeta?: boolean;
  isLoading?: boolean;
  children?: JSX.Element;
  user?: object;
  breadcrumbItems?: Array<BreadcrumbsItemProps>;
  topMenuItems?: Array<TopmenuInnerProps>;
  showFooter?: boolean;
  useLightFooter?: boolean;
  drawerContents?: DrawerInnerProps;
  avatarLogoAltText?: string;
  avatarLogoUrl?: string,
  mainContainerClass?: string;
  title?: string;
  baseTitle?: string;
  asideMenuItems?: Array<AsidemenuItemsProps>;
  // mainMenuItems?: Array<MenuItemProps>;
  useReactRouterLinks?: boolean;
}

const defaultTopMenuItems = [
  { link: 'https://www.epfl.ch/about/', anchor: 'About' },
  { link: 'https://www.epfl.ch/education', anchor: 'Education' },
  { link: 'https://www.epfl.ch/research', anchor: 'Research' },
  { link: 'https://www.epfl.ch/innovation/', anchor: 'Innovation' },
  { link: 'https://www.epfl.ch/schools/', anchor: 'Schools', active: true },
  { link: 'https://www.epfl.ch/campus/', anchor: 'Campus' }
]

const defaultBreadcrumbItems = [
  { link: 'https://www.epfl.ch/schools/', anchor: 'Schools' },
  { link: 'https://sti.epfl.ch/', anchor: 'School of Engineering' },
  { link: '', anchor: 'Elements React', active: true }
]

const defaultDrawerContents = {
  link: 'https://www.epfl.ch',
  anchor: 'Go to main site'
}

const defaultHomeAnchor = 'Home'

const defaultHomeLink = '/'

const defaultIsHome = true

const defaultShowFooter = true

const defaultUseLightFooter = false

export function Base ({
  children,
  user,
  feedBackEmail,
  homeAnchor = defaultHomeAnchor,
  homeLink = defaultHomeLink,
  isHome = defaultIsHome,
  isLoading = false,
  isBeta = false,
  asideMenuItems,
  // mainMenuItems,
  topMenuItems = defaultTopMenuItems,
  breadcrumbItems = defaultBreadcrumbItems,
  drawerContents = defaultDrawerContents,
  showFooter = defaultShowFooter,
  useLightFooter = defaultUseLightFooter,
  mainContainerClass,
  baseTitle,
  title,
  avatarLogoUrl,
  avatarLogoAltText,
  useReactRouterLinks
}: BaseProps) {
  baseTitle && title && setPageTitle(baseTitle, title)

  const getBetaAlert = () =>
    <Alert
      title='Beta page:'
      alertType='info'
      message='This is not released yet to the standard users. You are seeing it because you belong to the beta testing group.'
    />

  return (
    <>
      <div>
        {isBeta && getBetaAlert()}
        <Header
          topMenuItems={topMenuItems}
          drawerContents={drawerContents}
          user={user}
          avatarLogoUrl={avatarLogoUrl}
          avatarLogoAltText={avatarLogoAltText}
        />
        <div className='main-container'>
          <Breadcrumbs items={breadcrumbItems} />
          <div className='nav-toggle-layout nav-aside-layout'>
            <Content mainContainerClass={mainContainerClass}>
              {children}
            </Content>
            {asideMenuItems &&
              <Asidemenu
                isHome={isHome}
                feedBackEmail={feedBackEmail}
                isLoading={isLoading}
                menuItems={asideMenuItems}
                homeLink={homeLink}
                homeAnchor={homeAnchor}
                useReactRouterLinks={useReactRouterLinks}
              />}
            {/* {mainMenuItems &&
              <MainMenu 
                TODO: This menu is not usable yet. pending to be implemented. needs some button / modal associated to it. check issue-3
                mainMenuStructure={mainMenuItems}
                useReactRouterLinks={useReactRouterLinks}
              />} */}
          </div>
        </div>
      </div>
      {showFooter && useLightFooter && <FooterLight />}
      {showFooter && !useLightFooter && <Footer />}
    </>
  )
}

