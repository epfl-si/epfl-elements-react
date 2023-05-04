import '@epfl/epfl-elements-styles/dist/css/combined.css'

type TopmenuProps = {
  menuItems?: Array<any>
}

const getMenuItem = (item: any, i: number) =>
  <li
    key={`li-${i}`}
    id={`menu-item--${i}`}
    className={item.active ? 'current-menu-item' : ''}
  >
    <a key={`a-${i}`} className='nav-item' href={item.link}>{item.anchor}</a>
  </li>

export function Topmenu ({ menuItems }: TopmenuProps) {
  return (
    <ul id='top-menu' className='nav-header d-none d-xl-flex'>
      {menuItems && Array.isArray(menuItems) && menuItems.map((item, x) => item && getMenuItem(item, x))}
    </ul>
  )
}

