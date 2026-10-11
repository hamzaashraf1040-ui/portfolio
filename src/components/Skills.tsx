import React, { useState } from 'react';
import { 
  SiAngular, 
  SiTypescript, 
  SiJavascript, 
  SiBootstrap, 
  SiHtml5, 
  SiCss, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiGit, 
  SiGithub, 
  SiPostman 
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  brandColor: string;
  description: string;
}

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const skillsList: TechItem[] = [
    { name: 'Angular', category: 'Frontend', icon: SiAngular, brandColor: '#DD0031', description: 'SPAs & Reactive Forms' },
    { name: 'TypeScript', category: 'Frontend', icon: SiTypescript, brandColor: '#3178C6', description: 'Type-Safe Architecture' },
    { name: 'JavaScript', category: 'Frontend', icon: SiJavascript, brandColor: '#F7DF1E', description: 'ES6+ Modern Syntax' },
    { name: 'Bootstrap', category: 'Frontend', icon: SiBootstrap, brandColor: '#7952B3', description: 'Responsive Framework' },
    { name: 'HTML5', category: 'Frontend', icon: SiHtml5, brandColor: '#E34F26', description: 'Semantic Markup' },
    { name: 'CSS', category: 'Frontend', icon: SiCss, brandColor: '#1572B6', description: 'Flexbox, Grid & Animation' },
    { name: 'Node.js', category: 'Backend', icon: SiNodedotjs, brandColor: '#5FA04E', description: 'Server-side Runtime' },
    { name: 'Express.js', category: 'Backend', icon: SiExpress, brandColor: '#000000', description: 'REST APIs & Middleware' },
    { name: 'REST APIs', category: 'Backend', icon: TbApi, brandColor: '#2563EB', description: 'Endpoints & JSON Data' },
    { name: 'MongoDB', category: 'Database', icon: SiMongodb, brandColor: '#47A248', description: 'NoSQL & Mongoose ODM' },
    { name: 'Git', category: 'Tools', icon: SiGit, brandColor: '#F05032', description: 'Version Control' },
    { name: 'GitHub', category: 'Tools', icon: SiGithub, brandColor: '#181717', description: 'Collaboration & Repos' },
    { name: 'Postman', category: 'Tools', icon: SiPostman, brandColor: '#FF6C37', description: 'API Testing & Docs' },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

  const filteredSkills = filter === 'All' 
    ? skillsList 
    : skillsList.filter(s => s.category === filter);

  return (
    <section
      id="skills"
      className="py-24 px-6 sm:px-10 lg:px-16 bg-white border-b border-gray-200/70"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.08em] text-gray-500 font-semibold block mb-3">
              MY SKILLS
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-900 leading-tight mb-4">
              Tools I use to <span className="text-gray-400">build.</span>
            </h2>
            <p className="font-serif text-sm sm:text-base text-gray-500 font-light leading-relaxed max-w-xl">
              A collection of technologies and tools I use to create responsive, modern and user-friendly web applications across the full stack.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs font-mono px-3.5 py-1.5 rounded-full transition-all border ${
                  filter === cat
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                    : 'bg-gray-100 text-gray-600 border-gray-200/60 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column / 4-Column Grid of Tech Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mb-14">
          {filteredSkills.map((tech, idx) => {
            const IconComp = tech.icon;
            return (
              <div
                key={idx}
                className="spec-card p-5 sm:p-6 flex flex-col justify-between group cursor-default"
              >
                {/* Top Row: Tech Logo + Category Tag */}
                <div className="flex items-start justify-between mb-4">
                  <div className="skill-icon w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center p-2.5 transition-transform group-hover:scale-110 shadow-xs">
                    <IconComp className="w-full h-full" style={{ color: tech.brandColor }} />
                  </div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.08em] text-gray-400 px-2 py-0.5 rounded bg-gray-100/70">
                    Technology
                  </span>
                </div>

                {/* Bottom Row: Name + Small Descriptor */}
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-neutral-900 group-hover:text-black transition-colors leading-tight mb-1">
                    {tech.name}
                  </h3>
                  <p className="font-serif text-xs text-gray-500 font-light">
                    {tech.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Black Full-Width Banner Below */}
        <div className="spec-card-dark p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-sans uppercase tracking-[0.08em] text-gray-400 block mb-1">
                ALWAYS LEARNING
              </span>
              <p className="font-serif font-bold text-lg sm:text-2xl text-white">
                Exploring new technologies and improving every day.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-gray-200 transition-colors shrink-0"
          >
            <span>See Them In Action</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
