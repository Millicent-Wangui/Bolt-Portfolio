import { Wrench, Network, Settings } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Skills() {
  const skillCategories = [
    {
      title: 'IT Support',
      icon: Wrench,
      skills: resumeData.skills.support,
      color: 'teal'
    },
    {
      title: 'Networking',
      icon: Network,
      skills: resumeData.skills.networking,
      color: 'blue'
    },
    {
      title: 'Tools & Systems',
      icon: Settings,
      skills: resumeData.skills.tools,
      color: 'amber'
    }
  ];

  const colorClasses = {
    teal: {
      bg: 'bg-teal-50',
      icon: 'bg-teal-100 text-teal-600',
      chip: 'bg-teal-100 text-teal-700 border-teal-200'
    },
    blue: {
      bg: 'bg-blue-50',
      icon: 'bg-blue-100 text-blue-600',
      chip: 'bg-blue-100 text-blue-700 border-blue-200'
    },
    amber: {
      bg: 'bg-amber-50',
      icon: 'bg-amber-100 text-amber-600',
      chip: 'bg-amber-100 text-amber-700 border-amber-200'
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color as keyof typeof colorClasses];

            return (
              <div
                key={index}
                className={`${colors.bg} rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${colors.icon} rounded-xl`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 ${colors.chip} rounded-lg text-sm font-medium border`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
