import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { portfolioData } from '../data/portfolioData';

// ─────────────────────────────────────────────
// 🔧 EmailJS Configuration
// Sign up FREE at https://www.emailjs.com
// Then fill in your Service ID, Template ID, and Public Key below.
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_portfolio';   // ← replace
const EMAILJS_TEMPLATE_ID = 'template_contact';    // ← replace
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';     // ← replace

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors]       = useState<Record<string, string>>({});
  const [status, setStatus]       = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg]   = useState('');

  const contactRows = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`
    },
    {
      id: 'phone',
      icon: Phone,
      label: 'Phone',
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`
    },
    {
      id: 'location',
      icon: MapPin,
      label: 'Location',
      value: portfolioData.personal.location,
      href: 'https://maps.google.com/?q=Giza,Egypt'
    }
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.from_name.trim())   errs.from_name  = 'Please provide your name';
    if (!formData.from_email.trim()) {
      errs.from_email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) {
      errs.from_email = 'Invalid email address';
    }
    if (!formData.subject.trim())  errs.subject = 'Subject is required';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    setErrorMsg('');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ from_name: '', from_email: '', subject: '', message: '' });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setStatus('error');
      setErrorMsg(
        msg.includes('YOUR_PUBLIC_KEY')
          ? 'EmailJS not configured yet. Please follow the setup instructions in Contact.tsx.'
          : 'Failed to send message. Please try emailing directly.'
      );
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border text-sm font-sans focus:outline-none transition-all ${
      errors[field]
        ? 'border-rose-400 bg-rose-50/30'
        : 'border-gray-200 bg-gray-50/50 focus:border-black focus:bg-white'
    }`;

  return (
    <section
      id="contact"
      className="relative py-28 px-6 sm:px-10 lg:px-16 bg-white overflow-hidden border-b border-gray-200/70"
    >
      {/* Large faint "SAY HELLO." watermark */}
      <div className="absolute -bottom-10 -left-6 select-none pointer-events-none opacity-[0.035] leading-none z-0">
        <span className="font-serif font-black text-[120px] sm:text-[180px] lg:text-[230px] tracking-tighter text-black whitespace-nowrap">
          SAY HELLO.
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div className="mb-3">
          <span className="text-xs font-sans uppercase tracking-[0.08em] text-gray-500 font-semibold">
            GET IN TOUCH
          </span>
        </div>

        {/* Two-tone Heading */}
        <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-900 mb-14">
          Let's work <span className="text-gray-400">together.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* ── Left: Info + Socials ── */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="font-serif text-base sm:text-lg text-gray-600 font-light leading-relaxed mb-8">
                Have a project in mind, an opportunity, or just want to say hello? I'd love to hear from you.
              </p>

              <div className="space-y-3 mb-10">
                {contactRows.map((row) => {
                  const IconComp = row.icon;
                  return (
                    <a
                      key={row.id}
                      href={row.href}
                      target={row.id === 'location' ? '_blank' : undefined}
                      rel="noreferrer"
                      className="group flex items-center gap-4 p-3.5 rounded-2xl transition-all duration-200 hover:bg-gray-100/80 border border-transparent hover:border-gray-200/60"
                    >
                      <div className="w-11 h-11 rounded-xl bg-gray-100 text-neutral-800 flex items-center justify-center shrink-0 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-200 shadow-xs">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-sans uppercase tracking-[0.08em] text-gray-400 block">
                          {row.label}
                        </span>
                        <span className="font-serif text-sm font-semibold text-neutral-900 group-hover:text-black">
                          {row.value}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <span className="text-xs font-sans uppercase tracking-[0.08em] text-gray-400 block mb-3">
                Find me online:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={portfolioData.personal.socials.github}
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:border-black text-xs font-mono text-gray-700 hover:text-black hover:bg-gray-50 transition-all"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.personal.socials.linkedin}
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:border-black text-xs font-mono text-gray-700 hover:text-black hover:bg-gray-50 transition-all"
                >
                  <FaLinkedinIn className="w-4 h-4 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: Contact Form ── */}
          <div className="lg:col-span-7">
            <div className="spec-card p-8 sm:p-10 border border-gray-200/80 shadow-card-soft">
              <div className="mb-6">
                <span className="text-xs font-sans uppercase tracking-[0.08em] text-gray-400 block mb-1">
                  START A CONVERSATION
                </span>
                <h3 className="font-serif font-bold text-2xl text-neutral-900">
                  Tell me about your project.
                </h3>
              </div>

              {/* ── Success State ── */}
              {status === 'success' && (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-neutral-900 mb-2">
                    Message Sent!
                  </h4>
                  <p className="font-serif text-sm text-gray-500 font-light max-w-sm mb-6">
                    Thank you! Your message has been delivered to Hamza's inbox. He'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-medium hover:bg-black transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

              {/* ── Form ── */}
              {status !== 'success' && (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-600 uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="from_name"
                        placeholder="Alex Morgan"
                        value={formData.from_name}
                        onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                        className={inputClass('from_name')}
                      />
                      {errors.from_name && (
                        <span className="text-[11px] text-rose-500 font-mono mt-1 block">{errors.from_name}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-600 uppercase tracking-wider mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="from_email"
                        placeholder="alex@example.com"
                        value={formData.from_email}
                        onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
                        className={inputClass('from_email')}
                      />
                      {errors.from_email && (
                        <span className="text-[11px] text-rose-500 font-mono mt-1 block">{errors.from_email}</span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono text-gray-600 uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Project Inquiry / Job Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={inputClass('subject')}
                    />
                    {errors.subject && (
                      <span className="text-[11px] text-rose-500 font-mono mt-1 block">{errors.subject}</span>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-gray-600 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      placeholder="Tell me about your project, timeline, and goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-rose-500 font-mono mt-1 block">{errors.message}</span>
                    )}
                  </div>

                  {/* Hidden field: recipient email for EmailJS template */}
                  <input type="hidden" name="to_email" value={portfolioData.personal.email} />
                  <input type="hidden" name="to_name"  value="Hamza Ashraf" />

                  {/* Error Banner */}
                  {status === 'error' && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold font-mono mb-1">Message not sent</p>
                        <p className="text-xs font-serif font-light">{errorMsg}</p>
                        <a
                          href={`mailto:${portfolioData.personal.email}`}
                          className="text-xs font-mono underline mt-1 inline-block"
                        >
                          Email directly instead →
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-neutral-900 hover:bg-black text-white text-xs font-semibold tracking-wide uppercase shadow-md transition-all duration-300 hover:ring-2 hover:ring-black/20 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending…</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
