import { ArrowRight, Download } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-4xl">
          <div className="inline-block mb-4 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full">
            <span className="text-teal-400 text-sm font-medium">Available for opportunities</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {resumeData.person.name}
          </h1>

          <p className="text-2xl md:text-3xl text-slate-300 mb-6 font-light">
            {resumeData.person.headline}
          </p>

          <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
            {resumeData.person.short_bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg shadow-teal-500/25"
            >
              Request a call
              <ArrowRight size={20} />
            </a>

            <a
              href="/Millicent_Wangui_Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-200 border border-white/10"
            >
              <Download size={20} />
              Download resume
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <span className="text-slate-400">{resumeData.person.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <span className="text-slate-400">{resumeData.summary_metrics.years_experience}+ years experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <span className="text-slate-400">CompTIA A+ Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
