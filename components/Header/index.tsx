import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import MenuMobile from '../../public/icons/hamburger-menu.svg'
import CloseIcon from '../../public/icons/close-menu.svg'
import toggleScroll from '../../utils/toggleScroll';
import styles from './header.module.scss'

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  const menuMobileRef = useRef(null)
  const router = useRouter()
  const currentPath = router.asPath
  useOnClickOutside(menuMobileRef, () => setIsOpenMenu(false))

  useEffect(() => {
    toggleScroll(isOpenMenu)
  }, [isOpenMenu])

  const menu = [
    {
      link: '/',
      sub: 'Home'
    },
    {
      link: '/about',
      sub: 'About'
    },
    {
      link: '/skills',
      sub: 'Skills'
    },
    {
      link: '/projects',
      sub: 'Projects'
    },
  ]

  const openMenu = () => {
    setIsOpenMenu(true)
  }

  const closeMenu = () => {
    setIsOpenMenu(false)
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.shadow} ${isOpenMenu ? styles.show : styles.hide}`}></div>
      <div className={styles.wrapper}>
        <div className={`${styles.logo} cursor-scale`}>TD</div>
        <ul className={styles.navDesktop} role='list'>
          {
            menu.map((item: { link: string, sub: string }, i) => (
              <li className='cursor-scale' key={`link-${i}`}><Link href={item.link} className={currentPath === item.link ? styles.active : ''}>{item.sub}</Link></li>
            ))
          }
        </ul>
        <div className={`${styles.menuMobileIcon} ${!isOpenMenu ? styles.show : styles.hide}`} onClick={openMenu}><MenuMobile /></div>
        <div className={`${styles.closeIcon} ${isOpenMenu ? styles.show : styles.hide}`} onClick={closeMenu}>
          <CloseIcon />
        </div>
        <ul className={`${styles.navMobile} ${isOpenMenu ? styles.show : styles.hide}`} role='list' ref={menuMobileRef}>
          {
            menu.map((item: { link: string, sub: string }, i) => (
              <li className='cursor-scale' key={`link-${i}`} onClick={closeMenu}><Link href={item.link} className={currentPath === item.link ? styles.active : ''}>{item.sub}</Link></li>
            ))
          }
        </ul>
      </div>
    </div>
  );

};

export default Header;
