import PropTypes from 'prop-types';
import { Inter } from 'next/font/google';
import '../styles/globals.scss';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'RoomWork',
  description: 'Kwatery / Pokoje pracownicze do wynajęcia.',
};

// EsLint: naprawienie błędu z przekazywaniem brakiem walidacji props
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Navbar />
        </nav>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
