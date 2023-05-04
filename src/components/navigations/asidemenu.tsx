import { Loader } from '../Loader'

import '@epfl/epfl-elements-styles/dist/css/combined.css'

type AsidemenuProps = {
  isHome?: boolean;
  isLoading?: boolean;
  menuItems?: Array<any>;
  homeLink: string;
  homeAnchor?: string;
  feedBackEmail?: string;
}


export function Asidemenu ({ isHome, isLoading, menuItems, homeAnchor, homeLink, feedBackEmail }: AsidemenuProps) {
  const getMenuList = (menus: any[]) =>
    menus.map(menu =>
      <li className={menu.link === document.location.pathname ? 'active' : undefined} key={menu.link}>
        <a href={menu.link}>{menu.anchor}</a>
      </li>
    )

  function getMenuItems () {
    return (menuItems || []).map(item =>
      <li key={item.heading}><a>{item.heading}</a> {/* eslint-disable-line */}
        <ul>
          {item.menus && getMenuList(item.menus)}
          {item.submenus && item.submenus.map((submenu: any) =>
            <li key={submenu.heading}><a>{submenu.heading}</a> {/* eslint-disable-line */}
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
              <a href={homeLink}>{homeAnchor}</a>
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

