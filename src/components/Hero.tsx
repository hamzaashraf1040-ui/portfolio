import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { 
  FaGithub, 
  FaLinkedinIn 
} from 'react-icons/fa6';
import { 
  SiTypescript, 
  SiJavascript, 
  SiCss, 
  SiNodedotjs, 
  SiExpress,
  SiMongodb,
  SiAngular,
  SiGit
} from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // Smooth scroll to contact
    scrollTo('contact');
  };

  const orbitingChips = [
    { name: 'Angular', icon: SiAngular, color: '#DD0031', anim: 'chip-anim-1', pos: 'top-2 -left-4 sm:-left-8' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E', anim: 'chip-anim-2', pos: '-top-4 right-10 sm:right-16' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', anim: 'chip-anim-3', pos: 'top-28 -right-6 sm:-right-10' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', anim: 'chip-anim-4', pos: 'bottom-20 -right-4 sm:-right-8' },
    { name: 'Express', icon: SiExpress, color: '#FFFFFF', anim: 'chip-anim-5', pos: '-bottom-4 right-16 sm:right-24' },
    { name: 'CSS', icon: SiCss, color: '#1572B6', anim: 'chip-anim-6', pos: 'bottom-6 -left-6 sm:-left-10' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', anim: 'chip-anim-1', pos: 'top-32 -left-8 sm:-left-14' },
    { name: 'Git', icon: SiGit, color: '#F05032', anim: 'chip-anim-3', pos: '-top-6 left-16 sm:left-24' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center pt-28 pb-20 px-6 sm:px-10 lg:px-16 bg-[#080c14] overflow-hidden text-white"
    >
      {/* Stage-light spotlight glow rising from bottom */}
      <div className="absolute inset-0 pointer-events-none hero-spotlight" />
      
      {/* Decorative ambient subtle circle */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Bio & Calls to Action */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Eyebrow / Greeting */}
          <div className="hero-eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-gray-300 font-mono">
              {portfolioData.personal.heroGreeting}
            </span>
          </div>

          {/* Large Name — gradient shimmer */}
          <h1 className="hero-name font-sans font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-[1.1] mb-3">
            <span className="gradient-text">{portfolioData.personal.name}</span>
          </h1>

          {/* Subtitle / Role */}
          <h2 className="hero-role font-sans text-xl sm:text-2xl text-gray-300 font-light tracking-wide mb-6">
            {portfolioData.personal.role}
          </h2>

          {/* Short Description */}
          <p className="hero-bio text-sm sm:text-base text-gray-400 font-light leading-relaxed max-w-xl mb-8">
            {portfolioData.personal.heroBio}
          </p>

          {/* CTA Buttons */}
          <div className="hero-btns flex flex-wrap items-center gap-4 mb-10">
            <button
              onClick={() => scrollTo('projects')}
              className="btn-ripple group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black font-semibold text-sm transition-all duration-300 hover:bg-black hover:text-white hover:ring-2 hover:ring-white/40 shadow-lg"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </button>

            <button
              onClick={handleDownloadCV}
              className="btn-ripple inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white font-medium text-sm bg-white/5 hover:bg-white/15 hover:border-white transition-all duration-300 backdrop-blur-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Social Icons Below */}
          <div className="hero-socials flex items-center gap-4 pt-2 border-t border-white/10 w-full max-w-md">
            <span className="text-xs font-sans uppercase tracking-[0.08em] text-gray-400">
              Connect:
            </span>
            <div className="flex items-center gap-3">
              <a
                href={portfolioData.personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
            <span className="text-xs text-gray-400 font-mono ml-auto">
              Based in Egypt
            </span>
          </div>
        </div>

        {/* Right Column: Circular Profile Photo with Orbiting Glass Chips */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div className="hero-photo relative w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 flex items-center justify-center">
            {/* Outer Subtle Orbit Rings */}
            <div className="absolute inset-0 rounded-full border border-white/10 animate-spin" style={{ animationDuration: '60s' }} />
            <div className="absolute -inset-4 sm:-inset-6 rounded-full border border-dashed border-white/5" />

            {/* Circular Backdrop glow */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-black via-[#101726] to-[#1c2438] shadow-2xl" />

            {/* Profile Photo */}
            <div className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl bg-neutral-900 group">
              <img
                src={portfolioData.personal.avatar}
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover object-top filter brightness-[1.03] contrast-[1.04] transition-transform duration-700 group-hover:scale-108"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = './assets/profile-BS-BRrDS.jpeg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Orbiting Glass-Style Floating Tech Chips */}
            {orbitingChips.map((chip, idx) => {
              const IconComp = chip.icon;
              return (
                <div
                  key={idx}
                  className={`absolute z-20 ${chip.pos} ${chip.anim}`}
                >
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.09] backdrop-blur-md border border-white/20 text-white shadow-xl hover:bg-white/25 hover:scale-115 hover:border-white/40 transition-all duration-200 cursor-default select-none">
                    <IconComp className="w-3.5 h-3.5 shrink-0" style={{ color: chip.color }} />
                    <span className="text-[11px] font-mono font-semibold tracking-tight">
                      {chip.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
