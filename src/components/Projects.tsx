import { Github, ExternalLink, Bot } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {resumeData.projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-500/10 border border-teal-500/20 rounded-xl">
                    <Bot className="text-teal-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-teal-400 text-sm font-medium">{project.type}</p>
                  </div>
                </div>
                {project.featured && (
                  <span className="px-3 py-1 bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-700">
                <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-lg">
                  {project.status}
                </span>

                <div className="flex gap-3 ml-auto">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-all duration-200 border border-white/10"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">View Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-all duration-200"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={resumeData.person.github}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-all duration-200 font-semibold"
          >
            <Github size={20} />
            View more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
