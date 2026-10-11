import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#080c14] text-gray-300 border-t border-white/10 pt-20 pb-12 px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Three Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Bio & Socials */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 mb-4">
                <span className="font-serif font-bold text-2xl text-white tracking-tight">
                  {portfolioData.personal.name.split(' ')[0]}
                </span>
                <span className="font-mono text-base text-gray-400">
                  .dev
                </span>
              </div>

              <p className="font-serif text-sm text-gray-400 font-light leading-relaxed max-w-sm mb-6">
                Full-Stack & Front-End Developer focused on creating modern, responsive, and user-friendly web experiences with React, Angular, Node.js, Express, MongoDB, and Tailwind CSS.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={portfolioData.personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn className="w-4 h-4 text-[#0A66C2]" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3">
            <span className="text-xs font-sans uppercase tracking-[0.08em] text-gray-400 block mb-5 font-semibold">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 font-serif text-sm font-light text-gray-300">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="hover:text-white hover:translate-x-1 transition-all focus:outline-none"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Let's Connect */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-sans uppercase tracking-[0.08em] text-gray-400 block mb-5 font-semibold">
                LET'S CONNECT
              </span>
              <p className="font-serif text-sm text-gray-400 font-light leading-relaxed mb-4">
                Have a project in mind or want to work together? Feel free to reach out anytime.
              </p>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="inline-flex items-center gap-2 text-sm text-white font-mono hover:text-gray-300 transition-colors py-1"
              >
                <span>{portfolioData.personal.email}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="inline-flex items-center gap-2 mt-6 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-xs font-mono text-emerald-300 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Thin Divider */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <span>Made with</span>
            <span className="text-rose-400">♥</span>
            <span>in Egypt</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
