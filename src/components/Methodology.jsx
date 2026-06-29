import React from 'react';

const STEPS = [
  { n: '01', emoji: '🔍', title: 'Діагностика', body: 'Аналіз звичок, активності та симптомів.' },
  { n: '02', emoji: '📚', title: 'База знань', body: 'Зрозуміла фізіологія без зайвої складності.' },
  { n: '03', emoji: '📋', title: 'Особистий план', body: 'Протоколи, адаптовані до вашого ритму.' },
  { n: '04', emoji: '📈', title: 'Трекінг', body: 'Тижневий прогрес та коригування в реальному часі.' },
  { n: '05', emoji: '🌱', title: 'Система назавжди', body: 'Звички, які залишаться на все життя.' },
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-20 lg:py-28 bg-sky">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-14">
          <div>
            <p className="section-label mb-4">Методологія</p>
            <h2 className="display-heading text-4xl md:text-5xl">
              Як відбувається<br />
              <span className="text-yellow">трансформація<span className="text-navy">.</span></span>
            </h2>
          </div>
          <p className="text-muted-dark font-sans text-base leading-relaxed max-w-sm lg:pt-8">
            П'ять кроків від «щось пішло не так» до стабільної системи здоров'я,
            яка стає частиною вашого щоденного життя.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          {STEPS.map((s, i) => (
            <div key={s.n}
                 className={`rounded-3xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-float
                             ${i === 2 ? 'bg-navy text-white' : 'bg-white'}`}>
              <div className={`text-3xl mb-4`}>{s.emoji}</div>
              <div className={`text-xs font-sans font-medium mb-2 ${i === 2 ? 'text-yellow' : 'text-muted'}`}>{s.n}</div>
              <h3 className={`font-display font-bold text-base mb-2 ${i === 2 ? 'text-white' : 'text-navy'}`}>{s.title}</h3>
              <p className={`text-xs font-sans leading-relaxed ${i === 2 ? 'text-white/60' : 'text-muted-dark'}`}>{s.body}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="card p-8 md:p-10 flex flex-col md:flex-row items-start gap-6">
          <span className="font-display text-6xl text-yellow leading-none shrink-0">"</span>
          <div>
            <p className="font-display text-xl md:text-2xl font-semibold text-navy leading-snug mb-3">
              Здоров'я — це не відсутність хвороб, а стан повного фізичного,
              психологічного та соціального благополуччя.
            </p>
            <span className="pill-dark">ВООЗ, 1946</span>
          </div>
        </div>
      </div>
    </section>
  );
}
