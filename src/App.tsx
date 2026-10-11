import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Certifications } from './components/Certifications';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'certifications', 'experience', 'skills', 'projects', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        // find the entry with the largest intersection ratio that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.15, 0.4, 0.6],
        rootMargin: '-80px 0px -20% 0px',
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // IntersectionObserver for soft fade / slide-up reveal
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal-fade-up');
    revealElements.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* Floating Centered Pill Navbar with Scroll-Spy */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <div className="reveal-fade-up">
          <Certifications />
        </div>
        <div className="reveal-fade-up">
          <Experience />
        </div>
        <div className="reveal-fade-up">
          <Skills />
        </div>
        <div className="reveal-fade-up">
          <Projects />
        </div>
        <div className="reveal-fade-up">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default App;
