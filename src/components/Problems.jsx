import React from 'react';
import { useApp } from '../App.jsx';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';

const Ecg = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 120 24" fill="none">
    <path d="M0,12 H22 L26,3 L30,21 L34,1 L38,23 L42,12 H60 L64,6 L68,18 L72,12 H120"
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PAINS = [
  { n: '01', title: 'Постійна втома', body: 'Прокидаєтесь вже знесиленими. Кава рятує на годину — а потім знов нуль енергії.' },
  { n: '02', title: 'Вага стоїть', body: 'Обмежуєте, тренуєтесь, але цифра на вагах наче приросла. Щось не так.' },
  { n: '03', title: 'Туман у голові', body: 'Складно зосередитись, тривожність, перепади настрою без очевидних причин.' },
  { n: '04', title: 'Проблеми з ШКТ', body: 'Здуття, дискомфорт після їжі — щодня, і вже стало звичним фоном.' },
];

export default function Problems() {
  const { openForm } = useApp();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="problems" className="py-20 lg:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Editorial heading row */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-14">
          <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="tag-coral mb-4">Чи знайомо?</p>
            <h2 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-semibold text-charcoal leading-[1.05]">
              Ваш надійний<br />
              <span className="italic">партнер</span><br />
              у здоров'ї
            </h2>
          </div>
          <div className={`transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-4xl lg:text-5xl font-serif font-light text-warm-gray mb-3">
              Візьміть контроль,<br />зробіть здоров'я метою
            </p>
            <div className="flex items-center gap-3 mt-5">
              <Ecg className="w-28 text-coral opacity-60"/>
              <span className="text-sm text-warm-gray">Наукові методи доказової медицини</span>
            </div>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {PAINS.map((p, i) => (
            <div key={p.n}
                 className={`rounded-3xl p-7 transition-all duration-700 hover:shadow-hover
                             ${i === 0 ? 'bg-olive text-cream' : i === 2 ? 'bg-lime' : 'bg-white shadow-card'}`}
                 style={{ transitionDelay: `${i * 80}ms` }}>
              <div className={`text-5xl font-serif font-bold mb-5 opacity-20 ${i === 0 ? 'text-lime' : i === 2 ? 'text-olive' : 'text-charcoal'}`}>
                {p.n}
              </div>
              <h3 className={`font-serif text-xl font-semibold mb-3 ${i === 0 ? 'text-cream' : i === 2 ? 'text-olive' : 'text-charcoal'}`}>
                {p.title}
              </h3>
              <p className={`text-sm leading-relaxed ${i === 0 ? 'text-cream/70' : i === 2 ? 'text-olive/70' : 'text-warm-gray'}`}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Stat + CTA banner */}
        <div className="bg-olive rounded-3xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-baseline gap-4">
            <span className="font-serif text-7xl font-bold text-lime leading-none">1</span>
            <span className="font-serif text-3xl text-cream/60 italic">з 5</span>
            <p className="text-cream text-sm max-w-xs leading-relaxed">
              українців відчувають хронічну втому та зниження якості життя через
              неправильний спосіб харчування і режим
            </p>
          </div>
          <button onClick={openForm} className="btn-lime shrink-0">
            Хочу виправити це →
          </button>
        </div>
      </div>
    </section>
  );
}
