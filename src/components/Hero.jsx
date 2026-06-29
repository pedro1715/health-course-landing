import React from 'react';
import { useApp } from '../App.jsx';

const AVATARS = [
  { bg: 'bg-navy',   label: 'МК' },
  { bg: 'bg-yellow', label: 'ОП' },
  { bg: 'bg-green',  label: 'АС' },
];

const MODULES = ['Харчування 🌿', 'Сон 💤', 'Рух 🏃', 'Стрес 🧠'];

export default function Hero() {
  const { openForm } = useApp();
  const scroll = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen bg-sky overflow-hidden pt-16 flex items-center">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full py-12 md:py-20">

        {/* ── Desktop grid ── */}
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-10 xl:gap-16 items-center">

          {/* LEFT ── */}
          <div>

            {/* Top badge */}
            <div className="flex items-center gap-2 mb-8">
              <span className="pill">Про курс</span>
              <button onClick={() => scroll('#program')}
                className="w-7 h-7 rounded-full bg-white border border-navy/10 flex items-center justify-center
                           hover:shadow-card transition-all text-muted-dark hover:text-navy text-xs">
                ↗
              </button>
            </div>

            {/* Main heading */}
            <h1 className="display-heading text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] mb-6 max-w-2xl">
              Спрости своє&nbsp;
              <span className="inline-flex items-baseline gap-2">
                <span className="text-[0.85em]">💚</span>
                здоров'я
              </span>
              <br />
              та&nbsp;
              <span className="inline-flex items-baseline gap-1">
                <span className="text-yellow text-[0.7em] leading-none">✦</span>
                добробут<span className="text-yellow">.</span>
              </span>
            </h1>

            {/* Sub */}
            <p className="text-muted-dark font-sans text-base leading-relaxed mb-8 max-w-md">
              Отримай персоналізований курс здоров'я,<br />
              розроблений під <strong className="text-navy font-semibold">твої унікальні потреби</strong>.
            </p>

            {/* CTA row */}
            <div className="flex items-center gap-4 mb-10">
              <button onClick={openForm} className="btn-circle-dark">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                </svg>
              </button>
              <button onClick={() => scroll('#program')}
                      className="text-sm font-sans font-medium text-navy hover:text-muted-dark transition-colors">
                → Почати курс!
              </button>
            </div>

            {/* Stats badge (yellow card) */}
            <div className="card-yellow inline-flex items-center gap-4 px-5 py-4">
              <div className="flex -space-x-2">
                {AVATARS.map((a, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-yellow ${a.bg}
                                           flex items-center justify-center text-[10px] font-semibold
                                           ${a.bg === 'bg-yellow' ? 'text-navy' : 'text-white'}`}>
                    {a.label}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-yellow bg-white
                               flex items-center justify-center text-[10px] font-bold text-navy">
                  +
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-navy text-xl">500+</span>
                <p className="text-navy/70 text-xs font-sans leading-tight">Людей проходять<br/>курс прямо зараз</p>
              </div>
            </div>
          </div>

          {/* RIGHT ── photo + floating cards */}
          <div className="relative mt-8 lg:mt-0">

            {/* "Отримай" white card — top */}
            <div className="card absolute -top-4 left-0 lg:-left-12 z-10 px-4 py-3 max-w-[220px]">
              <p className="text-xs text-muted font-sans mb-0.5">Про курс</p>
              <p className="text-sm font-sans text-navy leading-snug">
                Отримай протоколи, персоналізовані під твої потреби
              </p>
            </div>

            {/* Doctor photo card */}
            <div className="relative rounded-4xl overflow-hidden aspect-[3/4] max-w-sm mx-auto shadow-deep">
              <img src="/doctor-photo.svg" alt="Юлія Негрієнко"
                   className="w-full h-full object-cover object-top"/>

              {/* Bottom overlay CTA */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy/80 to-transparent p-5">
                <button onClick={openForm}
                        className="w-full bg-yellow text-navy font-sans font-semibold text-sm
                                   py-3 px-5 rounded-2xl flex items-center justify-between
                                   hover:brightness-105 transition-all">
                  Розблокуй персоналізований план
                  <span className="w-7 h-7 rounded-xl bg-navy/20 flex items-center justify-center text-navy">→</span>
                </button>
              </div>
            </div>

            {/* Modules floating card — right side */}
            <div className="card absolute top-1/3 -right-4 lg:-right-10 z-10 px-4 py-4 w-44">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-sans font-semibold text-navy">Модулі</span>
                <button className="btn-circle-outline w-6 h-6 text-xs">+</button>
              </div>
              <div className="space-y-1.5">
                {MODULES.map(m => (
                  <div key={m} className="flex items-center justify-between py-1 border-b border-navy/5 last:border-0">
                    <span className="text-xs font-sans text-muted-dark">{m}</span>
                    <span className="text-[10px] text-muted">→</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience badge */}
            <div className="card absolute -bottom-4 left-4 lg:-left-4 z-10 px-4 py-3 text-center">
              <div className="font-display font-bold text-3xl text-navy">12</div>
              <div className="text-xs text-muted font-sans leading-tight">років<br/>практики</div>
            </div>
          </div>
        </div>

        {/* ── Mobile photo (shown below text on small screens) ── */}
        <div className="lg:hidden mt-10 relative max-w-xs mx-auto">
          <div className="rounded-4xl overflow-hidden aspect-[3/4] shadow-deep">
            <img src="/doctor-photo.svg" alt="Юлія Негрієнко" className="w-full h-full object-cover object-top"/>
          </div>
          <div className="card-yellow inline-flex items-center gap-3 px-4 py-3 absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="font-display font-bold text-navy text-lg">500+</span>
            <span className="text-navy/70 text-xs">студентів пройшли курс</span>
          </div>
        </div>
      </div>
    </section>
  );
}
