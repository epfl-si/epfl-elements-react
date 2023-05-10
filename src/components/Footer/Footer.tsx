import { getLegal, getBackToTop } from './common'
import { socials } from './footersocialcontents.json'
import { schools as schoolsElements, footer as sitemapFooter } from './elementsConfigData.json'

const getId = (section: { heading_en: any; items: any[] }, i: number, element: string) => `${element}_${i}_${section}`

const getSiteMap = (sitemap: any) =>
  <div className='footer-group footer-sitemap'>
    {
      sitemap.map((section: { heading_en: any, items: any[] }, i: any) =>
        <div key={getId(section, i, 'div')} className='footer-sitemap-col'>
          <button
            className='footer-title collapse-title collapsed'
            type='button'
            data-toggle='collapse'
            data-target={`#collapse-footer-${i}`}
            aria-expanded='false' aria-controls={`#collapse-footer-${i}`}
          >
            <strong>{section.heading_en}</strong>
          </button>
          <div className='collapse collapse-item' id={`collapse-footer-${i}`}>
            <ul className='footer-links'>
              {section.items.map((item, i) =>
                <li key={getId(section.heading_en, i, 'li')}><a href={item.url_en}>{item.name_en}</a></li>
              )}
            </ul>
          </div>
        </div>
      )
}
  </div>

const getSchools = (schools: any[]) =>
  <div className='footer-group'>
    <div className='footer-faculties'>
      <button
        className='footer-title collapse-title collapsed'
        type='button'
        data-toggle='collapse'
        data-target='#collapse-fac'
        aria-expanded='false'
        aria-controls='collapse-fac'
      >
        Schools
      </button>
      <div className='collapse collapse-item' id='collapse-fac'>
        <ul className='footer-links'>
          {schools.map((s, i) =>
            <li key={i}><a href={s.url_en}>{s.name_en} <strong>{s.acronym}</strong></a></li>)}
        </ul>
      </div>
    </div>
  </div>

const getServicesInfo = () =>
  <div className='footer-group footer-buttons'>
    <p className='footer-title footer-title-no-underline'>Practical</p>
    <a href='https://www.epfl.ch/campus/services/en/homepage/' className='btn btn-secondary btn-sm'>Services and resources</a>
    <a href='tel:+41216933000' className='btn btn-secondary btn-sm'>Emergencies: +41 21 693 3000</a>
    <a href='https://www.epfl.ch/about/overview/contact-en/' className='btn btn-secondary btn-sm'>Contact</a>
    <a href='https://map.epfl.ch/' className='btn btn-secondary btn-sm'>Map</a>
  </div>

const getSocial = () =>
  <div className='footer-group footer-socials'>
    <p className='footer-title footer-title-no-underline'>Follow EPFL on social media</p>
    <div className='footer-social'>
      {socials.map((item, i) =>
        <a key={i} href={item.link} className={`social-icon social-${item.iconclass} social-icon-negative`} target='_blank' rel='nofollow noopener'>
          <svg className='icon' aria-hidden='true'>
            <use xlinkHref={`#${item.iconclass}`} />
          </svg>
          <span className='sr-only'>{item.anchor}</span>
        </a>)}
    </div>
  </div>

export function Footer ({ sitemap = sitemapFooter, schools = schoolsElements }) {
  return (
    <div className='bg-gray-100 py-5 mt-5'>
      <div className='container'>
        <footer className='footer' role='contentinfo'>
          {sitemap.length > 0 && getSiteMap(sitemap)}
          {schools.length > 0 && getSchools(schools)}
          {getServicesInfo()}
          {getSocial()}
          {getLegal()}
        </footer>
        {getBackToTop()}
      </div>
    </div>
  )
}
