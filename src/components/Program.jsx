import React, { useState } from 'react';
import { useApp } from '../App.jsx';
import { initiatePayment } from '../utils/api.js';

const WEEKS = [
  { w: 1, title: 'Основи харчування', tag: 'Відкрито', locked: false,
    lessons: ['Що таке справжнє харчування', 'Макро- та мікроелементи', 'Як скласти раціон за 30 хв'] },
  { w: 2, title: 'Сон та відновлення', tag: 'Відкрито', locked: false,
    lessons: ['Цикли сну та що відбувається вночі', 'Як покращити якість сну', 'Вечірній ритуал'] },
  { w: 3, title: 'Фізична активність', locked: true,
    lessons: ['Кардіо vs сила', 'Мінімально ефективна доза руху', 'Відновлення'] },
  { w: 4, title: 'Стрес і нервова система', locked: true,
    lessons: ['Хронічний стрес: механізм', 'Адаптогени', 'Дихальні практики'] },
  { w: 5, title: 'Гормональний баланс', locked: true,
    lessons: ['Ключові гормони', 'Харчування для гормонів', 'Лабораторна діагностика'] },
  { w: 6, title: 'Кишківник та мікробіом', locked: true,
    lessons: ['Мікробіом: другий мозок', 'Пробіотики', 'Відновлення кишкового бар\'єру'] },
  { w: 7, title: 'Детоксикація', locked: true,
    lessons: ['Як печінка виводить токсини', 'Продукти підтримки', 'Детокс без голодування'] },
  { w: 8, title: 'Звички на все життя', locked: true,
    lessons: ['Нейронаука звичок', 'Персональна система здоров\'я', 'Фінальний протокол'] },
];

export default function Program() {
  const { openForm } = useApp();
  const [open, setOpen] = useState(0);
  const [paying, setPaying] = useState(false);

  const buy = async () => {
    setPaying(true);
    try { await initiatePayment(); } catch { alert('Помилка оплати. Спробуйте ще раз.'); }
    finally { setPaying(false); }
  };

  return (
    <section id="program" className="py-20 lg:py-28 bg-sky">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left — heading + buy */}
          <div>
            <p className="section-label mb-4">Програма курсу</p>
            <h2 className="display-heading text-4xl md:text-5xl lg:text-6xl mb-6">
              8 тижнів до<br />
              <span className="text-yellow">системи<span className="text-navy">.</span></span>
            </h2>
            <p className="text-muted-dark font-sans text-base leading-relaxed mb-8 max-w-sm">
              Перші 2 тижні відкриті — переконайтесь у якості перед покупкою.
            </p>

            {/* Price card */}
            <div className="card-navy p-7 mb-4">
              <p className="text-white/50 text-xs font-sans mb-2">Повний доступ</p>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-display font-bold text-4xl text-yellow">1 499 ₴</span>
                <span className="text-white/30 line-through text-lg font-sans">2 499 ₴</span>
              </div>
              <p className="text-white/50 text-xs font-sans mb-5">Доступ одразу після оплати</p>
              <div className="space-y-2.5">
                <button onClick={buy} disabled={paying}
                        className="btn-yellow w-full justify-center py-3.5 text-base">
                  {paying ? 'Завантаження...' : '→ Придбати курс'}
                </button>
                <button onClick={openForm}
                        className="w-full border border-white/20 text-white font-sans text-sm
                                   py-3.5 rounded-full hover:bg-white/10 transition-colors">
                  Отримати консультацію
                </button>
              </div>
              <p className="text-white/30 text-xs font-sans text-center mt-3">
                Безпечна оплата · WayForPay
              </p>
            </div>

            {/* Goal bar */}
            <div className="card px-5 py-4 flex items-center justify-between gap-4">
              <span className="text-xs text-muted font-sans">Моя ціль</span>
              <div className="flex-1 h-1 bg-sky rounded-full overflow-hidden">
                <div className="w-2/5 h-full bg-yellow rounded-full"/>
              </div>
              <span className="pill-yellow text-[10px]">Здоров'я ✦</span>
            </div>
          </div>

          {/* Right — module list */}
          <div>
            <div className="space-y-2">
              {WEEKS.map((m, i) => (
                <div key={m.w}
                     className={`rounded-2xl border overflow-hidden transition-all duration-200
                                 ${m.locked ? 'border-navy/5 bg-white/50' : 'border-navy/8 bg-white shadow-card'}`}>
                  <button
                    onClick={() => !m.locked && setOpen(open === i ? -1 : i)}
                    disabled={m.locked}
                    className="w-full flex items-center gap-3 px-4 py-3.5 text-left"
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-display font-bold shrink-0
                                     ${m.locked ? 'bg-sky text-muted' : 'bg-navy text-yellow'}`}>
                      {m.locked ? '🔒' : m.w}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`font-sans font-semibold text-sm ${m.locked ? 'text-muted' : 'text-navy'}`}>
                          Тиждень {m.w}: {m.title}
                        </span>
                        {m.tag && <span className="pill-yellow text-[10px]">{m.tag}</span>}
                      </div>
                    </div>
                    {!m.locked && (
                      <svg className={`w-3.5 h-3.5 text-muted shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                           fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                      </svg>
                    )}
                  </button>
                  {!m.locked && open === i && (
                    <div className="px-4 pb-4 pt-1 border-t border-navy/5">
                      <ul className="space-y-1.5">
                        {m.lessons.map(l => (
                          <li key={l} className="flex items-center gap-2 text-xs font-sans text-muted-dark">
                            <span className="w-1 h-1 rounded-full bg-yellow shrink-0"/>
                            {l}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
