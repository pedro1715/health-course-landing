import React, { useState, useEffect } from 'react';
import { useApp } from '../App.jsx';

const NAV = [
  { label: 'Здоров\'я', href: '#problems' },
  { label: 'Про лікаря', href: '#about' },
  { label: 'Програма', href: '#program' },
  { label: 'Відгуки', href: '#testimonials' },
];

export default function Header() {
  const { openForm } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-sky/95 backdrop-blur-md shadow-card' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center h-16 md:h-18 gap-10">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-xl bg-navy flex items-center justify-center">
            <span className="text-white text-xs font-display font-bold">ЮН</span>
          </div>
          <span className="font-display font-bold text-navy text-lg hidden sm:block">
            ЮН<span className="text-yellow">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 flex-1">
          {NAV.map(n => (
            <a key={n.href} href={n.href} onClick={e => go(e, n.href)}
               className="text-sm font-sans text-muted-dark hover:text-navy transition-colors duration-150">
              {n.label}
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
          <button onClick={openForm} className="pill text-navy/60 hover:text-navy cursor-pointer">
            info@health-course.com.ua
          </button>
          <button onClick={openForm} className="btn-dark">
            Записатися →
          </button>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setOpen(v => !v)} className="md:hidden ml-auto p-1" aria-label="Меню">
          <div className="flex flex-col gap-1.5">
            <span className={`block w-5 h-0.5 bg-navy transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}/>
            <span className={`block w-5 h-0.5 bg-navy transition-all ${open ? 'opacity-0' : ''}`}/>
            <span className={`block w-5 h-0.5 bg-navy transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}/>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-sky/98 backdrop-blur-md ${open ? 'max-h-80' : 'max-h-0'}`}>
        <nav className="px-5 py-4 flex flex-col gap-1">
          {NAV.map(n => (
            <a key={n.href} href={n.href} onClick={e => go(e, n.href)}
               className="text-base font-sans font-medium text-navy py-3 border-b border-navy/8 last:border-0">
              {n.label}
            </a>
          ))}
          <button onClick={() => { setOpen(false); openForm(); }} className="btn-dark mt-3 w-full justify-center">
            Записатися →
          </button>
        </nav>
      </div>
    </header>
  );
}
