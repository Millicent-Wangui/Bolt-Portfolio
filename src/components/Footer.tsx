import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { resumeData } from '../data/resume';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{resumeData.person.name}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              CompTIA A+ certified IT Support professional dedicated to providing excellent technical support and solutions.
            </p>
            <div className="flex gap-3">
              <a
                href={resumeData.person.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors border border-white/10"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={resumeData.person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors border border-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${resumeData.person.email}`}
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors border border-white/10"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-slate-400 hover:text-teal-400 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="text-slate-400">
                <span className="text-white font-medium">Email:</span>
                <br />
                <a href={`mailto:${resumeData.person.email}`} className="hover:text-teal-400 transition-colors">
                  {resumeData.person.email}
                </a>
              </p>
              <p className="text-slate-400">
                <span className="text-white font-medium">Phone:</span>
                <br />
                <a href={`tel:${resumeData.person.phone}`} className="hover:text-teal-400 transition-colors">
                  {resumeData.person.phone}
                </a>
              </p>
              <p className="text-slate-400">
                <span className="text-white font-medium">Location:</span>
                <br />
                {resumeData.person.location}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} {resumeData.person.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10 text-sm font-medium"
            aria-label="Scroll to top"
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
