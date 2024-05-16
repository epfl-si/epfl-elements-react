import { Avatar } from '../navigations/avatar'
import { Drawer } from '../Drawer/'
import { Logo } from '../Logo/'
import { Topmenu } from '../navigations/topmenu'

import 'epfl-elements/dist/css/elements.min.css'
import { DrawerInnerProps } from '../Drawer/'

type HeaderProps = {
  topMenuItems?: Array<any>;
  drawerContents?: DrawerInnerProps;
  user?: object;
  logOutUrl?: string;
  avatarLogoUrl?: string;
  avatarLogoAltText?: string
}


export function Header ({ topMenuItems, drawerContents, user, logOutUrl, avatarLogoUrl, avatarLogoAltText }: HeaderProps) {
  const getAvatar = () => <Avatar user={user} logOutUrl={logOutUrl} logoUrl={avatarLogoUrl} logoAltText={avatarLogoAltText} />

  return (
    <header role='banner' className='header'>
      {drawerContents && <Drawer contents={drawerContents} />}
      <Logo />
      <Topmenu menuItems={topMenuItems} />
      {user && getAvatar()}
    </header>
  )
}
