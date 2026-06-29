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
    <section id="cta" className="py-20 lg:py-28 bg-sky">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left */}
          <div>
            <p className="section-label mb-4">Почати зараз</p>
            <h2 className="display-heading text-4xl md:text-5xl lg:text-6xl mb-6">
              Фахівець,<br />якому можна<br />
              <span className="text-yellow">довіряти<span className="text-navy"> ✦</span></span>
            </h2>
            <ul className="space-y-3 mb-8">
              {[
                "Команда піклування про ваше здоров'я",
                "Здоров'я — це благополуччя, а не відсутність хвороб",
                "Комплексний персоналізований підхід",
              ].map(l => (
                <li key={l} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-yellow flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 fill-current text-navy" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </span>
                  <span className="text-muted-dark font-sans text-sm">{l}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <span className="text-3xl">💊</span>
              <div>
                <p className="text-xs text-muted font-sans mb-0.5">Наші принципи</p>
                <p className="text-sm font-sans text-navy font-medium">Доказова медицина · Персональний підхід</p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="card p-7 lg:p-8">
            <h3 className="font-display font-bold text-2xl text-navy mb-1">
              Отримати програму
            </h3>
            <p className="text-muted-dark text-sm font-sans mb-6">
              Надішлемо деталі та відповімо протягом 24 год.
            </p>

            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-2xl bg-yellow flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h4 className="font-display font-bold text-xl text-navy mb-1">Дякуємо!</h4>
                <p className="text-muted-dark text-sm font-sans">Зв'яжемось найближчим часом.</p>
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
                           className={`w-full border rounded-2xl px-4 py-3.5 text-sm font-sans text-navy
                                       placeholder-muted focus:outline-none focus:border-navy/40 transition-colors bg-sky
                                       ${errors[f.name] ? 'border-red-300' : 'border-navy/10'}`}/>
                    {errors[f.name] && <p className="text-red-500 text-xs mt-1 font-sans">{errors[f.name]}</p>}
                  </div>
                ))}
                {status === 'error' && (
                  <p className="text-red-500 text-xs bg-red-50 rounded-xl px-3 py-2 font-sans">
                    Помилка. Спробуйте ще раз.
                  </p>
                )}
                <button type="submit" disabled={status === 'loading'} className="btn-dark w-full justify-center py-4 text-base">
                  {status === 'loading' ? 'Відправляємо...' : '→ Отримати програму'}
                </button>
                <p className="text-muted text-xs font-sans text-center">
                  Погоджуєтесь з обробкою персональних даних
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
