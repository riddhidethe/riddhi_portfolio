import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/mock';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [phase, setPhase] = useState(0);

  const phrases = [
    '> riddhi.init()',
    '> Loading portfolio...',
    personalInfo.name
  ];

  useEffect(() => {
    if (phase >= phrases.length) return;

    const currentPhrase = phrases[phase];
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index <= currentPhrase.length) {
        setDisplayText(currentPhrase.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          if (phase < phrases.length - 1) {
            setDisplayText('');
            setPhase(phase + 1);
          }
        }, phase === phrases.length - 1 ? 0 : 800);
      }
    }, phase === 0 ? 100 : phase === 1 ? 50 : 80);

    return () => clearInterval(typingInterval);
  }, [phase]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#00f5ff 1px, transparent 1px), linear-gradient(90deg, #00f5ff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }} />
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Terminal window effect */}
        <div className="mb-8 inline-block">
          <div className="bg-[#1a1a2e]/80 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 p-6 text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-xs text-gray-400 font-mono">terminal</span>
            </div>
            <div className="font-mono text-cyan-400 text-sm mb-2">
              <span className="text-gray-500">$</span> {displayText}
              {showCursor && phase < phrases.length && <span className="inline-block w-2 h-5 bg-cyan-400 ml-1 animate-pulse" />}
            </div>
          </div>
        </div>

        {phase >= phrases.length - 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
              <span className="font-mono text-cyan-400 text-sm">{personalInfo.role}</span>
            </div>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="flex items-center justify-center gap-4 pt-4">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
              >
                View Projects
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                Get in Touch
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 pt-6">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      {phase >= phrases.length - 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-cyan-400" size={32} />
        </div>
      )}

      <style>{`
        @keyframes grid-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
