import Link from 'next/link';
import MenuMobile from '../../public/icons/hamburger-menu.svg'
import styles from './header.module.scss'

const Header = () => {
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
    {
      link: '/contact',
      sub: 'Contact'
    },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={`${styles.logo} cursor-scale`}>TD</div>
        <ul className={styles.nav} role='list'>
          {
            menu.map((item: { link: string, sub: string }, i) => (
              <li className='cursor-scale' key={`link-${i}`}><Link href={item.link}>{item.sub}</Link></li>
            ))
          }
        </ul>
        <div className={styles.menuMobile}><MenuMobile /></div>
      </div>
    </div>
  );

};

export default Header;
