import '@epfl/epfl-elements-styles/dist/css/combined.css'

import { ReactNode } from 'react';

type PictureProps = {
  src?: string;
  title?: string;
  alt?: string;
}

export type CardProps = {
  picture?: PictureProps;
  children?: ReactNode;
  link?: string
}


export function Card ({ picture, children, link }: CardProps) {
  const getPlainCard = () =>
    <div className='card'>
      {picture &&
        <picture className='card-img-top'>
          <img src={picture.src} className='img-fluid' title={picture.title} alt={picture.alt} />
        </picture>}
      <div className='card-body'>
        {children}
      </div>
    </div>

  const getLinkCard = () =>
    <a href={link} className='card link-trapeze-horizontal'>
      {picture &&
        <picture className='card-img-top'>
          <img src={picture.src} className='img-fluid' title={picture.title} alt={picture.alt} />
        </picture>}
      <div className='card-body'>
        {children}
      </div>
    </a>

  return (
    <>
      {link && getLinkCard()}
      {!link && getPlainCard()}
    </>
  )
}
