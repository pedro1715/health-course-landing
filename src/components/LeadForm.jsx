import React, { useState, useEffect, useCallback } from 'react';
import { submitLead } from '../utils/api.js';
import { validateForm } from '../utils/validation.js';

const INIT = { name: '', email: '', phone: '', question: '' };

export default function LeadForm({ isOpen, onClose }) {
  const [form, setForm] = useState(INIT);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const esc = useCallback(e => { if (e.key === 'Escape') onClose(); }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', esc);
      document.body.style.overflow = 'hidden';
    } else {
      setStatus('idle'); setForm(INIT); setErrors({});
    }
    return () => { document.removeEventListener('keydown', esc); document.body.style.overflow = ''; };
  }, [isOpen, esc]);

  const change = e => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: null }));
  };

  const submit = async e => {
    e.preventDefault();
    const errs = validateForm(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('loading');
    try { await submitLead({ ...form, source: 'Модальна форма' }); setStatus('success'); }
    catch { setStatus('error'); }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4"
         onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="absolute inset-0 bg-navy/60 backdrop-blur-md"/>
      <div className="relative bg-white rounded-4xl shadow-deep w-full max-w-md overflow-hidden">

        {/* Yellow top bar */}
        <div className="h-1.5 bg-yellow"/>

        <div className="p-7 sm:p-8">
          <button onClick={onClose} aria-label="Закрити"
                  className="absolute top-5 right-5 w-8 h-8 rounded-xl bg-sky flex items-center justify-center
                             text-muted hover:bg-navy hover:text-white transition-all">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 rounded-2xl bg-yellow flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className="font-display font-bold text-2xl text-navy mb-1">Заявку отримано!</h3>
              <p className="text-muted-dark text-sm font-sans mb-8">
                Юлія зв'яжеться з вами протягом <strong className="text-navy">24 годин</strong>.
              </p>
              <button onClick={onClose} className="btn-dark px-10">Закрити</button>
            </div>
          ) : (
            <>
              <p className="section-label mb-2">Безкоштовна консультація</p>
              <h2 className="font-display font-bold text-2xl text-navy mb-1">Записатися на курс</h2>
              <p className="text-muted text-sm font-sans mb-6">Відповімо протягом 24 годин.</p>

              <form onSubmit={submit} noValidate className="space-y-3">
                {[
                  { label: "Ім'я *", name: 'name',  type: 'text',  ph: "Ваше ім'я" },
                  { label: 'Email *', name: 'email', type: 'email', ph: 'your@email.com' },
                  { label: 'Телефон *', name: 'phone', type: 'tel', ph: '+38 (0XX) XXX-XX-XX' },
                ].map(f => (
                  <div key={f.name}>
                    <label className="block text-xs font-sans font-medium text-navy/60 mb-1.5">{f.label}</label>
                    <input type={f.type} name={f.name} value={form[f.name]} onChange={change} placeholder={f.ph}
                           className={`w-full border rounded-2xl px-4 py-3 text-sm font-sans text-navy
                                       placeholder-muted bg-sky focus:outline-none focus:border-navy/30 transition-colors
                                       ${errors[f.name] ? 'border-red-300' : 'border-navy/10'}`}/>
                    {errors[f.name] && <p className="text-red-500 text-xs mt-1 font-sans">{errors[f.name]}</p>}
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-sans font-medium text-navy/60 mb-1.5">Запитання</label>
                  <textarea name="question" value={form.question} onChange={change} rows={3}
                            placeholder="Що вас турбує..."
                            className="w-full border border-navy/10 rounded-2xl px-4 py-3 text-sm font-sans
                                       text-navy placeholder-muted bg-sky focus:outline-none focus:border-navy/30
                                       resize-none transition-colors"/>
                </div>
                {status === 'error' && (
                  <p className="text-red-500 text-xs font-sans bg-red-50 rounded-xl px-3 py-2">
                    Помилка. Спробуйте ще раз.
                  </p>
                )}
                <button type="submit" disabled={status === 'loading'} className="btn-dark w-full justify-center py-4 text-base">
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Відправляємо...
                    </span>
                  ) : '→ Надіслати заявку'}
                </button>
                <p className="text-center text-xs text-muted font-sans">
                  Погоджуєтесь з <a href="#" className="underline">обробкою даних</a>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
