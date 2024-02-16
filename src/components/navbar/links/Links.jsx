'use client';
import NavLink from './navLink/NavLink';
import styles from './links.module.scss';
import { useState } from 'react';
import { RiMenuAddFill } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';

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
      <div className={styles.hamburgerContainer}>
        {open ? (
          <button className={styles.menuBtn} onClick={() => setOpen(!open)}>
            <IoMdClose width={50} height={50} />
          </button>
        ) : (
          <button className={styles.menuBtn} onClick={() => setOpen(!open)}>
            <RiMenuAddFill width={50} height={50} />
          </button>
        )}
      </div>
      {open && (
        <div className={`${styles.mobileLinks}  mobileLinks`}>
          {links.map((link) => (
            <NavLink item={link} key={link.id} />
          ))}
        </div>
      )}
    </div>
  );
}
