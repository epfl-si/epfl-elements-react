
import { useEffect } from 'react'

export default function SetPageTitle (baseTitle: string, title: string) {
  const capitalize = (str: string) => (str || '').replace(/\b\w/g, l => l.toUpperCase())

  function getTitle () {
    if (title) {
      return `${baseTitle} - ${title}`
    }
    try {
      if (document.location.pathname === '/') {
        return `${baseTitle} - About`
      }
      const parts = document.location.pathname.split('/').filter(x => x)
      return `${baseTitle} - ${capitalize(parts[0])} - ${capitalize(parts.slice(-1)[0])}`
    } catch (err) {
      console.error('Could not generate the title return default')
      return baseTitle
    }
  }

  useEffect(() => {
    document.location && baseTitle && (document.title = getTitle())
  })
}
