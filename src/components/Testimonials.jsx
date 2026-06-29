import React, { useState } from 'react';
import { useStaggerAnimation } from '../hooks/useScrollAnimation.js';

const Ecg = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 120 24" fill="none">
    <path d="M0,12 H22 L26,3 L30,21 L34,1 L38,23 L42,12 H60 L64,6 L68,18 L72,12 H120"
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const T = [
  { init: 'МК', name: 'Марина Коваленко', meta: '32 р., менеджер, Київ', result: '-8 кг за 2 місяці', text: 'Я пробувала безліч дієт, але завжди зривалась. Курс Юлії — перше, що дало мені реальне розуміння свого тіла. Вага пішла сама, без голодування.', bg: 'bg-olive', initBg: 'bg-lime', initText: 'text-olive' },
  { init: 'ОП', name: 'Олег Петренко', meta: '45 р., підприємець, Дніпро', result: 'Нормалізував тиск і сон', text: 'Після 40 почались проблеми з тиском і жахливий сон. За 6 тижнів навчився управляти стресом, поміняв харчування. Тиск нормалізувався, сплю 7–8 годин.', bg: 'bg-white', initBg: 'bg-coral', initText: 'text-white' },
  { init: 'АС', name: 'Анна Сидоренко', meta: '28 р., дизайнер, Одеса', result: 'Пішла хронічна втома', text: 'Постійна втома і туман у голові — думала, це норма. Виявилось, проблема в харчуванні та режимі. Вже на третьому тижні відчула різницю.', bg: 'bg-lime', initBg: 'bg-olive', initText: 'text-lime' },
  { init: 'НВ', name: 'Наталія Василенко', meta: '38 р., вчителька, Харків', result: 'Вирішила проблему з ШКТ', text: 'Здуття і дискомфорт після їжі переслідували роками. Юлія чітко пояснила, що відбувається, і дала покроковий план. За місяць стан кишківника суттєво покращився.', bg: 'bg-white', initBg: 'bg-warm-gray', initText: 'text-white' },
  { init: 'ДМ', name: 'Дарина Мельник', meta: '25 р., магістрантка, Львів', result: '-5 кг + розуміння свого тіла', text: 'Думала, що курс — це чергова дієта. Але тут все по-іншому: пояснюють ЧОМУ, а не просто що можна чи ні. Переключення мислення.', bg: 'bg-beige', initBg: 'bg-olive', initText: 'text-cream' },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className="w-3.5 h-3.5 text-coral fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, visibleItems } = useStaggerAnimation(T.length);
  const [exp, setExp] = useState(null);

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <p className="tag-coral mb-3">Відгуки студентів</p>
            <h2 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-semibold text-charcoal leading-[1.05]">
              Реальні<br />
              <span className="italic">результати</span>
              <Ecg className="inline-block ml-4 w-24 text-coral opacity-60 align-middle"/>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Stars/>
            <span className="text-charcoal font-semibold">5.0</span>
            <span className="text-warm-gray text-sm">· 127 відгуків</span>
          </div>
        </div>

        {/* Cards grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {T.map((t, i) => (
            <div key={t.name}
                 className={`rounded-3xl p-6 flex flex-col transition-all duration-700
                             ${t.bg} ${i < 2 ? 'shadow-card' : ''}
                             ${visibleItems.includes(i) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                 style={{ transitionDelay: `${i * 80}ms` }}>
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full ${t.initBg} flex items-center justify-center shrink-0`}>
                  <span className={`font-serif text-xs font-semibold ${t.initText}`}>{t.init}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-semibold text-sm ${t.bg === 'bg-olive' ? 'text-cream' : 'text-charcoal'}`}>
                    {t.name}
                  </div>
                  <div className={`text-xs ${t.bg === 'bg-olive' ? 'text-cream/50' : 'text-warm-gray'}`}>
                    {t.meta}
                  </div>
                </div>
                <Stars/>
              </div>

              {/* Result */}
              <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 self-start
                              ${t.bg === 'bg-olive' ? 'bg-lime/20 text-lime' :
                                t.bg === 'bg-lime' ? 'bg-olive/15 text-olive' :
                                'bg-coral/10 text-coral'}`}>
                <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                {t.result}
              </div>

              <p className={`text-sm leading-relaxed flex-1 ${exp !== i ? 'line-clamp-3' : ''}
                            ${t.bg === 'bg-olive' ? 'text-cream/70' : t.bg === 'bg-lime' ? 'text-olive/70' : 'text-charcoal/70'}`}>
                "{t.text}"
              </p>
              <button onClick={() => setExp(exp === i ? null : i)}
                      className={`text-xs mt-2 text-left hover:underline ${t.bg === 'bg-olive' ? 'text-lime/60' : 'text-coral/70'}`}>
                {exp === i ? 'Згорнути' : 'Читати'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
