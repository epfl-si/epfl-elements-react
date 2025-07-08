import React, { ReactElement } from 'react'
import { filterChildren, pickFirst } from './utils/children.ts'

export interface AvatarProps {
  peopleSciper ?: string
  children?: React.ReactNode
}

export function Avatar ({ children } : AvatarProps) {
  function isAvatarImage(el : ReactElement) {
    return el.type === Avatar.Image
  }

  const image = pickFirst(children, (el) => isAvatarImage(el))
  const rest =  filterChildren(children, (el) => ! isAvatarImage(el))


  // TODO: we are stealing the `nav-lang` className. We should
  // negotiate proper styling with Mediacom.
  return (
    <nav className='nav-lang nav-lang-short ml-auto'>
      <div className='avatar-teaser'>
      { image ?
        <a className='avatar-teaser-img'>
        <div style={{ width: '50px', height: '50px',
                      backgroundSize: 'cover', backgroundPosition: 'top center',
                      borderRadius: '50%'}}>
        { image.props.children ? image.props.children  : <img src={`https://people.epfl.ch/private/common/photos/links/${image.props.peopleSciper}.jpg`}/> }
        </div>
        </a> : <></> }
        <div className='avatar-teaser-body'>
          {rest}
        </div>
      </div>
    </nav>)
}

Avatar.Image = (_unused_props: { peopleSciper? : string }) => null
