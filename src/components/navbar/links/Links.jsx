import NavLink from './navLink/NavLink';
import styles from './links.module.scss';

export default function Links() {
  const links = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Kwatery', path: '/kwatery' },
    { id: 3, name: 'Galeria', path: '/galeria' },
    { id: 4, name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.id} />
      ))}
    </div>
  );
}
