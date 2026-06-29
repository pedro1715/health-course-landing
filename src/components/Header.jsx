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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-cream/95 backdrop-blur-sm shadow-card' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center h-16 md:h-20 gap-8">

        {/* Logo */}
        <a href="/" className="flex items-center gap-1.5 shrink-0">
          <span className="font-serif text-xl font-semibold text-charcoal tracking-tight">
            Юлія Негрієнко
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-coral mb-2 shrink-0" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {NAV.map(n => (
            <a key={n.href} href={n.href} onClick={e => go(e, n.href)}
               className="text-sm text-charcoal/70 hover:text-charcoal transition-colors duration-200 font-medium">
              {n.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
          <button onClick={openForm} className="btn-coral text-sm py-2.5 px-5">
            Записатися
          </button>
          <button onClick={openForm} aria-label="Написати"
            className="w-9 h-9 rounded-full border border-charcoal/20 flex items-center justify-center
                       hover:border-coral hover:text-coral transition-colors text-charcoal/60">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </button>
        </div>

        {/* Burger */}
        <button onClick={() => setMenuOpen(v => !v)} className="md:hidden ml-auto p-1" aria-label="Меню">
          <div className="flex flex-col gap-1.5">
            <span className={`block w-5 h-0.5 bg-charcoal transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
            <span className={`block w-5 h-0.5 bg-charcoal transition-all ${menuOpen ? 'opacity-0' : ''}`}/>
            <span className={`block w-5 h-0.5 bg-charcoal transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-cream/98 ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
        <nav className="px-5 py-4 flex flex-col gap-1">
          {NAV.map(n => (
            <a key={n.href} href={n.href} onClick={e => go(e, n.href)}
               className="text-base font-medium text-charcoal py-3 border-b border-beige last:border-0">
              {n.label}
            </a>
          ))}
          <button onClick={() => { setMenuOpen(false); openForm(); }} className="btn-coral mt-3 w-full justify-center">
            Записатися
          </button>
        </nav>
      </div>
    </header>
  );
}
