'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Switch } from '@nextui-org/react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <button
        onClick={() => {
          console.log('coucou');
          setTheme('light');
        }}
      >
        Light Mode
      </button>
      <button
        onClick={() => {
          console.log('coucou');
          setTheme('dark');
        }}
      >
        Dark Mode
      </button>
    </div>
  );
}
