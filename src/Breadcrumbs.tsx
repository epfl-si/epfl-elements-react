import React from 'react'

export function Breadcrumbs ({ children }) {
  return (
    <div className='breadcrumb-container'>
      <nav aria-label='breadcrumb' className='breadcrumb-wrapper'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item' style={{ marginRight: '0.4em' }}>
            <a href='https://www.epfl.ch' target='_blank' rel='noopener noreferrer'>
              <svg className='icon' aria-hidden='true'>
                <use xlinkHref='#icon-home'>
                  <svg id='icon-home' viewBox='0 0 11 12'>
                    <path d='M0 5l5.25-5 5.25 5v7H0z' fillRule='evenodd' />
                  </svg>
                </use>
              </svg>
            </a>
          </li>
          {children}
        </ol>
      </nav>
    </div>)
}
