import React, { useState } from 'react';
import { useApp } from '../App.jsx';

const ITEMS = [
  { id: 1, emoji: '😴', title: 'Постійна втома', body: 'Прокидаєтесь знесиленими. Кава не рятує, до вечора — нуль енергії.' },
  { id: 2, emoji: '⚖️', title: 'Вага, яка не рухається', body: 'Дієти, обмеження, але вага повертається. Щось системно не так.' },
  { id: 3, emoji: '🧠', title: 'Туман у голові', body: 'Складно зосередитись, тривожність, перепади настрою без причини.' },
  { id: 4, emoji: '🫃', title: 'Проблеми з травленням', body: 'Здуття, дискомфорт після їжі — щодня і вже стало звичним.' },
];

export default function Problems() {
  const { openForm } = useApp();
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="problems" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <p className="section-label mb-4">Бібліотека здоров'я</p>
            <h2 className="display-heading text-4xl md:text-5xl lg:text-6xl mb-6">
              Ваш надійний<br />партнер у<br />
              <span className="text-yellow">здоров'ї<span className="text-navy">.</span></span>
            </h2>
            <p className="text-muted-dark font-sans text-base leading-relaxed mb-8 max-w-sm">
              Візьміть контроль, зробіть здоров'я своєю метою.
              Науково обґрунтований підхід, перевірений роками практики.
            </p>

            {/* Expandable list */}
            <div className="space-y-0 border-t border-navy/8">
              {ITEMS.map(item => (
                <div key={item.id} className="border-b border-navy/8">
                  <button
                    onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl w-7">{item.emoji}</span>
                      <span className="font-sans font-medium text-navy text-sm">{item.title}</span>
                    </div>
                    <span className={`w-6 h-6 rounded-full border border-navy/15 flex items-center justify-center
                                     text-muted text-xs transition-transform duration-200
                                     ${expanded === item.id ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${expanded === item.id ? 'max-h-24 pb-4' : 'max-h-0'}`}>
                    <p className="text-muted-dark text-sm font-sans leading-relaxed pl-10">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={openForm} className="btn-dark mt-8">
              → Дослідити курс
            </button>
          </div>

          {/* Right — big stat + yellow card */}
          <div className="flex flex-col gap-5">

            {/* Big stat */}
            <div className="card p-8">
              <div className="flex items-start justify-between mb-5">
                <span className="font-display font-bold text-7xl lg:text-8xl text-navy leading-none">1</span>
                <span className="pill mt-2">Статистика</span>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-display font-bold text-2xl text-yellow">з 5</span>
                <span className="font-display font-bold text-2xl text-navy">українців</span>
              </div>
              <p className="text-muted-dark text-sm font-sans leading-relaxed max-w-xs">
                відчувають хронічну втому та зниження якості
                життя через неправильний спосіб харчування
              </p>
            </div>

            {/* Yellow explore card */}
            <div className="card-yellow p-6 flex items-center justify-between">
              <div>
                <p className="font-sans text-xs text-navy/60 mb-1">Про курс</p>
                <p className="font-display font-bold text-xl text-navy">Побудуй систему<br/>здоров'я ✦</p>
              </div>
              <button onClick={openForm} className="btn-dark shrink-0">
                → Старт
              </button>
            </div>

            {/* Mini stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { v: '500+', l: 'студентів' },
                { v: '93%',  l: 'досягають мети' },
                { v: '12+',  l: 'протоколів' },
              ].map(s => (
                <div key={s.l} className="card p-4 text-center">
                  <div className="font-display font-bold text-xl text-navy">{s.v}</div>
                  <div className="text-[10px] text-muted font-sans mt-0.5 leading-tight">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
