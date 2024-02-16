import Link from 'next/link';
import Links from './links/Links';
import styles from './navbar.module.scss';
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <span className={styles.logo}>RoomWork</span>
      </Link>
      <Links />
      <ThemeSwitcher />
    </div>
  );
}
