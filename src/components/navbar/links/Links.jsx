'use client';
import NavLink from './navLink/NavLink';
import styles from './links.module.scss';
import { useState } from 'react';

const links = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Kwatery', path: '/kwatery' },
  { id: 3, name: 'Galeria', path: '/galeria' },
  { id: 4, name: 'Kontakt', path: '/kontakt' },
];

export default function Links() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.id} />
        ))}
      </div>
      <button className={styles.menuBtn} onClick={() => setOpen(!open)}>
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.id} />
          ))}
        </div>
      )}
    </div>
  );
}
