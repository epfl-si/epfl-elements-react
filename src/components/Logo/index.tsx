
import 'epfl-elements/dist/css/elements.min.css'

const baseUrl = 'https://www.epfl.ch/'
const logoUrl = `${baseUrl}/campus/services/website//wp-content/themes/wp-theme-2018/assets/svg/epfl-logo.svg`

export function Logo () {
  return (
    <a className='logo' href={`${baseUrl}en/`}>
      <img
        src={`${logoUrl}?refresh=now`}
        alt='Logo EPFL, École polytechnique fédérale de Lausanne'
        className='img-fluid'
      />
    </a>
  )
}
