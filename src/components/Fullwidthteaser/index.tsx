type fullTeasterProps = {
  Fullwidthtype?: string;
  titleContent?: string;
  titleMsg?: string;
  btnMsg?: string;
  srcImg?: string;
  footerMsg?: string;
}

export function Fullwidthteaser ({ Fullwidthtype, titleContent, titleMsg, btnMsg, srcImg, footerMsg }: fullTeasterProps) {
  return (
    <div className={Fullwidthtype}>
      <picture>
        <img src={srcImg} aria-labelledby='background-label' alt='An image description' />
      </picture>
      <div className='fullwidth-teaser-text'>
        <div className='fullwidth-teaser-header'>
          <div className='fullwidth-teaser-title'>
            <h3>
              {titleMsg}
            </h3>
          </div>
          <a href='#' aria-label='En savoir plus sur Tech Transfer' className='btn btn-primary triangle-outer-bottom-right d-none d-xl-block'>
            {btnMsg}
            <svg className='icon' aria-hidden='true'>
              <use xlinkHref='#icon-chevron-right' />
            </svg>
          </a>
        </div>
        <div className='fullwidth-teaser-content'>
          <p>
            {titleContent}
          </p>
        </div>
        <div className='fullwidth-teaser-footer'>
          <a href='#' aria-label={footerMsg} className='btn btn-primary btn-block d-xl-none'>{btnMsg}</a>
        </div>
      </div>
    </div>
  )
}
