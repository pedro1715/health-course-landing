import React from 'react';
import { useApp } from '../App.jsx';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation.js';

const CREDS = [
  { icon: '🏥', text: 'Лікар вищої категорії, 12 років практики' },
  { icon: '🎓', text: 'НМУ ім. О.О. Богомольця, Київ' },
  { icon: '🌿', text: 'Сертифікований нутриціолог (INLPTA, 2018)' },
  { icon: '🔬', text: 'Гастроентерологія та функціональне харчування' },
  { icon: '📖', text: 'Автор 3 наукових публікацій' },
  { icon: '🏆', text: 'Спікер міжнародних медичних конференцій' },
];

export default function About() {
  const { openForm } = useApp();
  const { ref: headRef, isVisible } = useScrollAnimation();
  const { ref: credRef, visibleItems } = useStaggerAnimation(CREDS.length);

  return (
    <section id="about" className="py-20 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── TOP: wishing headline ── */}
        <div ref={headRef} className={`mb-14 grid lg:grid-cols-2 gap-10 items-end transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <p className="tag-muted mb-4">Про автора курсу</p>
            <h2 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-semibold text-charcoal leading-[1.05]">
              Бажаємо вам<br />
              здорового та<br />
              <span className="italic text-coral">щасливого</span> життя
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="text-charcoal/60 text-lg leading-relaxed mb-4">
              Підкоріть цілі здоров'я — крок за кроком, з фахівцями,
              яким можна довіряти.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="bg-olive rounded-2xl px-6 py-4 text-cream text-sm leading-snug">
                <span className="block font-semibold">Пн – Пт: 9:00 – 18:00</span>
                <span className="text-cream/60">+38 (050) 123-45-67</span>
              </div>
              <div className="bg-white rounded-2xl px-6 py-4 text-sm leading-snug shadow-card">
                <span className="block font-semibold text-charcoal">Онлайн-консультація</span>
                <span className="text-warm-gray">info@health-course.com.ua</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN: photo + bio ── */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">

          {/* Photo collage */}
          <div className="relative mx-auto max-w-xs lg:max-w-none lg:mx-0 pb-6 lg:pb-0">
            {/* Main photo */}
            <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-hover">
              <img src="/doctor-photo.svg" alt="Юлія Негрієнко"
                   className="w-full h-full object-cover object-top"/>
            </div>
            {/* Experience float */}
            <div className="absolute top-4 -right-3 sm:-right-6 bg-lime rounded-2xl p-3 sm:p-4 shadow-float text-center">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-olive">12</div>
              <div className="text-olive/70 text-[10px] sm:text-xs leading-tight">років<br/>практики</div>
            </div>
            {/* Therapy float */}
            <div className="absolute bottom-8 lg:bottom-2 right-0 sm:-right-2 bg-white rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3
                            shadow-float flex items-center gap-2">
              <span className="text-xl">🌿</span>
              <div>
                <div className="text-xs font-semibold text-charcoal">Нутриціологія</div>
                <div className="text-[10px] text-warm-gray">Доказова медицина</div>
              </div>
            </div>
            {/* Recovery badge */}
            <div className="absolute top-1/2 -right-3 sm:-right-6 bg-coral rounded-2xl p-2.5 sm:p-3
                            shadow-float text-white text-center -translate-y-1/2 translate-x-0">
              <div className="font-serif text-lg sm:text-xl font-bold">98%</div>
              <div className="text-[9px] sm:text-[10px] opacity-80 leading-tight">Рекомендують<br/>курс</div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 className="font-serif text-4xl lg:text-5xl font-semibold text-charcoal mb-6 leading-tight">
              Юлія<br /><span className="italic text-coral">Негрієнко</span>
            </h3>

            <p className="text-charcoal/70 leading-relaxed mb-4">
              Понад 12 років я працюю практикуючим лікарем і щодня спостерігаю,
              як люди шукають швидкі рішення — дієти, добавки, таблетки —
              замість того, щоб зрозуміти свій організм і змінити систему.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              Цей курс — квінтесенція всього, що я знаю про здоров'я.
              Доказова медицина, перевірені протоколи та практичні інструменти,
              які справді змінюють якість життя.
            </p>

            {/* Credentials */}
            <div ref={credRef} className="space-y-3 mb-8">
              {CREDS.map((c, i) => (
                <div key={c.text}
                     className={`flex items-center gap-3 transition-all duration-500 ${visibleItems.includes(i) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
                     style={{ transitionDelay: `${i * 60}ms` }}>
                  <span className="text-lg shrink-0">{c.icon}</span>
                  <span className="text-sm text-charcoal/70">{c.text}</span>
                </div>
              ))}
            </div>

            <button onClick={openForm} className="btn-coral">
              Записатися на курс →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
