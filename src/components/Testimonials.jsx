import React, { useState } from 'react';

const T = [
  { init: 'МК', name: 'Марина Коваленко', meta: '32 р., менеджер, Київ',
    result: '-8 кг за 2 місяці', rating: 5,
    text: 'Курс Юлії — перше, що дало мені реальне розуміння свого тіла. Вага пішла сама, без голодування і стресу.',
    bg: 'bg-navy', tc: 'text-white', mc: 'text-white/50' },
  { init: 'ОП', name: 'Олег Петренко', meta: '45 р., підприємець, Дніпро',
    result: 'Нормалізував тиск і сон', rating: 5,
    text: 'За 6 тижнів навчився управляти стресом, поміняв харчування. Тиск нормалізувався, сплю 7–8 годин.',
    bg: 'bg-white', tc: 'text-navy', mc: 'text-muted' },
  { init: 'АС', name: 'Анна Сидоренко', meta: '28 р., дизайнер, Одеса',
    result: 'Пішла хронічна втома', rating: 5,
    text: 'Вже на 3-му тижні відчула різницю: більше енергії, краща концентрація, стабільний настрій.',
    bg: 'bg-yellow', tc: 'text-navy', mc: 'text-navy/60' },
  { init: 'НВ', name: 'Наталія Василенко', meta: '38 р., вчителька, Харків',
    result: 'Вирішила проблему з ШКТ', rating: 5,
    text: 'Юлія чітко пояснила, що відбувається, і дала покроковий план. За місяць стан кишківника значно покращився.',
    bg: 'bg-white', tc: 'text-navy', mc: 'text-muted' },
  { init: 'ДМ', name: 'Дарина Мельник', meta: '25 р., магістрантка, Львів',
    result: '-5 кг + розуміння тіла', rating: 5,
    text: 'Не чергова дієта — це переключення мислення. Пояснюють ЧОМУ, а не просто що можна чи ні.',
    bg: 'bg-sky', tc: 'text-navy', mc: 'text-muted' },
];

const Stars = ({ dark }) => (
  <div className="flex gap-0.5">
    {[1,2,3,4,5].map(i => (
      <svg key={i} className={`w-3 h-3 fill-current ${dark ? 'text-yellow' : 'text-yellow'}`} viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const [exp, setExp] = useState(null);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
          <div>
            <p className="section-label mb-4">Відгуки</p>
            <h2 className="display-heading text-4xl md:text-5xl">
              Реальні<br />
              <span className="text-yellow">результати <span className="text-navy">✦</span></span>
            </h2>
          </div>
          <div className="flex items-center gap-3 pb-1">
            <Stars/>
            <span className="font-display font-bold text-xl text-navy">5.0</span>
            <span className="text-muted text-sm font-sans">· 127 відгуків</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {T.map((t, i) => (
            <div key={t.name} className={`${t.bg} rounded-3xl p-6 flex flex-col shadow-card
                                         transition-all duration-300 hover:shadow-float hover:-translate-y-0.5`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-9 h-9 rounded-2xl flex items-center justify-center text-xs font-display font-bold shrink-0
                                 ${t.bg === 'bg-navy' ? 'bg-yellow text-navy' :
                                   t.bg === 'bg-yellow' ? 'bg-navy text-white' : 'bg-sky text-navy'}`}>
                  {t.init}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-sans font-semibold text-sm ${t.tc}`}>{t.name}</div>
                  <div className={`text-xs font-sans ${t.mc}`}>{t.meta}</div>
                </div>
                <Stars/>
              </div>

              {/* Result */}
              <div className={`inline-flex items-center gap-1.5 text-[10px] font-sans font-semibold
                              px-2.5 py-1 rounded-full mb-3 self-start
                              ${t.bg === 'bg-navy' ? 'bg-yellow/20 text-yellow' :
                                t.bg === 'bg-yellow' ? 'bg-navy/15 text-navy' : 'bg-navy/8 text-navy'}`}>
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                {t.result}
              </div>

              <p className={`text-xs font-sans leading-relaxed flex-1 ${exp !== i ? 'line-clamp-3' : ''} ${t.mc}`}>
                "{t.text}"
              </p>
              <button onClick={() => setExp(exp === i ? null : i)}
                      className={`text-[10px] font-sans mt-2 text-left hover:underline ${t.mc}`}>
                {exp === i ? 'Згорнути' : 'Читати'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
