import React from 'react';
import { Code, Sparkles, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 sm:px-10 lg:px-16 bg-[#f8f9fa] border-b border-gray-200/70"
    >
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow Label */}
        <div className="mb-3">
          <span className="text-xs font-sans uppercase tracking-[0.08em] text-gray-500 font-semibold">
            ABOUT ME
          </span>
        </div>

        {/* Two-tone Section Heading */}
        <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-900 mb-12">
          Turning ideas into <span className="text-gray-400">digital experiences.</span>
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative & Stats */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <p className="font-serif text-base sm:text-lg text-gray-600 font-light leading-relaxed">
              {portfolioData.personal.aboutP1}
            </p>

            <p className="font-serif text-sm sm:text-base text-gray-500 font-light leading-relaxed">
              {portfolioData.personal.aboutP2}
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 mt-4 border-t border-gray-200">
              {portfolioData.personal.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="spec-card p-5 text-center flex flex-col justify-center items-center"
                >
                  <span className="font-serif font-bold text-2xl sm:text-3xl text-neutral-900 mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs font-serif font-light text-gray-500 uppercase tracking-wider">
                    {stat.suffix ? stat.suffix : stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 2 Small Spec Cards + Wide Black Card */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Small Card 1 */}
            <div className="spec-card p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center shrink-0">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-neutral-900 mb-1">
                  Development
                </h3>
                <p className="font-serif text-xs text-gray-500 font-light leading-relaxed">
                  React, Angular, Node.js, Express, MongoDB & TypeScript. Focused on responsive architectures and clean code.
                </p>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="spec-card p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-neutral-900 mb-1">
                  Continuous Learning
                </h3>
                <p className="font-serif text-xs text-gray-500 font-light leading-relaxed">
                  Exploring Generative AI Agents, cloud infrastructure, and modern web application benchmarks.
                </p>
              </div>
            </div>

            {/* Wide Black Card */}
            <div className="spec-card-dark p-6 sm:p-7 flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-3">
                <Compass className="w-4 h-4 text-gray-400" />
                <span className="text-[11px] font-sans uppercase tracking-[0.08em] text-gray-400">
                  {portfolioData.personal.focusBanner.eyebrow}
                </span>
              </div>
              <p className="font-serif font-bold text-lg sm:text-xl text-white leading-snug">
                {portfolioData.personal.focusBanner.heading}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
