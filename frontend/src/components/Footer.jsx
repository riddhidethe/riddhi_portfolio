import React from 'react';
import { personalInfo } from '../data/mock';
import { Github, Linkedin, Mail, Heart, Terminal } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0f] border-t border-cyan-500/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-cyan-400">
              <Terminal size={24} />
              <span className="font-mono font-bold text-xl">RD</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-Stack Developer & AI/ML Engineer passionate about building innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-cyan-400 text-sm text-left transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-3 mb-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:scale-110 transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:scale-110 transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">{personalInfo.email}</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="flex items-center gap-2">
              © {currentYear} <span className="text-cyan-400 font-semibold">{personalInfo.name}</span>. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              Built with <Heart size={14} className="text-red-500 animate-pulse" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
