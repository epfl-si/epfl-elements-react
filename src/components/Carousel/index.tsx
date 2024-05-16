import { useState } from 'react'

import 'epfl-elements/dist/css/elements.min.css'

import './index.css'

type CarouselItemProps = {
  id?: number;
  width?: number;
  height?: number;
  src?: string;
  srcset?: string;
  title?: string;
  link?: string;
  content?: string;
  active?: boolean;
}

type CarouselProps = {
  carouselItems: Array<CarouselItemProps>
}

interface GenericObjectProps {
  [key: string]: any;
}

export function Carousel ({ carouselItems }: CarouselProps) {
  const [activeId, setActiveId] = useState(carouselItems.filter((item) => item.active)[0].id)
  const positionIds = carouselItems.reduce((obj: GenericObjectProps, item, i) => {
    obj[item.id] = i
    return obj
  }, {})

  function switchNextItem () {
    const currentPosition = positionIds[activeId]
    const nextPosition = currentPosition + 1
    const nextId = (carouselItems[nextPosition] || carouselItems[0]).id
    setActiveId(nextId)
  }

  function switchPreviousItem () {
    const currentPosition = positionIds[activeId]
    const previousPosition = currentPosition - 1
    const previousId = (carouselItems[previousPosition] || carouselItems[carouselItems.length - 1]).id
    setActiveId(previousId)  
  }

  const getSingleCarouselItem = (item: any) => <div className={item.id === activeId ? "carousel-item active" : "carousel-item"}>
    <div className="fullwidth-teaser fullwidth-teaser-horizontal">
      <picture>
        <img width={item.width} height={item.height} src={item.src} className="attachment-thumbnail_16_9_large_80p size-thumbnail_16_9_large_80p" alt="" loading="lazy" title="" srcSet={item.srcset} sizes={`(max-width: ${item.width}) 100vw, ${item.width}px`} />
    </picture>
    <div className="fullwidth-teaser-text">
      <div className="fullwidth-teaser-header">
        <div className="fullwidth-teaser-title">
          <h3>{item.title}</h3>
        </div>
        <a href={item.link} target="_blank" aria-label="Link to read more of that page" className="btn btn-primary triangle-outer-top-right d-none d-xl-block">
          Read more <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-chevron-right"></use>
          </svg>
        </a>
      </div>
      <div className="fullwidth-teaser-content">
        <p>{item.content}</p>
      </div>
      <div className="fullwidth-teaser-footer">
        <a href={item.link} aria-label="Link to read more of that page" className="btn btn-primary btn-block d-xl-none">Read more</a>
      </div>
    </div>
  </div>
</div>

  const getChevronIcons = () => <div style={{display: 'none'}}>
    <svg xmlns="http://www.w3.org/2000/svg">
      <symbol id="icon-chevron-left" viewBox="0 0 24 24">
        <path fill="currentColor" d="m16.9 6.1-1.9-2L7.1 12l7.9 7.9 1.9-2L11 12z"></path>
      </symbol>
      <symbol id="icon-chevron-right" viewBox="0 0 24 24">
        <path fill="currentColor" d="m7.1 17.9 1.9 2 7.9-7.9L9 4.1l-1.9 2L13 12z"></path>
      </symbol>
    </svg>
  </div>

  const getCarouselIndicators = () => <ol className="carousel-indicators">
    {carouselItems && carouselItems.map((item: any, i: any) => 
      <li 
        key={`carInd${i}`}
        data-target="#carouselNews"
        data-slide-to={i}
        onClick={() => setActiveId(item.id)}
        className={item.id === activeId ? 'active' : ''}>
      </li>
    )}
  </ol>

  const getNextPreviousButtons = () => <>
       <button 
        className="carousel-control carousel-control-prev"
        type="button"
        data-slide="prev"
        data-target="#carouselNews"
        onClick={() => switchPreviousItem()}
      >
       <svg className="icon" aria-hidden="true">
         <use xlinkHref="#icon-chevron-left"></use>
       </svg>
       <span className="sr-only">Previous</span>
     </button>
     <button 
        className="carousel-control carousel-control-next" 
        type="button" data-slide="next" 
        data-target="#carouselNews"
        onClick={() => switchNextItem()}
      >
       <svg className="icon" aria-hidden="true">
         <use xlinkHref="#icon-chevron-right"></use>
       </svg>
       <span className="sr-only">Next</span>
     </button>
  </>

  function renderCarousel () {
    return <>
      {getChevronIcons()}
      <div className="container-full">
        <div id="carouselNews" className="carousel slide carousel-highlighted-news" data-ride="carousel" data-interval="6000">
          <div className="carousel-inner">
            {carouselItems && carouselItems.map((item: any) => getSingleCarouselItem(item))}
          </div>
          {getCarouselIndicators()}
          {getNextPreviousButtons()}
        </div>
      </div>   
    </>
  }

  return (
    <>
      {carouselItems && activeId && renderCarousel()}
    </>
  )
}
