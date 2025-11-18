import { Award, TrendingUp, Users } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function About() {
  const metrics = [
    {
      icon: Award,
      value: resumeData.summary_metrics.certifications.length,
      label: 'Certifications',
      description: 'Professional IT certifications'
    },
    {
      icon: TrendingUp,
      value: `${resumeData.summary_metrics.tickets_resolved_month_avg}+`,
      label: 'Tickets/Month',
      description: 'Average resolution rate'
    },
    {
      icon: Users,
      value: resumeData.summary_metrics.onboarding_trained_staff,
      label: 'Staff Trained',
      description: 'Onboarded team members'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-slate-600 leading-relaxed text-center">
            {resumeData.person.short_bio}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                  <Icon className="text-teal-600" size={28} />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-slate-700 mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-slate-500">
                  {metric.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
