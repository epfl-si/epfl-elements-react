import { Loader } from '../Loader'
import { Link } from 'react-router-dom'

import '@epfl/epfl-elements-styles/dist/css/combined.css'

export type AsindeMenuSingleItemProps = {
  link?: string;
  anchor?: string;
}

export type AsidemenuItemsProps = {
  heading?: string;
  menus?: Array<AsindeMenuSingleItemProps>;
  submenus?: Array<AsidemenuItemsProps>;
}

export type AsidemenuProps = {
  isHome?: boolean;
  isLoading?: boolean;
  menuItems?: Array<AsidemenuItemsProps>;
  homeLink?: string;
  homeAnchor?: string;
  feedBackEmail?: string;
  useReactRouterLinks?: boolean;
}


export function Asidemenu ({ isHome, isLoading, menuItems, homeAnchor, homeLink, feedBackEmail, useReactRouterLinks }: AsidemenuProps) {
  const getMenuList = (menus: Array<AsindeMenuSingleItemProps>) =>
    menus.map(menu =>
      <li className={menu.link === document.location.pathname ? 'active' : undefined} key={menu.link}>
        {
          useReactRouterLinks ? <Link to={menu.link}>{menu.anchor}</Link>
          : <a href={menu.link}>{menu.anchor}</a>}
        
      </li>
    )

  function getMenuItems () {
    return (menuItems || []).map(item =>
      <li key={item.heading}><a>{item.heading}</a> { }
        <ul>
          {item.menus && getMenuList(item.menus)}
          {item.submenus && item.submenus.map((submenu: AsidemenuItemsProps) =>
            <li key={submenu.heading}><a>{submenu.heading}</a> { }
              <ul>
                {getMenuList(submenu.menus)}
              </ul>
            </li>
          )}
        </ul>
      </li>
    )
  }

  return (
    <aside className='nav-aside-wrapper'>
      <nav id='nav-aside' className='nav-aside' role='navigation' aria-describedby='nav-aside-title'>
        <h2 className='h5 sr-only-xl'>
          On the same topic
        </h2>
        <ul>
          {!isLoading &&
            <li className={isHome ? 'active' : ''}>
              {
          useReactRouterLinks ? <Link to={homeLink}>{homeAnchor}</Link>
          : <a href={homeLink}>{homeAnchor}</a>}
            </li>}
          {isLoading ? <Loader /> : getMenuItems()}
        </ul>
      </nav>
      {feedBackEmail && <div className=''>
        <a className='btn btn-primary btn-block' href={`mailto:${feedBackEmail}`}>
          <i className='fas fa-bullhorn' /> Provide feedback
        </a>
      </div>}
    </aside>
  )
}
