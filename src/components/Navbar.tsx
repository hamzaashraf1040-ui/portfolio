import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Centered Pill Navbar */}
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none transition-all duration-300">
        <nav
          className={`pointer-events-auto w-full max-w-5xl rounded-full bg-[#0a0d14]/95 backdrop-blur-md border border-white/10 px-5 sm:px-7 py-2.5 sm:py-3 flex items-center justify-between shadow-2xl transition-all duration-300 ${
            isScrolled ? 'shadow-black/40 border-white/15' : ''
          }`}
          aria-label="Main Navigation"
        >
          {/* Left: Brand Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-1 group text-left focus:outline-none"
            aria-label="Back to top"
          >
            <span className="font-sans font-bold text-lg sm:text-xl text-white tracking-tight group-hover:opacity-90 transition-opacity">
              {portfolioData.personal.name.split(' ')[0]}
            </span>
            <span className="font-mono text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
              .dev
            </span>
          </button>

          {/* Right: nav links + mobile toggle */}
          <div className="flex items-center gap-1 lg:gap-1.5">
            {/* Desktop Links */}
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`hidden md:inline-flex text-[11px] lg:text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-250 focus:outline-none ${
                    isActive
                      ? 'bg-white text-black font-semibold shadow-sm scale-105'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-1.5 rounded-full hover:bg-white/10 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer / Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden flex flex-col justify-center items-center p-6 animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-xs bg-[#0b0f19] border border-white/15 rounded-3xl p-6 shadow-2xl flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-3 border-b border-white/10">
              <span className="font-serif font-bold text-white text-lg">
                Navigation
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-1.5 py-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all ${
                      isActive
                        ? 'bg-white text-black font-semibold'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-white/10">
              <a
                href={portfolioData.personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="block text-center text-xs text-gray-400 hover:text-white py-1"
              >
                GitHub · LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
