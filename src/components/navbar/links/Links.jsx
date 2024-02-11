import Link from 'next/link';

export default function Links() {
  const NavLinks = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Kwatery', path: '/kwatery' },
    { id: 3, name: 'Galeria', path: '/galeria' },
    { id: 4, name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <div>
      {NavLinks.map((link) => (
        <Link href={link.path} key={link.id}>
          {link.name}
        </Link>
      ))}
    </div>
  );
}
