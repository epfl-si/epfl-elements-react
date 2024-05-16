import { useState } from 'react'
import 'epfl-elements/dist/css/elements.min.css'

export interface DrawerInnerProps {
  link: string,
  anchor: string
}


type DrawerProps = {
  contents: DrawerInnerProps
}

export function Drawer ({ contents }: DrawerProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toogleDrawer = () => setDrawerOpen(!drawerOpen)

  const getDrawerClassName = () =>
    drawerOpen ? 'drawer mr-3 mr-xl-0 open' : 'drawer mr-3 mr-xl-0'

  const getDrawerStyle = () =>
    drawerOpen ? { width: '182.031px' } : undefined

  const getDrawerSvg = () =>
    <svg className='icon' aria-hidden='true'>
      <use xlinkHref='#icon-chevron-right'>
        <svg id='icon-chevron-right' viewBox='0 0 24 24'>
          <path fill='currentColor' d='M7.1 17.9l1.9 2 7.9-7.9L9 4.1l-1.9 2L13 12z' />
        </svg>
      </use>
    </svg>

  return (
    <div className={getDrawerClassName()} style={getDrawerStyle()}>
      <button className='drawer-toggle' onClick={toogleDrawer}>
        {getDrawerSvg()}
      </button>
      <a
        href={contents.link}
        className='drawer-link'
        style={getDrawerStyle()}
        target='_blank'
        rel='noopener noreferrer'
      >
        <span className='text'>{contents.anchor}</span>
      </a>
    </div>
  )
}
