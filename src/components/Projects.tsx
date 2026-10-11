import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { portfolioData, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Render stylized interactive mockup for each project
  const renderProjectVisual = (project: Project) => {
    switch (project.image) {
      case 'gym':
        return (
          <div className="w-full h-full bg-[#0d121c] p-4 sm:p-6 text-gray-200 flex flex-col justify-between font-mono select-none">
            {/* Window Topbar */}
            <div className="flex items-center justify-between pb-3 border-b border-gray-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[10px] text-gray-400">api.gymsystem.io/v1</span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                200 OK
              </span>
            </div>

            {/* Dashboard / API Preview */}
            <div className="py-4 space-y-2.5">
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-[#161f30] p-2 rounded border border-gray-800">
                  <div className="text-[9px] text-gray-400">MEMBERS</div>
                  <div className="text-sm font-bold text-white">1,420</div>
                </div>
                <div className="bg-[#161f30] p-2 rounded border border-gray-800">
                  <div className="text-[9px] text-gray-400">ACTIVE PLANS</div>
                  <div className="text-sm font-bold text-emerald-400">98.4%</div>
                </div>
                <div className="bg-[#161f30] p-2 rounded border border-gray-800">
                  <div className="text-[9px] text-gray-400">TRAINERS</div>
                  <div className="text-sm font-bold text-sky-400">28</div>
                </div>
              </div>

              {/* Endpoint Console */}
              <div className="bg-[#090d14] rounded-lg p-3 border border-gray-800 text-[11px] space-y-1.5 text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[9px]">POST</span>
                  <span className="text-gray-300">/auth/login</span>
                  <span className="text-gray-500 text-[10px] ml-auto">JWT Bearer</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-400 font-bold text-[9px]">GET</span>
                  <span className="text-gray-300">/members/subscriptions</span>
                  <span className="text-gray-500 text-[10px] ml-auto">role: admin</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-400 font-bold text-[9px]">PUT</span>
                  <span className="text-gray-300">/workouts/plan/:id</span>
                  <span className="text-gray-500 text-[10px] ml-auto">verified</span>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-gray-500 flex justify-between border-t border-gray-800/80 pt-2">
              <span>Node.js · Express · MongoDB</span>
              <span>Mo7amedTa7a / Gym_Project_BackEnd</span>
            </div>
          </div>
        );

      case 'medlink':
        return (
          <div className="w-full h-full bg-[#f4f7fb] p-4 sm:p-6 text-gray-800 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 text-[10px] font-mono text-gray-400">medlink.healthcare</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 font-medium">
                Hospital Portal
              </span>
            </div>

            <div className="py-3 space-y-2">
              <div className="bg-white p-3 rounded-xl shadow-xs border border-gray-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-xs">
                    Dr
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900 font-serif">Dr. Tarek Mansour</div>
                    <div className="text-[10px] text-gray-500 font-sans">Cardiology · Available Today</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md border border-emerald-200">
                  10:30 AM
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white p-2.5 rounded-xl border border-gray-200/80">
                  <span className="text-[10px] text-gray-400 block font-mono">NEXT APPOINTMENT</span>
                  <span className="font-semibold text-gray-900 font-serif text-[11px]">General Checkup</span>
                  <span className="text-[9px] text-sky-600 block">Room 304</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-gray-200/80">
                  <span className="text-[10px] text-gray-400 block font-mono">RECORDS</span>
                  <span className="font-semibold text-gray-900 font-serif text-[11px]">Lab Results Ready</span>
                  <span className="text-[9px] text-emerald-600 block">PDF Download</span>
                </div>
              </div>
            </div>

            <div className="text-[10px] font-mono text-gray-400 flex justify-between border-t border-gray-200 pt-2">
              <span>Angular · Node · TypeScript</span>
              <span>AhmedMohammeFarouq / Medlink</span>
            </div>
          </div>
        );

      case 'event':
        return (
          <div className="w-full h-full bg-[#11131a] p-4 sm:p-6 text-gray-200 flex flex-col justify-between font-sans select-none">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[10px] font-mono text-gray-400">events.dev/cairo</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-950/80 text-violet-300 border border-violet-800">
                Live Booking
              </span>
            </div>

            <div className="py-3 space-y-2">
              <div className="bg-gradient-to-r from-violet-900/60 to-indigo-900/40 p-3 rounded-xl border border-violet-700/40">
                <span className="text-[9px] font-sans uppercase tracking-[0.08em] text-violet-300">Featured Conference</span>
                <div className="text-sm font-bold text-white font-serif">Cairo Tech Summit 2026</div>
                <div className="text-[10px] text-gray-300 font-mono mt-1">OCT 24 · Greek Campus · 480 Attending</div>
              </div>

              <div className="flex items-center justify-between bg-[#191d28] p-2.5 rounded-xl border border-gray-800 text-xs">
                <div>
                  <div className="text-[11px] font-semibold text-white">Full-Stack Dev Day</div>
                  <div className="text-[9px] text-gray-400 font-mono">Workshops & Networking</div>
                </div>
                <span className="px-2 py-1 bg-white text-black text-[10px] font-bold rounded">
                  Book Pass
                </span>
              </div>
            </div>

            <div className="text-[10px] font-mono text-gray-500 flex justify-between border-t border-gray-800 pt-2">
              <span>Angular · Express · JWT</span>
              <span>hamzaashraf1040-ui / event_management</span>
            </div>
          </div>
        );

      default: // event
        return (
          <div className="w-full h-full bg-[#11131a] p-4 sm:p-6 text-gray-200 flex flex-col justify-between font-sans select-none">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[10px] font-mono text-gray-400">events.dev/cairo</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-950/80 text-violet-300 border border-violet-800">
                Live Booking
              </span>
            </div>

            <div className="py-3 space-y-2">
              <div className="bg-gradient-to-r from-violet-900/60 to-indigo-900/40 p-3 rounded-xl border border-violet-700/40">
                <span className="text-[9px] font-sans uppercase tracking-[0.08em] text-violet-300">Featured Conference</span>
                <div className="text-sm font-bold text-white font-serif">Cairo Tech Summit 2026</div>
                <div className="text-[10px] text-gray-300 font-mono mt-1">OCT 24 · Greek Campus · 480 Attending</div>
              </div>

              <div className="flex items-center justify-between bg-[#191d28] p-2.5 rounded-xl border border-gray-800 text-xs">
                <div>
                  <div className="text-[11px] font-semibold text-white">Full-Stack Dev Day</div>
                  <div className="text-[9px] text-gray-400 font-mono">Workshops & Networking</div>
                </div>
                <span className="px-2 py-1 bg-white text-black text-[10px] font-bold rounded">
                  Book Pass
                </span>
              </div>
            </div>

            <div className="text-[10px] font-mono text-gray-500 flex justify-between border-t border-gray-800 pt-2">
              <span>Angular · Express · JWT</span>
              <span>hamzaashraf1040-ui / event_management</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 sm:px-10 lg:px-16 bg-[#f8f9fa] border-b border-gray-200/70"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Block */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-sans uppercase tracking-[0.08em] text-gray-500 font-semibold block mb-3">
            MY WORK
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-900 leading-tight mb-4">
            Selected <span className="text-gray-400">Projects.</span>
          </h2>
          <p className="font-serif text-sm sm:text-base text-gray-500 font-light leading-relaxed">
            A selection of applications and APIs I've built while exploring modern technologies, secure databases, and responsive UI development.
          </p>
        </div>

        {/* Alternating Project Rows */}
        <div className="space-y-16">
          {portfolioData.projects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={project.id}
                className="spec-card p-6 sm:p-8 lg:p-10"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Preview Frame (Left or Right) */}
                  <div
                    className={`lg:col-span-6 w-full ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="group relative rounded-2xl overflow-hidden shadow-md border border-gray-200/80 aspect-[16/10] bg-gray-900 transition-all duration-300 hover:shadow-xl">
                      {renderProjectVisual(project)}
                      
                      {/* Interactive Hover Overlay button */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 rounded-full bg-white text-black text-xs font-semibold flex items-center gap-1.5 shadow-lg hover:bg-gray-100 transition-transform hover:scale-105"
                        >
                          <FaGithub className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                        <a
                          href={project.liveUrl || project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 rounded-full bg-black text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg hover:bg-neutral-800 transition-transform hover:scale-105"
                        >
                          <span>Live View</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Text Details (Right or Left) */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-center ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-2xl sm:text-3xl font-extrabold text-gray-300">
                        {project.index}
                      </span>
                      <span className="text-xs font-sans uppercase tracking-[0.08em] text-gray-400 px-2.5 py-0.5 rounded-full bg-gray-100">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-neutral-900 mb-2 leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-xs font-mono text-neutral-600 mb-3 font-medium">
                      {project.tagline}
                    </p>

                    <p className="font-serif text-sm text-gray-500 font-light leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 mb-6">
                      {project.highlights.slice(0, 3).map((item, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs font-serif text-gray-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-neutral-800 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                      <a
                        href={project.liveUrl || project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-black transition-all hover:ring-2 hover:ring-black/20"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-neutral-800 text-xs font-medium hover:bg-gray-100 transition-colors"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
