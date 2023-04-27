import React, { ReactElement }  from 'react'
import { Logo } from './Logo.tsx'
import { Drawer } from './Drawer.tsx'
import { Breadcrumbs } from './Breadcrumbs.tsx'
import { filterChildren, pickChildrenOfFirst } from './utils/children.ts'

interface Children {
  children?: React.ReactNode
}

export const Base = ({ children } : Children) => {
  function classify (el : ReactElement) {
    for (let type of [Base.TopMenu, Base.AsideMenu, Base.Drawer,
                      Base.UserAvatar, Base.Breadcrumbs]) {
      if (type === el.type) {
        return type
      }
    }
    return "other"
  }

  const topMenu = pickChildrenOfFirst(children, (el) => classify(el) === Base.TopMenu)
  const asideMenu = pickChildrenOfFirst(children, (el) => classify(el) === Base.AsideMenu)
  const drawer = pickChildrenOfFirst(children, (el) => classify(el) === Base.Drawer)
  const userAvatar = pickChildrenOfFirst(children, (el) => classify(el) === Base.UserAvatar)
  const breadcrumbs = pickChildrenOfFirst(children, (el) => classify(el) === Base.Breadcrumbs)
  const rest =  filterChildren(children, (el) => classify(el) === "other")

  return <>
    <header role='banner' className='header'>
      {drawer ? <Drawer>{drawer}</Drawer> : <></>}
      <Logo />
      <ul id='top-menu' className='nav-header d-none d-xl-flex'>
       {topMenu ? topMenu : defaultTopMenu.map(getMenuItem) }
      </ul>
       {userAvatar ? userAvatar : <></> }
    </header>
    <div className='main-container'>
      { breadcrumbs ? <Breadcrumbs>{breadcrumbs}</Breadcrumbs> : <></> }
      <div className='nav-toggle-layout nav-aside-layout'>
      <div className='w-100 pb-5'>
        <main id='main' role='main' className='content container-grid'>
          {rest}
        </main>
      </div>
        {(! asideMenu) ? <></> :
          <aside className='nav-aside-wrapper'>
          <nav id='nav-aside' className='nav-aside' role='navigation' aria-describedby='nav-aside-title'>
            {asideMenu}
          </nav>
          </aside>
          }
    </div>
    </div>
    </>
}

Base.TopMenu = () => null
Base.AsideMenu = () => null
Base.Drawer = () => null
Base.UserAvatar = () => null
Base.Breadcrumbs = () => null

const defaultTopMenu = [
  { link: 'https://www.epfl.ch/about/', anchor: 'About' },
  { link: 'https://www.epfl.ch/education', anchor: 'Education' },
  { link: 'https://www.epfl.ch/research', anchor: 'Research' },
  { link: 'https://www.epfl.ch/innovation/', anchor: 'Innovation' },
  { link: 'https://www.epfl.ch/schools/', anchor: 'Schools', active: true },
  { link: 'https://www.epfl.ch/campus/', anchor: 'Campus' }
]

const getMenuItem = (item, i) =>
  <li
    key={`li-${i}`}
    id={`menu-item--${i}`}
    className={item.active && 'current-menu-item'}
  >
    <a key={`a-${i}`} className='nav-item' href={item.link}>{item.anchor}</a>
  </li>
