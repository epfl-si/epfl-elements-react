type LanguageProps = {
  active?: string;
  enLink?: string;
  frLink?: string
}

export function Language ({ active, enLink, frLink }: LanguageProps) {
  return (
    <nav className='nav-lang nav-lang-short ml-auto'>
      <ul>
        <li>
          {active === 'EN'
            ? <a href={enLink} aria-label='Français'>FR</a>
            : <span className='active' aria-label='Français'>FR</span>}
        </li>
        <li>
          {active === 'FR'
            ? <a href={frLink} aria-label='English'>EN</a>
            : <span className='active' aria-label='English'>EN</span>}
        </li>
      </ul>
    </nav>
  )
}
