'use client';
import Link from 'next/link';
import styles from './navlink.module.scss';
import { usePathname } from 'next/navigation';

export default function NavLink({ item }) {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${pathName === item.path && 'active'}`}
    >
      {item.name}
    </Link>
  );
}
