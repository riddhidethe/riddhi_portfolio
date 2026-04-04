import React, { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../data/mock';
import { GraduationCap, MapPin, Award } from 'lucide-react';

const StatCard = ({ label, value, delay }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const target = typeof value === 'number' ? value : parseFloat(value);
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div
      ref={ref}
      className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f1a]/80 backdrop-blur-md border border-cyan-500/30 rounded-lg p-6 text-center transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-4xl font-bold text-cyan-400 font-mono mb-2">
        {typeof value === 'number' && value % 1 !== 0
          ? count.toFixed(2)
          : Math.floor(count)}
        {label === 'CGPA' && '/10'}
      </div>
      <div className="text-sm text-gray-400 uppercase tracking-wider">{label}</div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f1a] relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="font-mono text-cyan-400">&lt;</span>
            About Me
            <span className="font-mono text-cyan-400">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Creative Central Layout */}
        <div className="relative mb-16">
          {/* Center Profile Avatar */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
              <div className="relative w-48 h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30 flex items-center justify-center overflow-hidden">
                <div className="text-7xl font-bold text-cyan-400/50 font-mono">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
            </div>
          </div>

          {/* Bio Card - Centered and Wide */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f1a]/80 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/20">
              <p className="text-gray-300 leading-relaxed text-lg text-center">
                {personalInfo.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard label="CGPA" value={personalInfo.stats.cgpa} delay={0} />
          <StatCard label="Internships" value={personalInfo.stats.internships} delay={100} />
          <StatCard label="Projects" value={personalInfo.stats.projects} delay={200} />
          <StatCard label="Publications" value={personalInfo.stats.publications} delay={300} />
        </div>
      </div>
    </section>
  );
};

export default About;
