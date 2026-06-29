import React from 'react';
import { useStaggerAnimation } from '../hooks/useScrollAnimation.js';

const STEPS = [
  { n: '01', title: 'Діагностика', body: 'Аналіз поточних звичок, рівня активності та симптомів. Формуємо відправну точку.' },
  { n: '02', title: 'База знань', body: 'Доступна фізіологія: як насправді працюють харчування, гормони, сон і стрес.' },
  { n: '03', title: 'Особистий план', body: 'Практичні протоколи харчування, руху та відновлення у вашому темпі.' },
  { n: '04', title: 'Трекінг', body: 'Тижневий прогрес та коригування плану в реальному часі.' },
  { n: '05', title: 'Система', body: 'Фінальний модуль: закріплюємо звички, щоб вони залишились назавжди.' },
];

const STATS = [
  { v: '24+',  l: 'Присвячених протоколів' },
  { v: '95%',  l: 'Швидше досягають мети' },
  { v: '500+', l: 'Задоволених студентів' },
];

export default function Methodology() {
  const { ref, visibleItems } = useStaggerAnimation(STEPS.length);

  return (
    <section id="methodology" className="bg-olive overflow-hidden">

      {/* ── Watermark ── */}
      <div className="relative py-16 lg:py-24 overflow-hidden">
        <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <span className="font-serif font-bold text-[18vw] text-lime/5 whitespace-nowrap leading-none">
            Wellness
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {STATS.map(s => (
              <div key={s.l} className="bg-olive-light rounded-2xl p-5 text-center">
                <div className="font-serif text-3xl lg:text-4xl font-bold text-lime">{s.v}</div>
                <div className="text-cream/50 text-xs mt-1 leading-tight">{s.l}</div>
              </div>
            ))}
          </div>

          {/* Heading */}
          <div className="mb-12 text-center">
            <p className="tag-lime mb-3 justify-center">Методологія</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.05]">
              Як відбувається<br />
              <span className="italic text-lime">трансформація</span>
            </h2>
          </div>

          {/* Steps */}
          <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {STEPS.map((s, i) => (
              <div key={s.n}
                   className={`rounded-3xl p-6 border border-cream/10 hover:border-lime/40
                               transition-all duration-700 hover:-translate-y-1
                               ${i === 2 ? 'bg-lime' : 'bg-olive-light/50'}
                               ${visibleItems.includes(i) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                   style={{ transitionDelay: `${i * 100}ms` }}>
                <div className={`font-serif text-4xl font-bold mb-4 ${i === 2 ? 'text-olive/30' : 'text-lime/20'}`}>
                  {s.n}
                </div>
                <h3 className={`font-serif text-lg font-semibold mb-2 ${i === 2 ? 'text-olive' : 'text-cream'}`}>
                  {s.title}
                </h3>
                <p className={`text-sm leading-relaxed ${i === 2 ? 'text-olive/70' : 'text-cream/60'}`}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-16 border-t border-cream/10 pt-12 flex flex-col sm:flex-row items-start gap-6">
            <div className="text-5xl text-lime/40 font-serif leading-none shrink-0">"</div>
            <div>
              <p className="font-serif text-xl md:text-2xl italic text-cream/80 leading-relaxed">
                Здоров'я — це не відсутність хвороб, а стан повного фізичного,
                психологічного та соціального благополуччя.
              </p>
              <p className="text-lime/60 text-sm mt-3">— ВООЗ, 1946</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
