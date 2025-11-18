import { Briefcase, MapPin, Calendar, TrendingUp } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-200"></div>

            {resumeData.experience.map((job, index) => (
              <div key={index} className="relative pl-20 pb-12 last:pb-0">
                <div className="absolute left-4 top-2 w-8 h-8 bg-teal-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <Briefcase size={16} className="text-white" />
                </div>

                <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.role}</h3>
                      <p className="text-lg text-teal-600 font-semibold mb-2">{job.employer}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {job.date_range}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {job.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex gap-3 text-slate-600 leading-relaxed">
                        <span className="text-teal-500 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {job.impact_metrics && (
                    <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-100">
                      {Object.entries(job.impact_metrics).map(([key, value], mIndex) => (
                        <div key={mIndex} className="flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-lg">
                          <TrendingUp size={16} className="text-teal-600" />
                          <span className="text-sm font-semibold text-slate-700">
                            {key.replace(/_/g, ' ')}: <span className="text-teal-600">{value}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
