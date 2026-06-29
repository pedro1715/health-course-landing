import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import { useApp } from '../App.jsx';
import { initiatePayment } from '../utils/api.js';

const MODULES = [
  { week: 1, title: 'Основи здорового харчування', lessons: ['Що таке справжнє харчування', 'Макро- та мікроелементи: що, скільки, коли', 'Як скласти раціон за 30 хв/тиждень'], locked: false, tag: 'Відкрито' },
  { week: 2, title: 'Сон та відновлення організму', lessons: ['Цикли сну та що відбувається вночі', 'Як покращити якість сну за тиждень', 'Вечірній ритуал для глибокого відновлення'], locked: false, tag: 'Відкрито' },
  { week: 3, title: 'Фізична активність та рух', lessons: ['Кардіо vs сила: що обрати', 'Мінімально ефективна доза руху', 'Відновлення між тренуваннями'], locked: true },
  { week: 4, title: 'Стрес та нервова система', lessons: ['Хронічний стрес: механізм та наслідки', 'Адаптогени та нутрієнти підтримки', 'Дихальні практики для регуляції НС'], locked: true },
  { week: 5, title: 'Гормональний баланс', lessons: ['Ключові гормони та їх взаємодія', 'Харчування для гормонального балансу', 'Коли потрібна лабораторна діагностика'], locked: true },
  { week: 6, title: 'Кишківник та мікробіом', lessons: ['Мікробіом: другий мозок', 'Пробіотики, пребіотики та ферментовані продукти', 'Протокол відновлення кишкового бар\'єру'], locked: true },
  { week: 7, title: 'Детоксикація та очищення', lessons: ['Як печінка виводить токсини насправді', 'Продукти та протоколи підтримки детоксу', 'Детокс без голодування та шкоди'], locked: true },
  { week: 8, title: 'Здорові звички на все життя', lessons: ['Нейронаука звичок: петля звички', 'Персональна система здоров\'я', 'Фінальний протокол та наступні кроки'], locked: true },
];

export default function Program() {
  const { openForm } = useApp();
  const { ref, isVisible } = useScrollAnimation();
  const [open, setOpen] = useState(0);
  const [paying, setPaying] = useState(false);

  const buy = async () => {
    setPaying(true);
    try { await initiatePayment(); } catch { alert('Помилка оплати. Спробуйте ще раз.'); }
    finally { setPaying(false); }
  };

  return (
    <section id="program" className="py-20 lg:py-32 bg-warm-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        <div ref={ref} className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="tag-coral mb-3 justify-center">Програма курсу</p>
          <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-charcoal leading-[1.05] mb-4">
            8 тижнів до<br />
            <span className="italic">системи здоров'я</span>
          </h2>
          <p className="text-warm-gray text-lg max-w-xl mx-auto">
            Перші два тижні відкриті — переконайтесь у якості перед покупкою.
          </p>
        </div>

        {/* Goal bar */}
        <div className="flex items-center gap-4 mb-8 pb-4 border-b border-beige">
          <span className="text-sm text-warm-gray">Встанови ціль</span>
          <div className="flex-1 h-px bg-beige relative">
            <div className="absolute top-1/2 left-0 w-2/5 h-full bg-coral -translate-y-1/2"/>
          </div>
          <span className="text-sm font-medium text-coral bg-coral/10 px-3 py-1 rounded-full">
            Здоров'я
          </span>
        </div>

        {/* Module list */}
        <div className="space-y-2.5 mb-10">
          {MODULES.map((m, i) => (
            <div key={m.week}
                 className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                   m.locked ? 'border-beige/60 bg-warm-white opacity-75' : 'border-beige bg-white shadow-card'
                 }`}>
              <button
                className="w-full flex items-center gap-4 px-5 py-4 text-left"
                onClick={() => !m.locked && setOpen(open === i ? -1 : i)}
                disabled={m.locked}
              >
                <div className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center text-sm font-semibold ${
                  m.locked ? 'bg-beige text-warm-gray' : 'bg-olive text-lime'
                }`}>
                  {m.locked ? '🔒' : m.week}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-serif font-semibold text-charcoal text-[15px]">
                      Тиждень {m.week}: {m.title}
                    </span>
                    {m.tag && (
                      <span className="text-[10px] bg-lime text-olive font-semibold px-2 py-0.5 rounded-full">
                        {m.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-warm-gray text-xs mt-0.5">{m.lessons[0]} + ще {m.lessons.length - 1} уроки</p>
                </div>
                {!m.locked && (
                  <svg className={`w-4 h-4 text-warm-gray shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                       fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                  </svg>
                )}
              </button>

              {!m.locked && open === i && (
                <div className="px-5 pb-5 border-t border-beige pt-4">
                  <ul className="space-y-2">
                    {m.lessons.map(l => (
                      <li key={l} className="flex items-center gap-2.5 text-sm text-charcoal/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-coral shrink-0"/>
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Buy block */}
        <div className="bg-olive rounded-3xl overflow-hidden">
          <div className="px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="tag-lime mb-2 justify-center md:justify-start">Повний доступ</p>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-serif text-5xl font-bold text-lime">1 499 ₴</span>
                <span className="text-cream/40 line-through text-xl">2 499 ₴</span>
              </div>
              <p className="text-cream/60 text-sm">Доступ одразу після оплати · 8 тижнів матеріалів</p>
            </div>
            <div className="flex flex-col gap-3 items-center md:items-end">
              <button onClick={buy} disabled={paying} className="btn-lime text-base px-10 py-4 w-full md:w-auto justify-center">
                {paying ? 'Завантаження...' : 'Придбати курс →'}
              </button>
              <button onClick={openForm} className="btn-outline-cream text-sm py-3 w-full md:w-auto justify-center">
                Отримати консультацію
              </button>
              <p className="text-cream/40 text-xs text-center">
                Безпечна оплата через WayForPay
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
