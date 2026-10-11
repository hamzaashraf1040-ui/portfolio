import React, { useState } from 'react';
import { Award, ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { portfolioData, Certification } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section
      id="certifications"
      className="py-24 px-6 sm:px-10 lg:px-16 bg-white border-b border-gray-200/70"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-14">
          {/* Left Column: Eyebrow + Two-Tone Heading + Subtitle */}
          <div className="lg:col-span-5 flex flex-col items-start sticky top-28">
            <span className="text-xs font-sans uppercase tracking-[0.08em] text-gray-500 font-semibold mb-3">
              CERTIFICATIONS
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-900 leading-tight mb-4">
              Learning that <span className="text-gray-400">builds.</span>
            </h2>
            <p className="font-serif text-sm sm:text-base text-gray-500 font-light leading-relaxed max-w-sm mb-6">
              Professional training and accredited certifications that support my full-stack, frontend development, and modern engineering practices.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs font-mono text-gray-600">
              <span>Verified Credentials</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
          </div>

          {/* Right Column: 2x2 Grid of Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {portfolioData.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="spec-card p-6 flex flex-col justify-between group cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                >
                  {/* Top Bar: Icon + Year Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      <Award className="w-5 h-5 text-gray-200" />
                    </div>
                    <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200/60">
                      {cert.year}
                    </span>
                  </div>

                  {/* Body: Title + Issuer */}
                  <div>
                    <h3 className="font-serif font-bold text-base text-neutral-900 mb-1.5 leading-snug group-hover:text-black transition-colors">
                      {cert.title}
                    </h3>
                    <p className="font-serif text-xs text-gray-500 font-light mb-4">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Footer Link */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-neutral-800 font-medium group-hover:text-black">
                    <span className="font-serif">View Certificate</span>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Below the Grid: Full-Width Black Banner */}
        <div className="spec-card-dark p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-sans uppercase tracking-[0.08em] text-gray-400 block mb-2">
              ALWAYS LEARNING
            </span>
            <p className="font-serif font-bold text-xl sm:text-2xl text-white leading-snug">
              Continuously developing my skills through practical training and real-world projects.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-gray-200 transition-colors"
            >
              <span>Work with me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="w-full max-w-lg bg-white rounded-3xl p-7 shadow-2xl border border-gray-100 relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-black p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-neutral-900 text-white flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-sans uppercase tracking-[0.08em] text-gray-400">
                  {selectedCert.year} · Verified
                </span>
                <h3 className="font-serif font-bold text-lg text-neutral-900 leading-tight">
                  {selectedCert.title}
                </h3>
              </div>
            </div>

            <div className="py-2 mb-4">
              <p className="text-xs font-mono text-gray-500 mb-2">
                ISSUED BY: <span className="text-neutral-900 font-semibold">{selectedCert.issuer}</span>
              </p>
              <p className="font-serif text-sm text-gray-600 font-light leading-relaxed mb-4">
                {selectedCert.description}
              </p>

              <h4 className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-2">
                Core Competencies:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedCert.skills.map((s, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-xs font-mono px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-400 font-mono">
                Official Certification Record
              </span>
              <a
                href={selectedCert.credentialUrl || '#'}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-900 text-white text-xs font-medium hover:bg-black transition-colors"
              >
                <span>Visit Issuer</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
