import PropTypes from 'prop-types';
import { Inter } from 'next/font/google';
import '../styles/globals.scss';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Providers from '@/components/providers/Providers';

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
    <html lang="pl">
      <body className={inter.className}>
        <Providers>
          <div className="container">
            <nav>
              <Navbar />
            </nav>
            <main>{children}</main>
            <footer>
              <Footer />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
