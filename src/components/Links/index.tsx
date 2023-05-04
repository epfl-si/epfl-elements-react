import '@epfl/epfl-elements-styles/dist/css/combined.css'

import { ReactNode } from 'react';

type ExternalLinkProps = {
  href?: string;
  children?: ReactNode
}

export function ExternalLink ({ href, children }: ExternalLinkProps) {
  const getLink = () =>
    <a target='_blank' rel='noopener noreferrer' href={href}>{children}</a>

  return (
    <>
      {href && children && getLink()}
    </>
  )
}
