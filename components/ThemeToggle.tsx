'use client';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('theme');
    if (saved === 'dark') setDark(true);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--bg', dark ? '#0b0c10' : '#fafafa');
    document.documentElement.style.setProperty('--fg', dark ? '#f5f5f6' : '#111318');
    document.documentElement.style.setProperty('--muted', dark ? '#9da1ac' : '#666b75');
    document.documentElement.style.setProperty('--line', dark ? '#272a33' : '#e6e7ea');
    document.documentElement.style.setProperty('--card', dark ? '#111319' : '#fff');
    document.documentElement.style.setProperty('--soft', dark ? '#1a1b2c' : '#f0f1ff');
    document.documentElement.style.setProperty('--shadow', dark ? '0 18px 60px rgba(0,0,0,.3)' : '0 18px 60px rgba(17,19,24,.08)');
    window.localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return [dark, setDark] as const;
}

export function ThemeToggle() {
  const [dark, setDark] = useTheme();
  return (
    <button className="filter" aria-label="Toggle theme" onClick={() => setDark(!dark)}>
      {dark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
