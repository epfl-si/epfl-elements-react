import React, {ReactElement, useEffect, useRef, useState} from 'react'
import { Logo } from './Logo.tsx'
import { Drawer } from './Drawer.tsx'
import { Breadcrumbs } from './Breadcrumbs.tsx'
import { filterChildren, pickChildrenOfFirst } from './utils/children.ts'
import {Button} from "./stories/molecules/Button.tsx";
import "../scss/generalStyles.scss";

interface Children {
  children?: React.ReactNode
}

export const Base = ({ children } : Children) => {
  function classify (el : ReactElement) {
    for (let type of [Base.TopMenu, Base.AsideMenu, Base.Drawer,
                      Base.User, Base.Breadcrumbs]) {
      if (type === el.type) {
        return type
      }
    }
    return "other"
  }

  const topMenu = pickChildrenOfFirst(children, (el) => classify(el) === Base.TopMenu)
  const asideMenu = pickChildrenOfFirst(children, (el) => classify(el) === Base.AsideMenu)
  const drawer = pickChildrenOfFirst(children, (el) => classify(el) === Base.Drawer)
  const user = pickChildrenOfFirst(children, (el) => classify(el) === Base.User)
  const breadcrumbs = pickChildrenOfFirst(children, (el) => classify(el) === Base.Breadcrumbs)
  const rest =  filterChildren(children, (el) => classify(el) === "other")
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const asideMenuRef = useRef<HTMLDivElement>(null);
  const buttonMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (asideMenuRef.current && !asideMenuRef.current.contains(event.target as Node) && buttonMenuRef.current && !buttonMenuRef.current.contains(event.target as Node)) {
        toggleMenu();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [asideMenuRef]);


  const toggleMenu = () => {
    setIsOpenMenu(open => !open);
  }

  return <>
    <header role='banner' className='header'>
      {drawer ? <Drawer>{drawer}</Drawer> : <></>}
      <Logo />
      <ul id='top-menu' className='nav-header d-none d-xl-flex'>
       {topMenu ? topMenu : defaultTopMenu.map(getMenuItem) }
      </ul>
       {user ? user : <></> }
    </header>
    <div className='main-container'>
      <div style={{display: "flex", flexDirection: "row"}}>
        { breadcrumbs ? <Breadcrumbs>{breadcrumbs}</Breadcrumbs> : <></> }
        <div className="responsiveAsideMenu_burger" ref={buttonMenuRef} >
          <Button size="icon" iconName={"#menu"} onClick={toggleMenu}/>
        </div>
      </div>
      <div className='nav-toggle-layout nav-aside-layout' style={{display: 'flex', flexDirection: 'row'}}>
        {(! asideMenu) ? <></> :
          <div className={`responsiveAsideMenu ${isOpenMenu ? 'is-open' : ''}`} ref={asideMenuRef} >
            <aside className={`nav-aside-wrapper`}>
              <nav id='nav-aside' className='nav-aside' role='navigation' aria-describedby='nav-aside-title' onClick={toggleMenu}>
                {asideMenu}
              </nav>
            </aside>
          </div>
        }
        <div className='w-100 pb-5'>
          <main id='main' role='main' className='content container-grid'>
            {rest}
          </main>
        </div>
      </div>
    </div>
  </>
}

Base.TopMenu = () => null
Base.AsideMenu = () => null
Base.Drawer = () => null
Base.User = () => null
Base.Breadcrumbs = () => null

const defaultTopMenu = [] //{ link: 'https://www.epfl.ch/about/', anchor: 'About' },

const getMenuItem = (item, i) =>
  <li
    key={`li-${i}`}
    id={`menu-item--${i}`}
    className={item.active && 'current-menu-item'}
  >
    <a key={`a-${i}`} className='nav-item' href={item.link}>{item.anchor}</a>
  </li>
