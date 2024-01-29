import Link from 'next/link';
import styles from './navbar.module.scss';

const NavLinks = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Kwatery', path: '/kwatery' },
  { id: 3, name: 'Galeria', path: '/galeria' },
  { id: 4, name: 'Kontakt', path: '/kontakt' },
];

export default function Navbar() {
  return (
    <nav>
      <div className={styles.navbar}>
        <Link href="/">
          <span className={styles.logo}>RoomWork</span>
        </Link>
        <ul>
          {NavLinks.map((link) => {
            return (
              <li key={link.id}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
