import { GraduationCap, Award, CheckCircle, Clock } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 mb-12 border border-slate-700">
            <div className="flex items-start gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-500/10 border border-teal-500/20 rounded-xl flex-shrink-0">
                <GraduationCap className="text-teal-400" size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {resumeData.education.degree}
                </h3>
                <p className="text-lg text-teal-400 font-semibold mb-2">
                  {resumeData.education.school}
                </p>
                <p className="text-slate-300">
                  Graduation: {resumeData.education.graduation_date}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-700">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                <Award className="text-amber-400" size={20} />
                <span className="text-amber-400 font-semibold">{resumeData.education.honors}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Award className="text-teal-600" size={28} />
              Professional Certifications
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {resumeData.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h4 className="text-lg font-bold text-slate-900 flex-1">
                      {cert.name}
                    </h4>
                    {cert.status === 'In progress' ? (
                      <div className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full flex-shrink-0">
                        <Clock size={14} />
                        <span className="text-xs font-semibold">In Progress</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 px-3 py-1 bg-teal-100 text-teal-700 rounded-full flex-shrink-0">
                        <CheckCircle size={14} />
                        <span className="text-xs font-semibold">Completed</span>
                      </div>
                    )}
                  </div>

                  {cert.date && (
                    <p className="text-sm text-slate-600">Earned: {cert.date}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
