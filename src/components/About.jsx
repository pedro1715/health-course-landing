import React from 'react';
import { useApp } from '../App.jsx';

const CREDS = [
  '🏥 Лікар вищої категорії, 12 років практики',
  '🎓 НМУ ім. О.О. Богомольця, Київ',
  '🌿 Сертифікований нутриціолог (INLPTA)',
  '🔬 Гастроентерологія та функціональне харчування',
  '📖 Автор 3 наукових публікацій',
  '🏆 Спікер міжнародних конференцій',
];

export default function About() {
  const { openForm } = useApp();

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Top headline */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-14">
          <div>
            <p className="section-label mb-4">Про лікаря</p>
            <h2 className="display-heading text-4xl md:text-5xl lg:text-6xl">
              Бажаємо вам<br />
              здорового та<br />
              <span className="text-yellow">щасливого <span className="text-navy">💚</span></span>
              <span className="text-navy"> життя.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-4">
            <p className="text-muted-dark font-sans text-base leading-relaxed">
              Підкоріть цілі здоров'я — крок за кроком, з фахівцем, якому можна довіряти.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="pill">Пн–Пт: 9:00–18:00</span>
              <span className="pill">+38 (050) 123-45-67</span>
              <span className="pill">info@health-course.com.ua</span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-8 items-start">

          {/* Photo + badges */}
          <div className="relative">
            <div className="rounded-4xl overflow-hidden aspect-[3/4] shadow-deep">
              <img src="/doctor-photo.svg" alt="Юлія Негрієнко" className="w-full h-full object-cover object-top"/>
            </div>

            {/* Experience */}
            <div className="card absolute top-5 -right-4 px-4 py-3 text-center shadow-float">
              <div className="font-display font-bold text-3xl text-navy">12</div>
              <div className="text-xs text-muted font-sans leading-tight">років<br/>практики</div>
            </div>

            {/* Recovery */}
            <div className="card-yellow absolute -bottom-4 left-4 right-4 px-5 py-4 flex items-center justify-between shadow-float">
              <div>
                <div className="font-display font-bold text-2xl text-navy">98%</div>
                <div className="text-xs text-navy/60 font-sans">рекомендують курс</div>
              </div>
              <div className="font-display font-bold text-2xl text-navy">1200+</div>
              <div className="text-right">
                <div className="text-xs text-navy/60 font-sans">пацієнтів</div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:pt-4">
            <h3 className="display-heading text-4xl lg:text-5xl mb-2">
              Юлія<br /><span className="text-yellow">Негрієнко<span className="text-navy">.</span></span>
            </h3>
            <p className="pill-dark mb-6 inline-flex">Лікар · Нутриціолог · Гастроентеролог</p>

            <p className="text-muted-dark font-sans leading-relaxed mb-4">
              Понад 12 років я працюю практикуючим лікарем і щодня спостерігаю,
              як люди шукають швидкі рішення замість того, щоб зрозуміти свій організм.
            </p>
            <p className="text-muted-dark font-sans leading-relaxed mb-8">
              Цей курс — квінтесенція всього, що я знаю про здоров'я.
              Доказова медицина, перевірені протоколи та практичні інструменти
              для довготривалого результату.
            </p>

            {/* Creds list */}
            <div className="space-y-2.5 mb-8">
              {CREDS.map(c => (
                <div key={c} className="flex items-center gap-3 text-sm font-sans text-muted-dark">
                  <span className="text-base">{c.split(' ')[0]}</span>
                  <span>{c.slice(c.indexOf(' ') + 1)}</span>
                </div>
              ))}
            </div>

            <button onClick={openForm} className="btn-dark">
              → Записатися до Юлії
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
