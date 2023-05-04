const getCurrentYear = () => new Date().getFullYear()

export const getLegal = () =>
  <div className='footer-legal'>
    <div className='footer-legal-links'>
      <a href='https://www.epfl.ch/about/overview/regulations-and-guidelines/disclaimer/'>Accessibility</a>
      <a href='https://www.epfl.ch/about/overview/regulations-and-guidelines/disclaimer/'>Disclaimer</a>
      <a href='https://go.epfl.ch/privacy-policy/'>Privacy policy</a>
    </div>
    <div>
      <p>&copy; {getCurrentYear()} EPFL, all rights reserved</p>
    </div>
  </div>

export const getBackToTop = () =>
  <button id='back-to-top' className='btn btn-primary btn-back-to-top'>
    <span className='sr-only'>Back to top</span>
    <svg className='icon' aria-hidden='true'>
      <use xlinkHref='#icon-chevron-top' />
    </svg>
  </button>
