'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.scss';

const NavLinks = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Kwatery', path: '/kwatery' },
  { id: 3, name: 'Galeria', path: '/galeria' },
  { id: 4, name: 'Kontakt', path: '/kontakt' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path) => path === pathname;

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
                <Link
                  href={link.path}
                  className={isActive(link.path) ? styles.active : ''}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
