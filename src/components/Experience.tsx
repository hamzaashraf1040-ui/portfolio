import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  return (
    <section
      id="experience"
      className="py-24 px-6 sm:px-10 lg:px-16 bg-[#f8f9fa] border-b border-gray-200/70"
    >
      <div className="max-w-5xl mx-auto">
        {/* Centered Eyebrow, Heading, Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-sans uppercase tracking-[0.08em] text-gray-500 font-semibold block mb-3">
            PROFESSIONAL EXPERIENCE
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-900 mb-4">
            My <span className="text-gray-400">Experience.</span>
          </h2>
          <p className="font-serif text-sm sm:text-base text-gray-500 font-light leading-relaxed">
            My professional journey through full-stack engineering, front-end development, and modern responsive UI design.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Center/Side Line */}
          <div className="absolute left-4 sm:left-32 md:left-40 top-4 bottom-4 w-0.5 bg-gray-200" />

          <div className="space-y-12">
            {portfolioData.experience.map((item, idx) => (
              <div
                key={idx}
                className="relative flex flex-col sm:flex-row items-start gap-6 sm:gap-10 group"
              >
                {/* Date on the Left (Desktop) */}
                <div className="pl-12 sm:pl-0 sm:w-28 md:w-36 pt-1 text-left sm:text-right shrink-0">
                  <div className="inline-flex sm:flex flex-col sm:items-end gap-1">
                    <span className="text-xs font-sans font-semibold text-neutral-700 flex items-center sm:justify-end gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-400 sm:hidden" />
                      {item.period}
                    </span>
                    <span className="text-[11px] font-sans text-gray-400 flex items-center sm:justify-end gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Dot Marker */}
                <div className="absolute left-4 sm:left-32 md:left-40 -translate-x-[7px] top-2 w-4 h-4 rounded-full bg-white border-2 border-neutral-900 group-hover:scale-125 group-hover:bg-neutral-900 transition-all z-10 shadow-sm" />

                {/* Card on the Right */}
                <div className="w-full pl-10 sm:pl-0 flex-1">
                  <div className="spec-card p-6 sm:p-8">
                    {/* Top Row: Index number + Role + Org */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="inline-flex items-center gap-1.5 text-xs font-sans text-gray-500 uppercase tracking-[0.08em] mb-1">
                          <Briefcase className="w-3.5 h-3.5 text-gray-400" />
                          {item.organization}
                        </span>
                        <h3 className="font-sans font-bold text-lg sm:text-xl text-neutral-900 leading-snug">
                          {item.role}
                        </h3>
                      </div>
                      <span className="font-sans text-xl sm:text-2xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors shrink-0">
                        {item.index}
                      </span>
                    </div>

                    {/* Bullet List */}
                    <ul className="space-y-2.5 mb-6 text-gray-600 font-serif font-light text-xs sm:text-sm leading-relaxed">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0 group-hover:bg-black transition-colors" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Tag Pills: hovered/active turns dark */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                      {item.tags.map((tag, tIdx) => {
                        const isTagActive = activeTag === tag;
                        return (
                          <button
                            key={tIdx}
                            onMouseEnter={() => setActiveTag(tag)}
                            onMouseLeave={() => setActiveTag(null)}
                            className={`text-[11px] font-sans px-3 py-1 rounded-full transition-all duration-200 border ${
                              isTagActive
                                ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                                : 'bg-gray-100/90 text-gray-600 border-gray-200/60 hover:bg-neutral-900 hover:text-white hover:border-neutral-900'
                            }`}
                          >
                            {tag}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
