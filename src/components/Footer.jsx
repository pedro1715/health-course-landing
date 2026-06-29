import React from 'react';

const SOCIAL = [
  { label: 'Instagram', href: '#', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
  { label: 'Telegram', href: '#', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg> },
  { label: 'YouTube', href: '#', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg> },
];

export default function Footer() {
  const go = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="font-serif text-xl font-semibold text-cream">Юлія Негрієнко</span>
              <span className="w-1.5 h-1.5 rounded-full bg-lime mb-2"/>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed mb-5">
              Лікар · Нутриціолог · Гастроентеролог.<br />
              Допомагаю повернути здоров'я через науку та практику.
            </p>
            <div className="flex gap-2">
              {SOCIAL.map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                   className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center
                              hover:bg-lime hover:text-olive transition-all duration-200">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-cream mb-4">Навігація</h4>
            <ul className="space-y-2.5">
              {[['#problems','Здоров\'я'],['#methodology','Методологія'],['#about','Про лікаря'],['#program','Програма'],['#testimonials','Відгуки']].map(([h,l]) => (
                <li key={h}>
                  <button onClick={() => go(h)} className="text-sm text-cream/50 hover:text-lime transition-colors">{l}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Course */}
          <div>
            <h4 className="text-sm font-semibold text-cream mb-4">Курс</h4>
            <ul className="space-y-2.5 text-sm text-cream/50">
              {['8 тижнів онлайн-навчання','12 відео-модулів','Практичні завдання','Закрита спільнота','Зворотній зв\'язок'].map(i => <li key={i}>{i}</li>)}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-sm font-semibold text-cream mb-4">Контакти</h4>
            <ul className="space-y-3">
              <li><a href="mailto:info@health-course.com.ua" className="text-sm text-cream/50 hover:text-lime transition-colors flex items-center gap-2"><span>📧</span>info@health-course.com.ua</a></li>
              <li><a href="tel:+380501234567" className="text-sm text-cream/50 hover:text-lime transition-colors flex items-center gap-2"><span>📱</span>+38 (050) 123-45-67</a></li>
              <li className="text-sm text-cream/50 flex items-center gap-2"><span>⏰</span>Пн–Пт: 9:00–18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/30">
          <span>© {new Date().getFullYear()} Юлія Негрієнко. Всі права захищено.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-lime transition-colors">Конфіденційність</a>
            <a href="#" className="hover:text-lime transition-colors">Умови</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
