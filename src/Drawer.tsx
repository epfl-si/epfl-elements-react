import React, { useState }  from 'react'

interface Children {
  children?: React.ReactNode
}

export const Drawer : React.FC<Children> = ({children}) => {
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
      {children}
    </div>
  )
}
