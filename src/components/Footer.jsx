import React from 'react';

export default function Footer() {
  const go = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-xl bg-yellow flex items-center justify-center">
                <span className="text-navy text-xs font-display font-bold">ЮН</span>
              </div>
              <span className="font-display font-bold text-white text-lg">ЮН<span className="text-yellow">.</span></span>
            </div>
            <p className="text-white/50 text-sm font-sans leading-relaxed mb-5">
              Лікар · Нутриціолог · Гастроентеролог.<br />
              Здоров'я через науку та практику.
            </p>
            <div className="flex gap-2">
              {['Instagram', 'Telegram', 'YouTube'].map(s => (
                <a key={s} href="#" aria-label={s}
                   className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-white/50
                              hover:bg-yellow hover:text-navy transition-all text-xs font-sans font-medium">
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white/40 text-xs font-sans font-semibold uppercase tracking-widest mb-5">Розділи</h4>
            <ul className="space-y-3">
              {[['#problems','Здоров\'я'],['#methodology','Методологія'],['#about','Про лікаря'],
                ['#program','Програма'],['#testimonials','Відгуки']].map(([h, l]) => (
                <li key={h}>
                  <button onClick={() => go(h)} className="text-sm font-sans text-white/50 hover:text-white transition-colors">
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Course */}
          <div>
            <h4 className="text-white/40 text-xs font-sans font-semibold uppercase tracking-widest mb-5">Курс</h4>
            <ul className="space-y-3 text-sm font-sans text-white/50">
              {['8 тижнів онлайн', '12 відео-модулів', 'Практичні завдання',
                'Закрита спільнота', 'Зворотній зв\'язок'].map(i => <li key={i}>{i}</li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/40 text-xs font-sans font-semibold uppercase tracking-widest mb-5">Контакти</h4>
            <ul className="space-y-3">
              <li><a href="mailto:info@health-course.com.ua"
                     className="text-sm font-sans text-white/50 hover:text-yellow transition-colors flex items-center gap-2">
                <span>📧</span> info@health-course.com.ua
              </a></li>
              <li><a href="tel:+380501234567"
                     className="text-sm font-sans text-white/50 hover:text-yellow transition-colors flex items-center gap-2">
                <span>📱</span> +38 (050) 123-45-67
              </a></li>
              <li className="text-sm font-sans text-white/50 flex items-center gap-2">
                <span>⏰</span> Пн–Пт: 9:00–18:00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-white/30 font-sans">© {new Date().getFullYear()} Юлія Негрієнко</span>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-white/30 hover:text-yellow transition-colors font-sans">Конфіденційність</a>
            <a href="#" className="text-xs text-white/30 hover:text-yellow transition-colors font-sans">Умови</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
