import React from 'react';
import { useApp } from '../App.jsx';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';

const Ecg = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 160 28" fill="none">
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
    <section id="hero" className="relative min-h-screen bg-cream overflow-hidden pt-16 md:pt-20">

      {/* Dot grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]"
           style={{ backgroundImage: 'radial-gradient(#2A3528 1px, transparent 1px)', backgroundSize: '28px 28px' }}/>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-10 md:py-14 lg:py-20">

        {/* ── DESKTOP: 3-column grid ── */}
        <div className="hidden lg:grid lg:grid-cols-[200px_1fr_260px] xl:grid-cols-[220px_1fr_290px] gap-8 items-start mb-10">

          {/* Left: avatars + small photo */}
          <div className={`flex flex-col gap-5 pt-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} ref={ref}>
            <div className="flex flex-col items-start gap-2">
              <div className="flex -space-x-3">
                {AVATARS.map((a, i) => (
                  <div key={a} className={`w-9 h-9 rounded-full border-2 border-cream flex items-center justify-center text-xs font-semibold text-white
                                           ${['bg-olive','bg-coral','bg-olive-light','bg-warm-gray'][i]}`}>{a}</div>
                ))}
                <div className="w-9 h-9 rounded-full border-2 border-cream bg-lime flex items-center justify-center text-olive text-xs font-bold">+</div>
              </div>
              <p className="text-xs text-warm-gray leading-tight">Стати<br/>студентом</p>
            </div>
            <div className="relative w-44 h-36 rounded-2xl overflow-hidden shadow-card">
              <img src="/doctor-photo.svg" alt="" className="w-full h-full object-cover object-top scale-150 -translate-y-4"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/>
              <span className="absolute bottom-3 left-3 text-[10px] bg-lime text-olive font-semibold px-2 py-0.5 rounded-full">Здоров'я</span>
            </div>
          </div>

          {/* Center: heading */}
          <div className={`text-center transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="tag-coral mb-4 justify-center text-xs">Авторський онлайн-курс · 2025</p>
            <h1 className="font-serif font-semibold leading-[1.05] text-charcoal text-6xl xl:text-7xl 2xl:text-8xl mb-0">
              Елегантний<br/>
              <span className="italic text-olive">шлях до</span><br/>
              <span className="relative inline-block">
                здоров'я
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-lime rounded-full opacity-70"/>
              </span>
            </h1>
            <div className="mt-5 mb-6 flex items-center justify-center gap-3">
              <Ecg className="w-32 text-coral opacity-70"/>
              <span className="text-xs text-warm-gray">Юлія Негрієнко</span>
            </div>
            <p className="text-charcoal/60 text-base max-w-md mx-auto mb-8 leading-relaxed">
              Перш ніж змінювати все — давайте розберемось, що справді важливо.
              Харчування, сон, рух та спокій — кроками, що тримаються.
            </p>
            <div className="flex flex-wrap items-center gap-3 justify-center">
              <button onClick={openForm} className="btn-coral text-base px-8 py-4 gap-3">
                Записатися
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                </svg>
              </button>
              <button onClick={() => scrollTo('#program')} className="flex items-center gap-2.5 text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors">
                <span className="btn-circle flex-shrink-0">
                  <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </span>
                Програма
              </button>
            </div>
          </div>

          {/* Right: main photo */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-hover">
                <img src="/doctor-photo.svg" alt="Юлія Негрієнко" className="w-full h-full object-cover object-top"/>
              </div>
              <div className="absolute -bottom-4 -left-6 w-24 h-24 rounded-full bg-lime flex flex-col items-center justify-center shadow-float z-10">
                <span className="font-serif text-2xl font-bold text-olive leading-none">1499</span>
                <span className="text-olive text-[10px] font-semibold">₴ курс</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE / TABLET layout ── */}
        <div className="lg:hidden">
          <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="tag-coral mb-3 text-xs">Авторський онлайн-курс · 2025</p>
            <h1 className="font-serif font-semibold leading-[1.05] text-charcoal text-4xl sm:text-5xl mb-4">
              Елегантний<br/>
              <span className="italic text-olive">шлях до</span><br/>
              <span className="relative inline-block">
                здоров'я
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-lime rounded-full opacity-70"/>
              </span>
            </h1>

            <div className="flex items-center gap-3 mb-5">
              <Ecg className="w-24 text-coral opacity-70"/>
              <span className="text-xs text-warm-gray">Юлія Негрієнко</span>
            </div>

            {/* Mobile: photo + price badge */}
            <div className="relative mb-6">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] max-h-72 shadow-hover">
                <img src="/doctor-photo.svg" alt="Юлія Негрієнко" className="w-full h-full object-cover object-top"/>
              </div>
              {/* Avatars overlay */}
              <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                <div className="flex -space-x-2">
                  {AVATARS.map((a, i) => (
                    <div key={a} className={`w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-semibold text-white
                                             ${['bg-olive','bg-coral','bg-olive-light','bg-warm-gray'][i]}`}>{a}</div>
                  ))}
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-lime flex items-center justify-center text-olive text-[10px] font-bold">+</div>
                </div>
                <span className="text-[10px] text-white bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">500+ студентів</span>
              </div>
              {/* Price badge */}
              <div className="absolute bottom-3 right-3 w-16 h-16 rounded-full bg-lime flex flex-col items-center justify-center shadow-float">
                <span className="font-serif text-lg font-bold text-olive leading-none">1499</span>
                <span className="text-olive text-[9px] font-semibold">₴ курс</span>
              </div>
            </div>

            <p className="text-charcoal/60 text-base leading-relaxed mb-6">
              Перш ніж змінювати все — давайте розберемось, що справді важливо.
              Харчування, сон, рух та спокій — кроками, що тримаються.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button onClick={openForm} className="btn-coral text-base px-8 py-4 gap-3 justify-center">
                Записатися
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                </svg>
              </button>
              <button onClick={() => scrollTo('#program')} className="btn-outline-olive text-base py-4 justify-center">
                Дивитись програму
              </button>
            </div>
          </div>
        </div>

        {/* ── Stats row (all screens) ── */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {[
            { v: '500+', l: 'студентів' },
            { v: '8',    l: 'тижнів' },
            { v: '93%',  l: 'досягають мети' },
            { v: '12+',  l: 'протоколів' },
          ].map(s => (
            <div key={s.l} className="bg-white rounded-2xl px-4 py-4 text-center shadow-card">
              <div className="font-serif text-2xl font-bold text-charcoal">{s.v}</div>
              <div className="text-xs text-warm-gray mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
