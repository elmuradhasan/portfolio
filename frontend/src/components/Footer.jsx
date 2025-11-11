import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">{personalInfo.name}</h3>
            <p className="text-slate-400">
              {personalInfo.title}
            </p>
            <p className="text-slate-500 text-sm">
              Building the future of web, one line of code at a time.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="#about"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold">Connect</h4>
            <div className="flex gap-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
