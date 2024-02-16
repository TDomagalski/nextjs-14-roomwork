'use client';
import { useTheme } from 'next-themes';
import { FiMoon } from 'react-icons/fi';
import { BsSun } from 'react-icons/bs';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === 'light' ? (
        <FiMoon size={25} cursor="pointer" onClick={() => setTheme('dark')} />
      ) : (
        <BsSun size={25} cursor="pointer" onClick={() => setTheme('light')} />
      )}
    </div>
  );
}
