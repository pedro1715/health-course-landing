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
      <div className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm"/>

      <div className="relative bg-warm-white rounded-3xl shadow-float w-full max-w-lg overflow-hidden
                      animate-[fadeIn_0.25s_ease]">
        {/* Accent bar */}
        <div className="h-1 bg-gradient-to-r from-coral via-lime to-olive"/>

        <div className="p-7 sm:p-8">
          {/* Close */}
          <button onClick={onClose} aria-label="Закрити"
                  className="absolute top-5 right-5 w-8 h-8 rounded-full bg-beige
                             flex items-center justify-center text-warm-gray hover:bg-olive hover:text-cream transition-all">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-lime flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal mb-2">Заявку отримано!</h3>
              <p className="text-warm-gray text-sm mb-8">Зв'яжемось з вами протягом <strong>24 годин</strong> у робочий день.</p>
              <button onClick={onClose} className="btn-coral px-10">Закрити</button>
            </div>
          ) : (
            <>
              <p className="tag-coral mb-2">Безкоштовна консультація</p>
              <h2 className="font-serif text-2xl font-semibold text-charcoal mb-1">Записатися на курс</h2>
              <p className="text-warm-gray text-sm mb-6">Заповніть форму — відповімо протягом 24 годин.</p>

              <form onSubmit={submit} noValidate className="space-y-3.5">
                {[
                  { label: "Ім'я *", name: 'name',  type: 'text',  placeholder: 'Ім\'я та прізвище' },
                  { label: 'Email *', name: 'email', type: 'email', placeholder: 'your@email.com' },
                  { label: 'Телефон *', name: 'phone', type: 'tel', placeholder: '+38 (0XX) XXX-XX-XX' },
                ].map(f => (
                  <div key={f.name}>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">{f.label}</label>
                    <input {...f} value={form[f.name]} onChange={change}
                           className={`w-full border rounded-xl px-4 py-3 text-sm text-charcoal placeholder-warm-gray
                                       focus:outline-none focus:border-olive transition-colors
                                       ${errors[f.name] ? 'border-red-400 bg-red-50/20' : 'border-beige bg-white'}`}/>
                    {errors[f.name] && <p className="text-red-500 text-xs mt-1">{errors[f.name]}</p>}
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Запитання (необов'язково)</label>
                  <textarea name="question" value={form.question} onChange={change} rows={3}
                            placeholder="Що вас турбує або хочете покращити..."
                            className="w-full border border-beige rounded-xl px-4 py-3 text-sm text-charcoal
                                       placeholder-warm-gray focus:outline-none focus:border-olive resize-none bg-white"/>
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-xs bg-red-50 rounded-lg px-4 py-2.5">
                    Сталась помилка. Спробуйте ще раз або напишіть нам напряму.
                  </p>
                )}

                <button type="submit" disabled={status === 'loading'} className="btn-coral w-full justify-center py-4 text-base">
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Відправляємо...
                    </span>
                  ) : 'Надіслати заявку →'}
                </button>

                <p className="text-center text-xs text-warm-gray">
                  Погоджуєтесь з{' '}
                  <a href="#" className="underline hover:text-charcoal">обробкою персональних даних</a>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
