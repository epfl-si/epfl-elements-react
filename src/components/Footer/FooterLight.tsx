import { Logo } from '../Logo'
import { getLegal, getBackToTop } from './common'
import { socials } from './footersocialcontents.json'

const getSocialLight = () =>
  <p className='footer-light-socials'>
    <small>Follow EPFL on social media</small>
    {socials.map((item, i) =>
      <a key={i} href={item.link} className={`social-icon social-${item.iconclass} social-icon-negative`} target='_blank' rel='nofollow noopener'>
        <svg className='icon' aria-hidden='true'>
          <use xlinkHref={`#${item.iconclass}`} />
        </svg>
        <span className='sr-only'>{item.anchor}</span>
      </a>)}
  </p>

export function FooterLight () {
  return (
    <div className='bg-gray-100 pt-5'>
      <div className='container'>
        <footer className='footer-light' role='contentinfo'>
          <div className='row'>
            <div className='col-6 mx-auto mx-md-0 mb-4 col-md-3 col-lg-2'>
              <Logo />
            </div>
            <div className='col-md-9 col-lg-10 mb-4'>
              <div className='ml-md-2 ml-lg-5'>
                <ul className='list-inline list-unstyled'>
                  <li className='list-inline-item'>Contact</li>
                  <li className='list-inline-item text-muted pl-3'><small>EPFL CH-1015 Lausanne</small></li>
                  <li className='list-inline-item text-muted pl-3'><small>+41 21 693 11 11</small></li>
                </ul>
                {getSocialLight()}
                {getLegal()}
              </div>
            </div>
          </div>
        </footer>
        {getBackToTop()}
      </div>
    </div>
  )
}
