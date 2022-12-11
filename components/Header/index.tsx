import Link from 'next/link';
import styles from './header.module.scss'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>TD</div>
        <ul className={styles.nav} role='list'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/about'>About</Link></li>
          <li><Link href='/skills'>Skills</Link></li>
          <li><Link href='/projects'>Projects</Link></li>
          <li><Link href='/contact'>Contact</Link></li>
        </ul>
      </div>
    </div>
  );

};

export default Header;
