import '@epfl/epfl-elements-styles/dist/css/combined.css'


type HeroProps = {
  title?: string;
  content?: string;
  image?: string
}

export function Hero ({ title, content, image }: HeroProps) {
  return (
    <div className='container-full'>
      <div className='hero'>
        <div className='hero-content-container'>
          <h1 className='hero-title'>{title}</h1>
          <div className='hero-content'>
            {content}
          </div>
        </div>
        <div className='hero-img'>
          <picture>
            <source media='(min-width: 1140px)' srcSet={`${image} 1x,${image} 2x`} />
            <source media='(min-width: 960px)' srcSet={`${image} 1x,${image} 2x`} />
            <source media='(min-width: 720px)' srcSet={`${image} 1x,${image} 2x`} />
            <source media='(min-width: 541px)' srcSet={`${image} 1x,${image} 2x`} />
            <source media='(max-width: 540px)' srcSet={`${image} 1x,${image} 2x`} />
            <img src={image} alt='School of Engineering' className='img-fluid' />
          </picture>
        </div>
      </div>
      <div className='mt-5'>&nbsp;</div>
    </div>
  )
}
