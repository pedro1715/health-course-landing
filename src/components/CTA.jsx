import React, { useState } from 'react';
import { submitLead } from '../utils/api.js';
import { validateEmail, validatePhone } from '../utils/validation.js';

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const change = e => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: null }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Введіть ім'я";
    const ee = validateEmail(form.email); if (ee) e.email = ee;
    const pe = validatePhone(form.phone); if (pe) e.phone = pe;
    return e;
  };

  const submit = async ev => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setStatus('loading');
    try {
      await submitLead({ ...form, source: 'CTA блок' });
      setStatus('success');
      setForm({ name: '', email: '', phone: '' });
    } catch { setStatus('error'); }
  };

  return (
    <section id="cta" className="bg-olive py-20 lg:py-32 overflow-hidden relative">

      {/* Watermark */}
      <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-start overflow-hidden pl-8">
        <span className="font-serif font-bold text-[20vw] text-lime/[0.04] whitespace-nowrap leading-none">
          HEALTH
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">

          {/* Left */}
          <div>
            <p className="tag-lime mb-4">Почати зараз</p>
            <h2 className="font-serif text-5xl lg:text-6xl font-semibold text-cream leading-[1.05] mb-6">
              Фахівець з<br />
              здоров'я,<br />
              <span className="italic text-lime">якому можна</span><br />
              довіряти
            </h2>

            {/* Pillars */}
            <div className="space-y-2 mt-8">
              {['Команда піклування про здоров'я', 'Здоров'я — це благополуччя', 'Комплексний підхід до вас'].map(l => (
                <div key={l} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime shrink-0"/>
                  <span className="text-cream/60 text-sm">{l}</span>
                </div>
              ))}
            </div>

            {/* Right panel info */}
            <div className="mt-8 flex items-center gap-3">
              <span className="text-3xl">💊</span>
              <div>
                <p className="text-cream/40 text-xs">Наші принципи</p>
                <p className="text-cream text-sm font-medium">Доказова медицина · Персональний підхід</p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-warm-white rounded-3xl p-7 shadow-float">
            <h3 className="font-serif text-2xl font-semibold text-charcoal mb-1">
              Отримати програму курсу
            </h3>
            <p className="text-warm-gray text-sm mb-6">
              Надішлемо детальну програму та відповімо на запитання протягом 24 год.
            </p>

            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-lime flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h4 className="font-serif text-xl font-semibold text-charcoal mb-1">Дякуємо!</h4>
                <p className="text-warm-gray text-sm">Зв'яжемось з вами найближчим часом.</p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-3">
                {[
                  { name: 'name',  type: 'text',  placeholder: "Ваше ім'я" },
                  { name: 'email', type: 'email', placeholder: 'Email' },
                  { name: 'phone', type: 'tel',   placeholder: 'Телефон' },
                ].map(f => (
                  <div key={f.name}>
                    <input {...f} value={form[f.name]} onChange={change}
                           className={`w-full border rounded-xl px-4 py-3 text-sm text-charcoal placeholder-warm-gray
                                       focus:outline-none focus:border-olive transition-colors
                                       ${errors[f.name] ? 'border-red-400 bg-red-50/30' : 'border-beige bg-white'}`}/>
                    {errors[f.name] && <p className="text-red-500 text-xs mt-1">{errors[f.name]}</p>}
                  </div>
                ))}

                {status === 'error' && (
                  <p className="text-red-500 text-xs bg-red-50 rounded-lg px-3 py-2">
                    Помилка. Спробуйте ще раз.
                  </p>
                )}

                <button type="submit" disabled={status === 'loading'} className="btn-coral w-full justify-center py-4 text-base">
                  {status === 'loading' ? 'Відправляємо...' : 'Отримати програму →'}
                </button>
                <p className="text-warm-gray text-xs text-center">
                  Погоджуюсь з обробкою персональних даних
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
