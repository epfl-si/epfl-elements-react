import '@epfl/epfl-elements-styles/dist/css/combined.css'

type BreadcrumbsProps = {
  items: any;
};

const getBreadCrumbItem = (item: any, i: Number) =>
  <li
    key={`li-${i}`}
    style={{ marginRight: '0.4em' }}
    className={item.active ? 'breadcrumb-item active' : 'breadcrumb-item'}
  >
    {item.active
      ? item.anchor
      : <a key={`a-${i}`} href={item.link} target='_blank' rel='noopener noreferrer'>
        {item.anchor}
       </a>}{/* eslint-disable-line */}
  </li>

export function Breadcrumbs ({ items }: BreadcrumbsProps) {
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
          {items && items.map((item: any, x: Number) => getBreadCrumbItem(item, x))}
        </ol>
      </nav>
    </div>
  )
}
