import stiLogo from './sti_logo.png'
import './index.css'

export type userProps = {
    first_name?: string;
    last_name?: string;
    sciper?: string;
    photo_url?: string;
}

type AvatarProps = {
  user?: userProps;
  logOutUrl?: string;
  logoUrl?: string;
  logoAltText?: string
}

export function Avatar ({ user = {}, logOutUrl, logoUrl, logoAltText }: AvatarProps) {
  const getBackGroundImage = () => `url('${user.photo_url}')`
  const avatarLogo = logoUrl || stiLogo
  const avatarLogoAltText = logoAltText || 'Logo STI, EPFL school of engineering'

  function handleLogout () {
    if (logOutUrl) {
      // Remove cached stuff in localstorage before leaving.
      window.localStorage.clear()
      window.location.assign(logOutUrl)
    }
  }

  return (
    <nav className='nav-lang nav-lang-short ml-auto'>
      <div className='avatar-teaser'>
        <div style={{ paddingRight: '10px' }}>
          <img className='avatar-logo' src={avatarLogo} alt={avatarLogoAltText} />
        </div>
        <a
          className='avatar-teaser-img-placeholder'
          href={`https://people.epfl.ch/${user.sciper}`}
          rel='noopener noreferrer'
          target='_blank'
        >
          <div style={{ backgroundImage: getBackGroundImage() }} className='avatar_image' />
        </a>
        <div className='avatar-teaser-body'>
          <p>{user.last_name}, {user.first_name}</p>
        </div>
        <div style={{ color: '#fff' }}>
          <a className='btn btn-primary btn-sm' onClick={handleLogout}>logout</a>
        </div>
      </div>
    </nav>
  )
}
