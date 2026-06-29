import React from 'react';
import { useApp } from '../App.jsx';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';

/* ECG heartbeat decoration */
const Ecg = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 160 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,14 H30 L35,4 L40,24 L45,1 L50,27 L55,14 H80 L85,7 L90,21 L95,14 H160"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AVATARS = ['МК', 'ОП', 'АС', 'НВ'];

export default function Hero() {
  const { openForm } = useApp();
  const { ref, isVisible } = useScrollAnimation(0.05);

  const scrollTo = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen bg-cream overflow-hidden pt-20">

      {/* ── Subtle texture dots ── */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
           style={{ backgroundImage: 'radial-gradient(#2A3528 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-12 pb-20 lg:pt-16">

        {/* ───── TOP ROW ───── */}
        <div className="grid lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-8 items-start mb-8">

          {/* Left column — avatar + small photo */}
          <div
            ref={ref}
            className={`hidden lg:flex flex-col gap-5 pt-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            {/* Avatar cluster */}
            <div className="flex flex-col items-start gap-2">
              <div className="flex -space-x-3">
                {AVATARS.map((a, i) => (
                  <div key={a} className={`w-9 h-9 rounded-full border-2 border-cream flex items-center justify-center
                                           text-xs font-semibold text-white
                                           ${['bg-olive','bg-coral','bg-olive-light','bg-warm-gray'][i]}`}>
                    {a}
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full border-2 border-cream bg-lime flex items-center justify-center text-olive text-xs font-bold">+</div>
              </div>
              <p className="text-xs text-warm-gray leading-tight max-w-[120px]">Стати<br/>студентом</p>
            </div>

            {/* Small photo card */}
            <div className="relative w-44 h-36 rounded-2xl overflow-hidden shadow-card group">
              <img src="/doctor-photo.svg" alt="" className="w-full h-full object-cover object-top scale-150 -translate-y-4"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/>
              <div className="absolute bottom-3 left-3">
                <span className="text-[10px] bg-lime text-olive font-semibold px-2 py-0.5 rounded-full">
                  Здоров'я
                </span>
              </div>
            </div>
          </div>

          {/* Center — main heading */}
          <div className={`text-center lg:text-left transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="tag-coral mb-3 text-xs justify-center lg:justify-start">
              Авторський онлайн-курс • 2025
            </p>
            <h1 className="font-serif font-semibold leading-[1.05] text-charcoal
                           text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-0">
              Елегантний<br />
              <span className="italic text-olive">шлях до</span><br />
              <span className="relative inline-block">
                здоров'я
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-lime rounded-full opacity-70"/>
              </span>
            </h1>

            {/* ECG line under heading */}
            <div className="mt-5 mb-6 flex items-center justify-center lg:justify-start gap-3">
              <Ecg className="w-36 text-coral opacity-70"/>
              <span className="text-xs text-warm-gray font-medium">Юлія Негрієнко</span>
            </div>

            <p className="text-charcoal/60 text-base max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
              Перш ніж змінювати все — давайте розберемось, що справді важливо.
              Харчування, сон, рух та спокій — кроками, що тримаються.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
              <button onClick={openForm} className="btn-coral text-base px-8 py-4 gap-3">
                Записатися
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                </svg>
              </button>

              <button onClick={() => scrollTo('#program')}
                      className="flex items-center gap-3 text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors">
                <span className="btn-circle flex-shrink-0">
                  <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </span>
                Переглянути програму
              </button>
            </div>
          </div>

          {/* Right — main doctor photo */}
          <div className={`hidden lg:block transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative w-64 xl:w-72">
              <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-hover">
                <img src="/doctor-photo.svg" alt="Юлія Негрієнко" className="w-full h-full object-cover object-top"/>
              </div>
              {/* Floating lime badge */}
              <div className="absolute -bottom-4 -left-6 w-24 h-24 rounded-full bg-lime
                              flex flex-col items-center justify-center shadow-float z-10">
                <span className="font-serif text-2xl font-bold text-olive leading-none">1499</span>
                <span className="text-olive text-[10px] font-semibold leading-tight text-center px-1">₴ курс</span>
              </div>
            </div>
          </div>
        </div>

        {/* ───── BOTTOM STATS ROW ───── */}
        <div className={`mt-12 lg:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {[
            { v: '500+', l: 'студентів' },
            { v: '8',    l: 'тижнів' },
            { v: '93%',  l: 'досягають мети' },
            { v: '12+',  l: 'протоколів' },
          ].map(s => (
            <div key={s.l} className="bg-white rounded-2xl px-5 py-4 text-center shadow-card">
              <div className="font-serif text-2xl font-bold text-charcoal">{s.v}</div>
              <div className="text-xs text-warm-gray mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
