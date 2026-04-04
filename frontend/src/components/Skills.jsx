import React, { useEffect, useRef, useState } from 'react';
import { skills } from '../data/mock';
import { Code, Palette, Database, Cpu, Wrench, Zap } from 'lucide-react';

const categoryIcons = {
  languages: Code,
  frontend: Palette,
  backend: Cpu,
  databases: Database,
  aiml: Zap,
  tools: Wrench
};

const categoryNames = {
  languages: 'Programming Languages',
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  databases: 'Databases',
  aiml: 'AI/ML & Data Science',
  tools: 'Tools & Platforms'
};

const SkillCard = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative bg-gradient-to-br from-[#1a1a2e]/60 to-[#0f0f1a]/60 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 transition-all duration-500 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Skill Name */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-200 font-medium text-sm">{skill.name}</span>
        <span className={`text-cyan-400 font-mono text-sm font-bold transition-all duration-300 ${isHovered ? 'scale-125' : ''}`}>
          {skill.level}%
        </span>
      </div>
      
      {/* Progress Bar */}
      <div className="relative w-full h-2 bg-gray-800/50 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            boxShadow: isHovered ? '0 0 15px rgba(0, 245, 255, 0.8)' : '0 0 10px rgba(0, 245, 255, 0.4)'
          }}
        >
          {/* Glowing dot at the end */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const categories = [
    { key: 'languages', label: 'Languages', icon: Code },
    { key: 'frontend', label: 'Frontend', icon: Palette },
    { key: 'backend', label: 'Backend', icon: Cpu },
    { key: 'databases', label: 'Databases', icon: Database },
    { key: 'aiml', label: 'AI/ML', icon: Zap },
    { key: 'tools', label: 'Tools', icon: Wrench }
  ];

  const currentSkills = skills[activeCategory] || [];
  const Icon = categoryIcons[activeCategory];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-[#0f0f1a] to-[#0a0a0f] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="font-mono text-cyan-400">&lt;</span>
            My Tech Arsenal
            <span className="font-mono text-cyan-400">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here's what I work with—click around to explore different skill categories!
          </p>
        </div>

        {/* Interactive Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`group flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.key
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-black shadow-lg shadow-cyan-500/30 scale-105'
                    : 'bg-[#1a1a2e]/80 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/50 hover:scale-105'
                }`}
              >
                <CategoryIcon 
                  size={18} 
                  className={`transition-transform duration-300 ${
                    activeCategory === category.key ? 'rotate-12' : 'group-hover:rotate-12'
                  }`}
                />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1a1a2e]/80 to-[#0f0f1a]/80 backdrop-blur-md border border-cyan-500/30 rounded-xl px-6 py-4">
            <Icon className="text-cyan-400" size={28} />
            <h3 className="text-2xl font-bold text-white">{categoryNames[activeCategory]}</h3>
          </div>
        </div>

        {/* Skills Grid with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentSkills.map((skill, index) => (
            <SkillCard key={`${activeCategory}-${skill.name}`} skill={skill} index={index} />
          ))}
        </div>

        {/* Fun Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f1a]/80 backdrop-blur-md border border-cyan-500/30 rounded-xl p-6 text-center hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <div className="text-4xl mb-2">💻</div>
            <div className="text-2xl font-bold text-cyan-400 font-mono mb-1">6+</div>
            <div className="text-gray-400 text-sm">Programming Languages</div>
          </div>
          <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f1a]/80 backdrop-blur-md border border-cyan-500/30 rounded-xl p-6 text-center hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <div className="text-4xl mb-2">⚡</div>
            <div className="text-2xl font-bold text-cyan-400 font-mono mb-1">10+</div>
            <div className="text-gray-400 text-sm">Frameworks & Libraries</div>
          </div>
          <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#0f0f1a]/80 backdrop-blur-md border border-cyan-500/30 rounded-xl p-6 text-center hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <div className="text-4xl mb-2">🚀</div>
            <div className="text-2xl font-bold text-cyan-400 font-mono mb-1">15+</div>
            <div className="text-gray-400 text-sm">Tools & Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
