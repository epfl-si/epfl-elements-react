import { useState } from 'react'

import 'epfl-elements/dist/css/elements.min.css'
import './index.css'

type CookieconsentProps = {
  cookieMessage?: string; 
  cookieDisclaimer?: string;
  cookieDisclaimerUrl?: string;
  btnMsg?: string;
};

export function Cookieconsent ({ cookieMessage, cookieDisclaimer, cookieDisclaimerUrl, btnMsg }: CookieconsentProps) {
  const [toggle, setToggle] = useState('')

  return (
    <div className={toggle} id='wrapper'>
      <div className='cc-window cc-banner cc-type-info cc-theme-classic cc-bottom cc-color-override--1424718129' role='dialog' aria-live='polite' aria-label='cookieconsent' aria-describedby='cookieconsent:desk'>
        <span id='cookieconsent:desc' className='cc-message'>
          {cookieMessage}
          <a aria-label='learn more about cookies' role='button' tabIndex={0} className='cc-link' href={cookieDisclaimerUrl} rel='noopener noreferrer nofollow' target='_blank'>{cookieDisclaimer}</a>
        </span>
        <div className='cc-compliance'><button onClick={() => setToggle('wrapperHide')} aria-label='dismiss cookie message' role='button' tabIndex={0} className='cc-btn cc-dismiss'>{btnMsg}</button></div>
      </div>
    </div>
  )
}
